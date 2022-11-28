import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
