import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRunLocation
/** 
 * Information specifying where to deploy a Cloud Run Service.
**/
export class CloudRunLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
