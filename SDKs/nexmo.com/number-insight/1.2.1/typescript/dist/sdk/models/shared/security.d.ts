import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiSecret extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    apiKey: SchemeApiKey;
    apiSecret: SchemeApiSecret;
}
