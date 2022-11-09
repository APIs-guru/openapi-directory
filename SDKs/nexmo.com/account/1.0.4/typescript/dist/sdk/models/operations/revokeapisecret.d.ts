import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RevokeApiSecretPathParams extends SpeakeasyBase {
    apiKey: string;
    secretId: string;
}
export declare class RevokeApiSecretSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RevokeApiSecretRequest extends SpeakeasyBase {
    pathParams: RevokeApiSecretPathParams;
    security: RevokeApiSecretSecurity;
}
export declare class RevokeApiSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    revokeApiSecret401ApplicationJsonAny?: any;
    revokeApiSecret403ApplicationJsonAny?: any;
    revokeApiSecret404ApplicationJsonOneOf?: any;
}
