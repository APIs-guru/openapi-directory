import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefreshTokenInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=hub_domain" })
  hubDomain?: string;

  @Metadata({ data: "json, name=hub_id" })
  hubId: number;

  @Metadata({ data: "json, name=scopes" })
  scopes: string[];

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=user_id" })
  userId: number;
}
