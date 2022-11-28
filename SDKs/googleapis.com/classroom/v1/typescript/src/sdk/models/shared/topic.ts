import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Topic
/** 
 * Topic created by a teacher for the course
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topicId" })
  topicId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
