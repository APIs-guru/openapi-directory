import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum UserMentionMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Add = "ADD"
,    Mention = "MENTION"
}


// UserMentionMetadata
/** 
 * Annotation metadata for user mentions (@).
**/
export class UserMentionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: UserMentionMetadataTypeEnum;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
