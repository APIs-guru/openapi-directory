import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationConfig } from "./notificationconfig";
import { GoogleCloudHealthcareV1beta1DicomStreamConfig } from "./googlecloudhealthcarev1beta1dicomstreamconfig";


// DicomStore
/** 
 * Represents a DICOM store.
**/
export class DicomStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=streamConfigs", elemType: shared.GoogleCloudHealthcareV1beta1DicomStreamConfig })
  streamConfigs?: GoogleCloudHealthcareV1beta1DicomStreamConfig[];
}
