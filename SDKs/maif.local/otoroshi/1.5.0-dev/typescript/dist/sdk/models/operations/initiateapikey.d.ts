import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiateApiKeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class InitiateApiKeyRequest extends SpeakeasyBase {
    security: InitiateApiKeySecurity;
}
export declare class InitiateApiKeyResponse extends SpeakeasyBase {
    apiKey?: shared.ApiKey;
    contentType: string;
    statusCode: number;
}
