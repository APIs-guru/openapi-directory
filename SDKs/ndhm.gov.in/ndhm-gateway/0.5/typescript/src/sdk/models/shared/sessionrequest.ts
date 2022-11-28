import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SessionRequestGrantTypeEnum {
    ClientCredentials = "client_credentials",
    RefreshToken = "refresh_token"
}


export class SessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=grantType" })
  grantType: SessionRequestGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;
}
