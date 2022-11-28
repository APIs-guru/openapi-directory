import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeBearerAuthOAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    bearerAuthOAuth?: SchemeBearerAuthOAuth;
}
