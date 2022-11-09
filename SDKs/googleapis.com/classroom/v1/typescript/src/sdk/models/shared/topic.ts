import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Topic
/** 
 * Topic created by a teacher for the course
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topicId" })
  topicId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
