import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum UserMentionMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Mention = "MENTION"
}
/**
 * Annotation metadata for user mentions (@).
**/
export declare class UserMentionMetadata extends SpeakeasyBase {
    type?: UserMentionMetadataTypeEnum;
    user?: User;
}
