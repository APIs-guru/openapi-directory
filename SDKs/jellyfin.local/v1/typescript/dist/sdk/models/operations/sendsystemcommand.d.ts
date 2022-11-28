import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendSystemCommandPathParams extends SpeakeasyBase {
    command: shared.GeneralCommandTypeEnum;
    sessionId: string;
}
export declare class SendSystemCommandSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SendSystemCommandRequest extends SpeakeasyBase {
    pathParams: SendSystemCommandPathParams;
    security: SendSystemCommandSecurity;
}
export declare class SendSystemCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
