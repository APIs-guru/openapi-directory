import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeApiKeyAuth extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKeyAuth?: SchemeApiKeyAuth;
}
