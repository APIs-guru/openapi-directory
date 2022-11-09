import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
import { GradeCategory } from "./gradecategory";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
import { MultipleChoiceQuestion } from "./multiplechoicequestion";

export enum CourseWorkAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED"
,    AllStudents = "ALL_STUDENTS"
,    IndividualStudents = "INDIVIDUAL_STUDENTS"
}

export enum CourseWorkStateEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED"
,    Published = "PUBLISHED"
,    Draft = "DRAFT"
,    Deleted = "DELETED"
}

export enum CourseWorkSubmissionModificationModeEnum {
    SubmissionModificationModeUnspecified = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED"
,    ModifiableUntilTurnedIn = "MODIFIABLE_UNTIL_TURNED_IN"
,    Modifiable = "MODIFIABLE"
}

export enum CourseWorkWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED"
,    Assignment = "ASSIGNMENT"
,    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION"
,    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}


// CourseWork
/** 
 * Course work created by a teacher for students of the course.
**/
export class CourseWork extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=assigneeMode" })
  assigneeMode?: CourseWorkAssigneeModeEnum;

  @Metadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @Metadata({ data: "json, name=associatedWithDeveloper" })
  associatedWithDeveloper?: boolean;

  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=creatorUserId" })
  creatorUserId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @Metadata({ data: "json, name=dueTime" })
  dueTime?: TimeOfDay;

  @Metadata({ data: "json, name=gradeCategory" })
  gradeCategory?: GradeCategory;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=individualStudentsOptions" })
  individualStudentsOptions?: IndividualStudentsOptions;

  @Metadata({ data: "json, name=materials", elemType: shared.Material })
  materials?: Material[];

  @Metadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @Metadata({ data: "json, name=multipleChoiceQuestion" })
  multipleChoiceQuestion?: MultipleChoiceQuestion;

  @Metadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: CourseWorkStateEnum;

  @Metadata({ data: "json, name=submissionModificationMode" })
  submissionModificationMode?: CourseWorkSubmissionModificationModeEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=topicId" })
  topicId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=workType" })
  workType?: CourseWorkWorkTypeEnum;
}
