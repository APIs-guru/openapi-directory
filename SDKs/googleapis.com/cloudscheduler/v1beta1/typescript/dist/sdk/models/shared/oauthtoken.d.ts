import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
**/
export declare class OAuthToken extends SpeakeasyBase {
    scope?: string;
    serviceAccountEmail?: string;
}
