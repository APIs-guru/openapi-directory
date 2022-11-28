import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class Security extends SpeakeasyBase {
    basicAuth: SchemeBasicAuth;
}
