import { SpeakeasyBase } from "../../../internal/utils";
import { CourseMaterialSet } from "./coursematerialset";
import { GradebookSettings } from "./gradebooksettings";
import { DriveFolder } from "./drivefolder";
export declare enum CourseCourseStateEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Provisioned = "PROVISIONED",
    Declined = "DECLINED",
    Suspended = "SUSPENDED"
}
/**
 * A Course in Classroom.
**/
export declare class Course extends SpeakeasyBase {
    alternateLink?: string;
    calendarId?: string;
    courseGroupEmail?: string;
    courseMaterialSets?: CourseMaterialSet[];
    courseState?: CourseCourseStateEnum;
    creationTime?: string;
    description?: string;
    descriptionHeading?: string;
    enrollmentCode?: string;
    gradebookSettings?: GradebookSettings;
    guardiansEnabled?: boolean;
    id?: string;
    name?: string;
    ownerId?: string;
    room?: string;
    section?: string;
    teacherFolder?: DriveFolder;
    teacherGroupEmail?: string;
    updateTime?: string;
}
