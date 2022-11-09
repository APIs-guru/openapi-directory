import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChoiceQuestion } from "./choicequestion";
import { DateQuestion } from "./datequestion";
import { FileUploadQuestion } from "./fileuploadquestion";
import { Grading } from "./grading";
import { RowQuestion } from "./rowquestion";
import { ScaleQuestion } from "./scalequestion";
import { TextQuestion } from "./textquestion";
import { TimeQuestion } from "./timequestion";


// Question
/** 
 * Any question. The specific type of question is known by its `kind`.
**/
export class Question extends SpeakeasyBase {
  @Metadata({ data: "json, name=choiceQuestion" })
  choiceQuestion?: ChoiceQuestion;

  @Metadata({ data: "json, name=dateQuestion" })
  dateQuestion?: DateQuestion;

  @Metadata({ data: "json, name=fileUploadQuestion" })
  fileUploadQuestion?: FileUploadQuestion;

  @Metadata({ data: "json, name=grading" })
  grading?: Grading;

  @Metadata({ data: "json, name=questionId" })
  questionId?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=rowQuestion" })
  rowQuestion?: RowQuestion;

  @Metadata({ data: "json, name=scaleQuestion" })
  scaleQuestion?: ScaleQuestion;

  @Metadata({ data: "json, name=textQuestion" })
  textQuestion?: TextQuestion;

  @Metadata({ data: "json, name=timeQuestion" })
  timeQuestion?: TimeQuestion;
}
