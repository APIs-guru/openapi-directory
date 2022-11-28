import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudEndpoints
/** 
 * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
**/
export class CloudEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}
