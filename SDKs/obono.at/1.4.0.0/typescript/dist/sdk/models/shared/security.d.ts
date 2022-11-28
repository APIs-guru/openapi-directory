import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeJwt extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    jwt: SchemeJwt;
}
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
