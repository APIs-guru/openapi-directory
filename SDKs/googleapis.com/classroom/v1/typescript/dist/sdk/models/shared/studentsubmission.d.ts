import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignmentSubmission } from "./assignmentsubmission";
import { MultipleChoiceSubmission } from "./multiplechoicesubmission";
import { ShortAnswerSubmission } from "./shortanswersubmission";
import { SubmissionHistory } from "./submissionhistory";
export declare enum StudentSubmissionCourseWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}
export declare enum StudentSubmissionStateEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED",
    New = "NEW",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}
/**
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
**/
export declare class StudentSubmission extends SpeakeasyBase {
    alternateLink?: string;
    assignedGrade?: number;
    assignmentSubmission?: AssignmentSubmission;
    associatedWithDeveloper?: boolean;
    courseId?: string;
    courseWorkId?: string;
    courseWorkType?: StudentSubmissionCourseWorkTypeEnum;
    creationTime?: string;
    draftGrade?: number;
    id?: string;
    late?: boolean;
    multipleChoiceSubmission?: MultipleChoiceSubmission;
    shortAnswerSubmission?: ShortAnswerSubmission;
    state?: StudentSubmissionStateEnum;
    submissionHistory?: SubmissionHistory[];
    updateTime?: string;
    userId?: string;
}
