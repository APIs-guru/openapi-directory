import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CourseRosterChangesInfo
/** 
 * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
**/
export class CourseRosterChangesInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;
}
