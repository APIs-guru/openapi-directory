import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SessionRequestGrantTypeEnum {
    ClientCredentials = "client_credentials"
,    RefreshToken = "refresh_token"
}


export class SessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=grantType" })
  grantType: SessionRequestGrantTypeEnum;

  @Metadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
