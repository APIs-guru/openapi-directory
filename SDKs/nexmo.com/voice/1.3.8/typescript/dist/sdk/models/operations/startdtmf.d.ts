import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartDtmfPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class StartDtmfSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class StartDtmfRequest extends SpeakeasyBase {
    pathParams: StartDtmfPathParams;
    request: shared.DtmfRequest;
    security: StartDtmfSecurity;
}
export declare class StartDtmfResponse extends SpeakeasyBase {
    contentType: string;
    dtmfResponse?: shared.DtmfResponse;
    statusCode: number;
}
