import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseMaterialSet } from "./coursematerialset";
import { GradebookSettings } from "./gradebooksettings";
import { DriveFolder } from "./drivefolder";


export enum CourseCourseStateEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Provisioned = "PROVISIONED",
    Declined = "DECLINED",
    Suspended = "SUSPENDED"
}


// Course
/** 
 * A Course in Classroom.
**/
export class Course extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=courseGroupEmail" })
  courseGroupEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=courseMaterialSets", elemType: CourseMaterialSet })
  courseMaterialSets?: CourseMaterialSet[];

  @SpeakeasyMetadata({ data: "json, name=courseState" })
  courseState?: CourseCourseStateEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionHeading" })
  descriptionHeading?: string;

  @SpeakeasyMetadata({ data: "json, name=enrollmentCode" })
  enrollmentCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradebookSettings" })
  gradebookSettings?: GradebookSettings;

  @SpeakeasyMetadata({ data: "json, name=guardiansEnabled" })
  guardiansEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=room" })
  room?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=teacherFolder" })
  teacherFolder?: DriveFolder;

  @SpeakeasyMetadata({ data: "json, name=teacherGroupEmail" })
  teacherGroupEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
