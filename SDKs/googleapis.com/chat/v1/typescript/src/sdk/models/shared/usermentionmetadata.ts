import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";


export enum UserMentionMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Mention = "MENTION"
}


// UserMentionMetadata
/** 
 * Annotation metadata for user mentions (@).
**/
export class UserMentionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserMentionMetadataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
