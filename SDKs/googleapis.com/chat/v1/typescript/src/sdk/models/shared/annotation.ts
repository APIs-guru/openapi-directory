import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlashCommandMetadata } from "./slashcommandmetadata";
import { UserMentionMetadata } from "./usermentionmetadata";


export enum AnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED",
    UserMention = "USER_MENTION",
    SlashCommand = "SLASH_COMMAND"
}


// Annotation
/** 
 * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/107946847022116401880", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
**/
export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=slashCommand" })
  slashCommand?: SlashCommandMetadata;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AnnotationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userMention" })
  userMention?: UserMentionMetadata;
}
