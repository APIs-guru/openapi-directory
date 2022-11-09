import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StartTalkPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class StartTalkSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StartTalkRequest extends SpeakeasyBase {
    pathParams: StartTalkPathParams;
    request?: shared.StartTalkRequest;
    security: StartTalkSecurity;
}
export declare class StartTalkResponse extends SpeakeasyBase {
    contentType: string;
    startTalkResponse?: shared.StartTalkResponse;
    statusCode: number;
}
