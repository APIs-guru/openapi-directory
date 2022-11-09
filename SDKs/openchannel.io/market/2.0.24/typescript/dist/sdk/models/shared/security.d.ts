import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeBasicAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    basicAuth: SchemeBasicAuth;
}
