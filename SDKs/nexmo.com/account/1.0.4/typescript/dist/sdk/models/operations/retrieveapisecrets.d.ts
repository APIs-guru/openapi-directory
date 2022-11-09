import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RetrieveApiSecretsPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class RetrieveApiSecretsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveApiSecretsRequest extends SpeakeasyBase {
    pathParams: RetrieveApiSecretsPathParams;
    security: RetrieveApiSecretsSecurity;
}
export declare class RetrieveApiSecretsResponse extends SpeakeasyBase {
    contentType: string;
    errorApiKeyNotFound?: shared.ErrorApiKeyNotFound;
    statusCode: number;
    retrieveApiSecrets200ApplicationJsonAny?: any;
    retrieveApiSecrets401ApplicationJsonAny?: any;
}
