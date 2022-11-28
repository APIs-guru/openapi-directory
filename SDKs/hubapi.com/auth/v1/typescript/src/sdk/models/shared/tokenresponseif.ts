import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenResponseIf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn: number;

  @SpeakeasyMetadata({ data: "json, name=id_token" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: string;
}
