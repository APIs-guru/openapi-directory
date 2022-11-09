import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeBearerAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    bearerAuth: SchemeBearerAuth;
}
