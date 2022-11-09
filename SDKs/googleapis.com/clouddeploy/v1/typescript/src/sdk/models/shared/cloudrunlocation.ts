import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRunLocation
/** 
 * Information specifying where to deploy a Cloud Run Service.
**/
export class CloudRunLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
