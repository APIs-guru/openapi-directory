import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendFullGeneralCommandPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class SendFullGeneralCommandRequests extends SpeakeasyBase {
    generalCommand?: shared.GeneralCommand;
    generalCommand1?: shared.GeneralCommand;
    generalCommand2?: shared.GeneralCommand;
}
export declare class SendFullGeneralCommandSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SendFullGeneralCommandRequest extends SpeakeasyBase {
    pathParams: SendFullGeneralCommandPathParams;
    request: SendFullGeneralCommandRequests;
    security: SendFullGeneralCommandSecurity;
}
export declare class SendFullGeneralCommandResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
