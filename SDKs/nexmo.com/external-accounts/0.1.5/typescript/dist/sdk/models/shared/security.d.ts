import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBearerAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeBasicAuth extends SpeakeasyBase {
    password: string;
    username: string;
}
