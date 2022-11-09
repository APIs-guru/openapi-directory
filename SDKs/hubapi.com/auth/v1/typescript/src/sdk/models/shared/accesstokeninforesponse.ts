import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessTokenInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_id" })
  appId: number;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn: number;

  @Metadata({ data: "json, name=hub_domain" })
  hubDomain?: string;

  @Metadata({ data: "json, name=hub_id" })
  hubId: number;

  @Metadata({ data: "json, name=scope_to_scope_group_pks" })
  scopeToScopeGroupPks: number[];

  @Metadata({ data: "json, name=scopes" })
  scopes: string[];

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType: string;

  @Metadata({ data: "json, name=trial_scope_to_scope_group_pks" })
  trialScopeToScopeGroupPks: number[];

  @Metadata({ data: "json, name=trial_scopes" })
  trialScopes: string[];

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=user_id" })
  userId: number;
}
