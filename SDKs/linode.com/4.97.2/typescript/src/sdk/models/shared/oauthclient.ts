import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OAuthClientStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Suspended = "suspended"
}


// OAuthClientInput
/** 
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 * 
**/
export class OAuthClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;
}


// OAuthClient
/** 
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 * 
**/
export class OAuthClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OAuthClientStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;
}
