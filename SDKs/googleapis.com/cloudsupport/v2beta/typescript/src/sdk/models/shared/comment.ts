import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Actor } from "./actor";


// Comment
/** 
 * A comment associated with a support case.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: Actor;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=plainTextBody" })
  plainTextBody?: string;
}
