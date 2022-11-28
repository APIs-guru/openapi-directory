import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllApiKeysSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class AllApiKeysRequest extends SpeakeasyBase {
    security: AllApiKeysSecurity;
}
export declare class AllApiKeysResponse extends SpeakeasyBase {
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
}
