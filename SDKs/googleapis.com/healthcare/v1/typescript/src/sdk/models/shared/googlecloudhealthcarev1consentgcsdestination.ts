import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudHealthcareV1ConsentGcsDestination
/** 
 * The Cloud Storage location for export.
**/
export class GoogleCloudHealthcareV1ConsentGcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
