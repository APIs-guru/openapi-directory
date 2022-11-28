import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
import { Answer } from "./answer";



// QuestionInput
/** 
 * Represents a single question and some of its answers.
**/
export class QuestionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: Author;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


// Question
/** 
 * Represents a single question and some of its answers.
**/
export class Question extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: Author;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topAnswers", elemType: Answer })
  topAnswers?: Answer[];

  @SpeakeasyMetadata({ data: "json, name=totalAnswerCount" })
  totalAnswerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upvoteCount" })
  upvoteCount?: number;
}
