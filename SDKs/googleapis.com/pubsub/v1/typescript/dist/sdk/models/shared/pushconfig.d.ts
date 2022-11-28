import { SpeakeasyBase } from "../../../internal/utils";
import { OidcToken } from "./oidctoken";
/**
 * Configuration for a push delivery endpoint.
**/
export declare class PushConfig extends SpeakeasyBase {
    attributes?: Map<string, string>;
    oidcToken?: OidcToken;
    pushEndpoint?: string;
}
