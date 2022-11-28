import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActorInput } from "./actor";



// Comment
/** 
 * A comment associated with a support case.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: Actor;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=plainTextBody" })
  plainTextBody?: string;
}


// CommentInput
/** 
 * A comment associated with a support case.
**/
export class CommentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: ActorInput;
}
