import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelTopicDetails
/** 
 * Freebase topic information related to the channel.
**/
export class ChannelTopicDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicCategories" })
  topicCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=topicIds" })
  topicIds?: string[];
}
