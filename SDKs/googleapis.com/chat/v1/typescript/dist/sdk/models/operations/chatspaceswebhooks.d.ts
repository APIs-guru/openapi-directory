import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesWebhooksPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ChatSpacesWebhooksMessageReplyOptionEnum {
    MessageReplyOptionUnspecified = "MESSAGE_REPLY_OPTION_UNSPECIFIED",
    ReplyMessageFallbackToNewThread = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD",
    ReplyMessageOrFail = "REPLY_MESSAGE_OR_FAIL"
}
export declare class ChatSpacesWebhooksQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    messageId?: string;
    messageReplyOption?: ChatSpacesWebhooksMessageReplyOptionEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    threadKey?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChatSpacesWebhooksRequest extends SpeakeasyBase {
    pathParams: ChatSpacesWebhooksPathParams;
    queryParams: ChatSpacesWebhooksQueryParams;
    request?: shared.MessageInput;
}
export declare class ChatSpacesWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
