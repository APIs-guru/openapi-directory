import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApiKeyPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class UpdateApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateApiKeyRequest extends SpeakeasyBase {
    pathParams: UpdateApiKeyPathParams;
    request?: shared.ApiKey;
    security: UpdateApiKeySecurity;
}
export declare class UpdateApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
