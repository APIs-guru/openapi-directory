import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResellernotifyResource
/** 
 * JSON template for resellernotify response.
**/
export class ResellernotifyResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
