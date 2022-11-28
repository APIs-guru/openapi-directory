import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RefreshTokenInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=hub_domain" })
  hubDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=hub_id" })
  hubId: number;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes: string[];

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: number;
}
