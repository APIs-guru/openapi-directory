import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";



// Answer
/** 
 * Represents an answer to a question
**/
export class Answer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: Author;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upvoteCount" })
  upvoteCount?: number;
}


// AnswerInput
/** 
 * Represents an answer to a question
**/
export class AnswerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: Author;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
