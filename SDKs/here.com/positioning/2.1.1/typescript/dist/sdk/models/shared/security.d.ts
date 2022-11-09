import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeAccessToken extends SpeakeasyBase {
    authorization: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    apiKey: SchemeApiKey;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    accessToken: SchemeAccessToken;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
