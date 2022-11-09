import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoTopicDetails
/** 
 * Freebase topic information related to the video.
**/
export class VideoTopicDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=relevantTopicIds" })
  relevantTopicIds?: string[];

  @Metadata({ data: "json, name=topicCategories" })
  topicCategories?: string[];

  @Metadata({ data: "json, name=topicIds" })
  topicIds?: string[];
}
