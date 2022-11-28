import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
import { GradeCategory } from "./gradecategory";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
import { MultipleChoiceQuestion } from "./multiplechoicequestion";


export enum CourseWorkAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}

export enum CourseWorkStateEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}

export enum CourseWorkSubmissionModificationModeEnum {
    SubmissionModificationModeUnspecified = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
    ModifiableUntilTurnedIn = "MODIFIABLE_UNTIL_TURNED_IN",
    Modifiable = "MODIFIABLE"
}

export enum CourseWorkWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}


// CourseWork
/** 
 * Course work created by a teacher for students of the course.
**/
export class CourseWork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=assigneeMode" })
  assigneeMode?: CourseWorkAssigneeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: Assignment;

  @SpeakeasyMetadata({ data: "json, name=associatedWithDeveloper" })
  associatedWithDeveloper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorUserId" })
  creatorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=dueTime" })
  dueTime?: TimeOfDay;

  @SpeakeasyMetadata({ data: "json, name=gradeCategory" })
  gradeCategory?: GradeCategory;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=individualStudentsOptions" })
  individualStudentsOptions?: IndividualStudentsOptions;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: Material })
  materials?: Material[];

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=multipleChoiceQuestion" })
  multipleChoiceQuestion?: MultipleChoiceQuestion;

  @SpeakeasyMetadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CourseWorkStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissionModificationMode" })
  submissionModificationMode?: CourseWorkSubmissionModificationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=topicId" })
  topicId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=workType" })
  workType?: CourseWorkWorkTypeEnum;
}
