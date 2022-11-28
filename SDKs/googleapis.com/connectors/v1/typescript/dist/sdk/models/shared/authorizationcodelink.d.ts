import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
**/
export declare class AuthorizationCodeLink extends SpeakeasyBase {
    clientId?: string;
    enablePkce?: boolean;
    scopes?: string[];
    uri?: string;
}
