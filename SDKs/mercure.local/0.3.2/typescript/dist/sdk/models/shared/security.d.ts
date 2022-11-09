import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeBearer extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeCookie extends SpeakeasyBase {
    apiKey: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    bearer: SchemeBearer;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    cookie: SchemeCookie;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
