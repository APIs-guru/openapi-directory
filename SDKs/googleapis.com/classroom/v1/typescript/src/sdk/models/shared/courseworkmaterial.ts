import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";

export enum CourseWorkMaterialAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED"
,    AllStudents = "ALL_STUDENTS"
,    IndividualStudents = "INDIVIDUAL_STUDENTS"
}

export enum CourseWorkMaterialStateEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Draft = "DRAFT"
,    Deleted = "DELETED"
}


// CourseWorkMaterial
/** 
 * Course work material created by a teacher for students of the course
**/
export class CourseWorkMaterial extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=assigneeMode" })
  assigneeMode?: CourseWorkMaterialAssigneeModeEnum;

  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=creatorUserId" })
  creatorUserId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=individualStudentsOptions" })
  individualStudentsOptions?: IndividualStudentsOptions;

  @Metadata({ data: "json, name=materials", elemType: shared.Material })
  materials?: Material[];

  @Metadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: CourseWorkMaterialStateEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=topicId" })
  topicId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
