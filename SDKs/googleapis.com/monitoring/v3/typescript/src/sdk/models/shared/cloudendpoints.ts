import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudEndpoints
/** 
 * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
**/
export class CloudEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=service" })
  service?: string;
}
