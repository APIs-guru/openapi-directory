import { SpeakeasyBase } from "../../../internal/utils";
import { AuthProvider } from "./authprovider";
import { AuthenticationRule } from "./authenticationrule";
/**
 * `Authentication` defines the authentication configuration for API methods provided by an API service. Example: name: calendar.googleapis.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth - selector: google.calendar.Delegate oauth: canonical_scopes: https://www.googleapis.com/auth/calendar.read
**/
export declare class Authentication extends SpeakeasyBase {
    providers?: AuthProvider[];
    rules?: AuthenticationRule[];
}
