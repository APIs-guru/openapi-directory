import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendGeneralCommandPathParams extends SpeakeasyBase {
    command: shared.GeneralCommandTypeEnum;
    sessionId: string;
}
export declare class SendGeneralCommandSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SendGeneralCommandRequest extends SpeakeasyBase {
    pathParams: SendGeneralCommandPathParams;
    security: SendGeneralCommandSecurity;
}
export declare class SendGeneralCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
