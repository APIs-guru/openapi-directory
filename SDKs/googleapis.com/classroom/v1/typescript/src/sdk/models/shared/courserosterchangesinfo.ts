import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CourseRosterChangesInfo
/** 
 * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
**/
export class CourseRosterChangesInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;
}
