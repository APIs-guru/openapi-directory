import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestion } from "./choicequestion";
import { DateQuestion } from "./datequestion";
import { FileUploadQuestion } from "./fileuploadquestion";
import { Grading } from "./grading";
import { RowQuestion } from "./rowquestion";
import { ScaleQuestion } from "./scalequestion";
import { TextQuestion } from "./textquestion";
import { TimeQuestion } from "./timequestion";
import { ChoiceQuestionInput } from "./choicequestion";
/**
 * Any question. The specific type of question is known by its `kind`.
**/
export declare class Question extends SpeakeasyBase {
    choiceQuestion?: ChoiceQuestion;
    dateQuestion?: DateQuestion;
    fileUploadQuestion?: FileUploadQuestion;
    grading?: Grading;
    questionId?: string;
    required?: boolean;
    rowQuestion?: RowQuestion;
    scaleQuestion?: ScaleQuestion;
    textQuestion?: TextQuestion;
    timeQuestion?: TimeQuestion;
}
/**
 * Any question. The specific type of question is known by its `kind`.
**/
export declare class QuestionInput extends SpeakeasyBase {
    choiceQuestion?: ChoiceQuestionInput;
    dateQuestion?: DateQuestion;
    fileUploadQuestion?: FileUploadQuestion;
    grading?: Grading;
    questionId?: string;
    required?: boolean;
    rowQuestion?: RowQuestion;
    scaleQuestion?: ScaleQuestion;
    textQuestion?: TextQuestion;
    timeQuestion?: TimeQuestion;
}
