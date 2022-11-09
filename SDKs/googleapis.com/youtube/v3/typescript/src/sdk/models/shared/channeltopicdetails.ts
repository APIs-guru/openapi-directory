import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelTopicDetails
/** 
 * Freebase topic information related to the channel.
**/
export class ChannelTopicDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicCategories" })
  topicCategories?: string[];

  @Metadata({ data: "json, name=topicIds" })
  topicIds?: string[];
}
