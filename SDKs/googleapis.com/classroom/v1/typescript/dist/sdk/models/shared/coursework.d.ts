import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Assignment } from "./assignment";
import { Date } from "./date";
import { TimeOfDay } from "./timeofday";
import { GradeCategory } from "./gradecategory";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
import { MultipleChoiceQuestion } from "./multiplechoicequestion";
export declare enum CourseWorkAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
export declare enum CourseWorkStateEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
export declare enum CourseWorkSubmissionModificationModeEnum {
    SubmissionModificationModeUnspecified = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
    ModifiableUntilTurnedIn = "MODIFIABLE_UNTIL_TURNED_IN",
    Modifiable = "MODIFIABLE"
}
export declare enum CourseWorkWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}
/**
 * Course work created by a teacher for students of the course.
**/
export declare class CourseWork extends SpeakeasyBase {
    alternateLink?: string;
    assigneeMode?: CourseWorkAssigneeModeEnum;
    assignment?: Assignment;
    associatedWithDeveloper?: boolean;
    courseId?: string;
    creationTime?: string;
    creatorUserId?: string;
    description?: string;
    dueDate?: Date;
    dueTime?: TimeOfDay;
    gradeCategory?: GradeCategory;
    id?: string;
    individualStudentsOptions?: IndividualStudentsOptions;
    materials?: Material[];
    maxPoints?: number;
    multipleChoiceQuestion?: MultipleChoiceQuestion;
    scheduledTime?: string;
    state?: CourseWorkStateEnum;
    submissionModificationMode?: CourseWorkSubmissionModificationModeEnum;
    title?: string;
    topicId?: string;
    updateTime?: string;
    workType?: CourseWorkWorkTypeEnum;
}
