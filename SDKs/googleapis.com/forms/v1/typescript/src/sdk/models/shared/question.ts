import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChoiceQuestion } from "./choicequestion";
import { DateQuestion } from "./datequestion";
import { FileUploadQuestion } from "./fileuploadquestion";
import { Grading } from "./grading";
import { RowQuestion } from "./rowquestion";
import { ScaleQuestion } from "./scalequestion";
import { TextQuestion } from "./textquestion";
import { TimeQuestion } from "./timequestion";
import { ChoiceQuestionInput } from "./choicequestion";



// Question
/** 
 * Any question. The specific type of question is known by its `kind`.
**/
export class Question extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choiceQuestion" })
  choiceQuestion?: ChoiceQuestion;

  @SpeakeasyMetadata({ data: "json, name=dateQuestion" })
  dateQuestion?: DateQuestion;

  @SpeakeasyMetadata({ data: "json, name=fileUploadQuestion" })
  fileUploadQuestion?: FileUploadQuestion;

  @SpeakeasyMetadata({ data: "json, name=grading" })
  grading?: Grading;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowQuestion" })
  rowQuestion?: RowQuestion;

  @SpeakeasyMetadata({ data: "json, name=scaleQuestion" })
  scaleQuestion?: ScaleQuestion;

  @SpeakeasyMetadata({ data: "json, name=textQuestion" })
  textQuestion?: TextQuestion;

  @SpeakeasyMetadata({ data: "json, name=timeQuestion" })
  timeQuestion?: TimeQuestion;
}


// QuestionInput
/** 
 * Any question. The specific type of question is known by its `kind`.
**/
export class QuestionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=choiceQuestion" })
  choiceQuestion?: ChoiceQuestionInput;

  @SpeakeasyMetadata({ data: "json, name=dateQuestion" })
  dateQuestion?: DateQuestion;

  @SpeakeasyMetadata({ data: "json, name=fileUploadQuestion" })
  fileUploadQuestion?: FileUploadQuestion;

  @SpeakeasyMetadata({ data: "json, name=grading" })
  grading?: Grading;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowQuestion" })
  rowQuestion?: RowQuestion;

  @SpeakeasyMetadata({ data: "json, name=scaleQuestion" })
  scaleQuestion?: ScaleQuestion;

  @SpeakeasyMetadata({ data: "json, name=textQuestion" })
  textQuestion?: TextQuestion;

  @SpeakeasyMetadata({ data: "json, name=timeQuestion" })
  timeQuestion?: TimeQuestion;
}
