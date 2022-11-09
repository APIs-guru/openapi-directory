import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CourseMaterialSet } from "./coursematerialset";
import { GradebookSettings } from "./gradebooksettings";
import { DriveFolder } from "./drivefolder";

export enum CourseCourseStateEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
,    Provisioned = "PROVISIONED"
,    Declined = "DECLINED"
,    Suspended = "SUSPENDED"
}


// Course
/** 
 * A Course in Classroom.
**/
export class Course extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=courseGroupEmail" })
  courseGroupEmail?: string;

  @Metadata({ data: "json, name=courseMaterialSets", elemType: shared.CourseMaterialSet })
  courseMaterialSets?: CourseMaterialSet[];

  @Metadata({ data: "json, name=courseState" })
  courseState?: CourseCourseStateEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptionHeading" })
  descriptionHeading?: string;

  @Metadata({ data: "json, name=enrollmentCode" })
  enrollmentCode?: string;

  @Metadata({ data: "json, name=gradebookSettings" })
  gradebookSettings?: GradebookSettings;

  @Metadata({ data: "json, name=guardiansEnabled" })
  guardiansEnabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=room" })
  room?: string;

  @Metadata({ data: "json, name=section" })
  section?: string;

  @Metadata({ data: "json, name=teacherFolder" })
  teacherFolder?: DriveFolder;

  @Metadata({ data: "json, name=teacherGroupEmail" })
  teacherGroupEmail?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
