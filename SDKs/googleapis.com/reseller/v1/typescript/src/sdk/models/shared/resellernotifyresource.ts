import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResellernotifyResource
/** 
 * JSON template for resellernotify response.
**/
export class ResellernotifyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
