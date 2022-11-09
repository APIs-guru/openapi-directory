import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudHealthcareV1beta1DicomBigQueryDestination } from "./googlecloudhealthcarev1beta1dicombigquerydestination";


// GoogleCloudHealthcareV1beta1DicomStreamConfig
/** 
 * StreamConfig specifies configuration for a streaming DICOM export.
**/
export class GoogleCloudHealthcareV1beta1DicomStreamConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudHealthcareV1beta1DicomBigQueryDestination;
}
