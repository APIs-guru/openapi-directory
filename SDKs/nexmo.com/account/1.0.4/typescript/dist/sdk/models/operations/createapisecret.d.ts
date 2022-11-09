import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateApiSecretPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateApiSecretSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateApiSecretRequest extends SpeakeasyBase {
    pathParams: CreateApiSecretPathParams;
    request: shared.CreateSecretRequest;
    security: CreateApiSecretSecurity;
}
export declare class CreateApiSecretResponse extends SpeakeasyBase {
    contentType: string;
    errorApiKeyNotFound?: shared.ErrorApiKeyNotFound;
    statusCode: number;
    createApiSecret400ApplicationJsonAny?: any;
    createApiSecret401ApplicationJsonAny?: any;
    secretInfo?: shared.SecretInfo;
}
