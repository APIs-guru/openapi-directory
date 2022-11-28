import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessTokenInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn: number;

  @SpeakeasyMetadata({ data: "json, name=hub_domain" })
  hubDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=hub_id" })
  hubId: number;

  @SpeakeasyMetadata({ data: "json, name=scope_to_scope_group_pks" })
  scopeToScopeGroupPks: number[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: string[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: string;

  @SpeakeasyMetadata({ data: "json, name=trial_scope_to_scope_group_pks" })
  trialScopeToScopeGroupPks: number[];

  @SpeakeasyMetadata({ data: "json, name=trial_scopes" })
  trialScopes: string[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: number;
}
