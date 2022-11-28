import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartStreamPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class StartStreamSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StartStreamRequest extends SpeakeasyBase {
    pathParams: StartStreamPathParams;
    request: shared.StartStreamRequest;
    security: StartStreamSecurity;
}
export declare class StartStreamResponse extends SpeakeasyBase {
    contentType: string;
    startStreamResponse?: shared.StartStreamResponse;
    statusCode: number;
}
