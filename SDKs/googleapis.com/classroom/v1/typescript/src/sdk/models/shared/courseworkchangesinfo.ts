import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CourseWorkChangesInfo
/** 
 * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
**/
export class CourseWorkChangesInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;
}
