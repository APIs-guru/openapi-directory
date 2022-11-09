import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OAuthClientStatusEnum {
    Active = "active"
,    Disabled = "disabled"
,    Suspended = "suspended"
}


// OAuthClient
/** 
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 * 
**/
export class OAuthClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=status" })
  status?: OAuthClientStatusEnum;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;
}
