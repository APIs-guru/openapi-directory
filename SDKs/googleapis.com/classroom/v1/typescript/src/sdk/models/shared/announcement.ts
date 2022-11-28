import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";


export enum AnnouncementAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}

export enum AnnouncementStateEnum {
    AnnouncementStateUnspecified = "ANNOUNCEMENT_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}


// Announcement
/** 
 * Announcement created by a teacher for students of the course
**/
export class Announcement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=assigneeMode" })
  assigneeMode?: AnnouncementAssigneeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorUserId" })
  creatorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=individualStudentsOptions" })
  individualStudentsOptions?: IndividualStudentsOptions;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: Material })
  materials?: Material[];

  @SpeakeasyMetadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AnnouncementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
