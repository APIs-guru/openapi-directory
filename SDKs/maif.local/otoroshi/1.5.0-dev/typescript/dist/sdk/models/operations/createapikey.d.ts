import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateApiKeyPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class CreateApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateApiKeyRequest extends SpeakeasyBase {
    pathParams: CreateApiKeyPathParams;
    request?: shared.ApiKey;
    security: CreateApiKeySecurity;
}
export declare class CreateApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
