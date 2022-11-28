import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendMessageCommandPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class SendMessageCommandQueryParams extends SpeakeasyBase {
    header?: string;
    text: string;
    timeoutMs?: number;
}
export declare class SendMessageCommandSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SendMessageCommandRequest extends SpeakeasyBase {
    pathParams: SendMessageCommandPathParams;
    queryParams: SendMessageCommandQueryParams;
    security: SendMessageCommandSecurity;
}
export declare class SendMessageCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
