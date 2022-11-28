import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesMessagesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ChatSpacesMessagesCreateMessageReplyOptionEnum {
    MessageReplyOptionUnspecified = "MESSAGE_REPLY_OPTION_UNSPECIFIED",
    ReplyMessageFallbackToNewThread = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD",
    ReplyMessageOrFail = "REPLY_MESSAGE_OR_FAIL"
}
export declare class ChatSpacesMessagesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    messageId?: string;
    messageReplyOption?: ChatSpacesMessagesCreateMessageReplyOptionEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    threadKey?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChatSpacesMessagesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesCreateSecurity extends SpeakeasyBase {
    option1?: ChatSpacesMessagesCreateSecurityOption1;
    option2?: ChatSpacesMessagesCreateSecurityOption2;
}
export declare class ChatSpacesMessagesCreateRequest extends SpeakeasyBase {
    pathParams: ChatSpacesMessagesCreatePathParams;
    queryParams: ChatSpacesMessagesCreateQueryParams;
    request?: shared.MessageInput;
    security: ChatSpacesMessagesCreateSecurity;
}
export declare class ChatSpacesMessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
