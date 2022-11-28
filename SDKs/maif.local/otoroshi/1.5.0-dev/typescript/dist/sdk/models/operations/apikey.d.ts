import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeyPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class ApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeyRequest extends SpeakeasyBase {
    pathParams: ApiKeyPathParams;
    security: ApiKeySecurity;
}
export declare class ApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
