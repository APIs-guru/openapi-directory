import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeAuthorization extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    authorization: SchemeAuthorization;
}
