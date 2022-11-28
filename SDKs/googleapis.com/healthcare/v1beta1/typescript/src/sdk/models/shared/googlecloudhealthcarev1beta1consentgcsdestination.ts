import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudHealthcareV1beta1ConsentGcsDestination
/** 
 * The Cloud Storage location for export.
**/
export class GoogleCloudHealthcareV1beta1ConsentGcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
