import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";

export enum AnnouncementAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED"
,    AllStudents = "ALL_STUDENTS"
,    IndividualStudents = "INDIVIDUAL_STUDENTS"
}

export enum AnnouncementStateEnum {
    AnnouncementStateUnspecified = "ANNOUNCEMENT_STATE_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Draft = "DRAFT"
,    Deleted = "DELETED"
}


// Announcement
/** 
 * Announcement created by a teacher for students of the course
**/
export class Announcement extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=assigneeMode" })
  assigneeMode?: AnnouncementAssigneeModeEnum;

  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=creatorUserId" })
  creatorUserId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=individualStudentsOptions" })
  individualStudentsOptions?: IndividualStudentsOptions;

  @Metadata({ data: "json, name=materials", elemType: shared.Material })
  materials?: Material[];

  @Metadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: AnnouncementStateEnum;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
