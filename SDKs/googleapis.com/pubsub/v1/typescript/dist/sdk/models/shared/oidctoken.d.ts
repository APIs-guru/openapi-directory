import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). [Service account email](https://cloud.google.com/iam/docs/service-accounts) used for generating the OIDC token. For more information on setting up authentication, see [Push subscriptions](https://cloud.google.com/pubsub/docs/push).
**/
export declare class OidcToken extends SpeakeasyBase {
    audience?: string;
    serviceAccountEmail?: string;
}
