import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const RecordConversationServerList: readonly ["https://api.nexmo.com/v1"];
export declare class RecordConversationPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class RecordConversationRequestBody extends SpeakeasyBase {
    action: shared.ActionEnum;
    eventMethod?: string;
    eventUrl?: string[];
    format?: shared.FormatEnum;
    split?: string;
}
export declare class RecordConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: RecordConversationPathParams;
    request?: RecordConversationRequestBody;
}
export declare class RecordConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
