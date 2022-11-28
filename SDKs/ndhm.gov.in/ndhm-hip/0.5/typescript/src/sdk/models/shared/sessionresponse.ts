import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expiresIn" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=refreshExpiresIn" })
  refreshExpiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=refreshToken" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenType" })
  tokenType?: string;
}
