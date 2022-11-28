import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an OpenId Connect 1.0 identity provider.
**/
export declare class Oidc extends SpeakeasyBase {
    allowedAudiences?: string[];
    issuerUri?: string;
}
