import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// Reply
/** 
 * A reply to a comment on a file.
**/
export class Reply extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=author" })
  author?: User;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createdTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=htmlContent" })
  htmlContent?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;
}
