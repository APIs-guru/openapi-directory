import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendPlaystateCommandPathParams extends SpeakeasyBase {
    command: shared.PlaystateCommandEnum;
    sessionId: string;
}
export declare class SendPlaystateCommandQueryParams extends SpeakeasyBase {
    controllingUserId?: string;
    seekPositionTicks?: number;
}
export declare class SendPlaystateCommandSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SendPlaystateCommandRequest extends SpeakeasyBase {
    pathParams: SendPlaystateCommandPathParams;
    queryParams: SendPlaystateCommandQueryParams;
    security: SendPlaystateCommandSecurity;
}
export declare class SendPlaystateCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
