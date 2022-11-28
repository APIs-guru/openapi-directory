import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoTopicDetails
/** 
 * Freebase topic information related to the video.
**/
export class VideoTopicDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relevantTopicIds" })
  relevantTopicIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=topicCategories" })
  topicCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=topicIds" })
  topicIds?: string[];
}
