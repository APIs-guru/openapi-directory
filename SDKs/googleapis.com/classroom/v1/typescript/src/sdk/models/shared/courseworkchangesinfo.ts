import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CourseWorkChangesInfo
/** 
 * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
**/
export class CourseWorkChangesInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;
}
