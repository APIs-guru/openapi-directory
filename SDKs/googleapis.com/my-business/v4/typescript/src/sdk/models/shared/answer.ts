import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Author } from "./author";


// Answer
/** 
 * Represents an answer to a question
**/
export class Answer extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: Author;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upvoteCount" })
  upvoteCount?: number;
}
