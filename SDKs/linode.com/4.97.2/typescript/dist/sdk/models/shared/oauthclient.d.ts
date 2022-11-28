import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OAuthClientStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Suspended = "suspended"
}
/**
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 *
**/
export declare class OAuthClientInput extends SpeakeasyBase {
    label?: string;
    redirectUri?: string;
}
/**
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 *
**/
export declare class OAuthClient extends SpeakeasyBase {
    id?: string;
    label?: string;
    public?: boolean;
    redirectUri?: string;
    secret?: string;
    status?: OAuthClientStatusEnum;
    thumbnailUrl?: string;
}
