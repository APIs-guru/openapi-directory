import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignmentSubmission } from "./assignmentsubmission";
import { MultipleChoiceSubmission } from "./multiplechoicesubmission";
import { ShortAnswerSubmission } from "./shortanswersubmission";
import { SubmissionHistory } from "./submissionhistory";

export enum StudentSubmissionCourseWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED"
,    Assignment = "ASSIGNMENT"
,    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION"
,    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}

export enum StudentSubmissionStateEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED"
,    New = "NEW"
,    Created = "CREATED"
,    TurnedIn = "TURNED_IN"
,    Returned = "RETURNED"
,    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}


// StudentSubmission
/** 
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
**/
export class StudentSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateLink" })
  alternateLink?: string;

  @Metadata({ data: "json, name=assignedGrade" })
  assignedGrade?: number;

  @Metadata({ data: "json, name=assignmentSubmission" })
  assignmentSubmission?: AssignmentSubmission;

  @Metadata({ data: "json, name=associatedWithDeveloper" })
  associatedWithDeveloper?: boolean;

  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=courseWorkId" })
  courseWorkId?: string;

  @Metadata({ data: "json, name=courseWorkType" })
  courseWorkType?: StudentSubmissionCourseWorkTypeEnum;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=draftGrade" })
  draftGrade?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=late" })
  late?: boolean;

  @Metadata({ data: "json, name=multipleChoiceSubmission" })
  multipleChoiceSubmission?: MultipleChoiceSubmission;

  @Metadata({ data: "json, name=shortAnswerSubmission" })
  shortAnswerSubmission?: ShortAnswerSubmission;

  @Metadata({ data: "json, name=state" })
  state?: StudentSubmissionStateEnum;

  @Metadata({ data: "json, name=submissionHistory", elemType: shared.SubmissionHistory })
  submissionHistory?: SubmissionHistory[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
