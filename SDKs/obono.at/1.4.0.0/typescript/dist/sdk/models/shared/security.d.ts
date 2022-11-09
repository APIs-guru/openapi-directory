import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeBasicAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeJwt extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    jwt: SchemeJwt;
}
