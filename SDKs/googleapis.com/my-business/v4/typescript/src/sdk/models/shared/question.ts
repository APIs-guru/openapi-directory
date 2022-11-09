import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Author } from "./author";
import { Answer } from "./answer";


// Question
/** 
 * Represents a single question and some of its answers.
**/
export class Question extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: Author;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topAnswers", elemType: shared.Answer })
  topAnswers?: Answer[];

  @Metadata({ data: "json, name=totalAnswerCount" })
  totalAnswerCount?: number;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upvoteCount" })
  upvoteCount?: number;
}
