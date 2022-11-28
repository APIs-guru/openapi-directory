import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopTalkPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class StopTalkSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StopTalkRequest extends SpeakeasyBase {
    pathParams: StopTalkPathParams;
    security: StopTalkSecurity;
}
export declare class StopTalkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopTalkResponse?: shared.StopTalkResponse;
}
