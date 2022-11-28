import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiKeyPathParams extends SpeakeasyBase {
    clientId: string;
    serviceId: string;
}
export declare class PatchApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchApiKeyRequest extends SpeakeasyBase {
    pathParams: PatchApiKeyPathParams;
    request?: shared.Patch[];
    security: PatchApiKeySecurity;
}
export declare class PatchApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
