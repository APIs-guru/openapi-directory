import { SpeakeasyBase } from "../../../internal/utils";
import { SlashCommandMetadata } from "./slashcommandmetadata";
import { UserMentionMetadata } from "./usermentionmetadata";
export declare enum AnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED",
    UserMention = "USER_MENTION",
    SlashCommand = "SLASH_COMMAND"
}
/**
 * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
**/
export declare class Annotation extends SpeakeasyBase {
    length?: number;
    slashCommand?: SlashCommandMetadata;
    startIndex?: number;
    type?: AnnotationTypeEnum;
    userMention?: UserMentionMetadata;
}
