import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopStreamPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class StopStreamSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StopStreamRequest extends SpeakeasyBase {
    pathParams: StopStreamPathParams;
    security: StopStreamSecurity;
}
export declare class StopStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopStreamResponse?: shared.StopStreamResponse;
}
