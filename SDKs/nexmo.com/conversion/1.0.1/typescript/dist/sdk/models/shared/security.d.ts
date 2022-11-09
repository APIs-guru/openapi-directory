import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiSecret extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeApiSig extends SpeakeasyBase {
    apiKey: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    apiKey: SchemeApiKey;
    apiSecret: SchemeApiSecret;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    apiKey: SchemeApiKey;
    apiSig: SchemeApiSig;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
