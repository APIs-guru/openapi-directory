import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiKeysPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ApiKeysSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ApiKeysRequest extends SpeakeasyBase {
    pathParams: ApiKeysPathParams;
    security: ApiKeysSecurity;
}
export declare class ApiKeysResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
}
