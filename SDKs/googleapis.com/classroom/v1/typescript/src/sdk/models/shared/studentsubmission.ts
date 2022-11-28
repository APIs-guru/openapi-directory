import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmission } from "./assignmentsubmission";
import { MultipleChoiceSubmission } from "./multiplechoicesubmission";
import { ShortAnswerSubmission } from "./shortanswersubmission";
import { SubmissionHistory } from "./submissionhistory";


export enum StudentSubmissionCourseWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}

export enum StudentSubmissionStateEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED",
    New = "NEW",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}


// StudentSubmission
/** 
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
**/
export class StudentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @SpeakeasyMetadata({ data: "json, name=assignedGrade" })
  assignedGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=assignmentSubmission" })
  assignmentSubmission?: AssignmentSubmission;

  @SpeakeasyMetadata({ data: "json, name=associatedWithDeveloper" })
  associatedWithDeveloper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=courseWorkId" })
  courseWorkId?: string;

  @SpeakeasyMetadata({ data: "json, name=courseWorkType" })
  courseWorkType?: StudentSubmissionCourseWorkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=draftGrade" })
  draftGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=late" })
  late?: boolean;

  @SpeakeasyMetadata({ data: "json, name=multipleChoiceSubmission" })
  multipleChoiceSubmission?: MultipleChoiceSubmission;

  @SpeakeasyMetadata({ data: "json, name=shortAnswerSubmission" })
  shortAnswerSubmission?: ShortAnswerSubmission;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StudentSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissionHistory", elemType: SubmissionHistory })
  submissionHistory?: SubmissionHistory[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
