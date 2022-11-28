import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigPropertyRepresentation } from "./configpropertyrepresentation";
export declare class AuthenticatorConfigInfoRepresentation extends SpeakeasyBase {
    helpText?: string;
    name?: string;
    properties?: ConfigPropertyRepresentation[];
    providerId?: string;
}
