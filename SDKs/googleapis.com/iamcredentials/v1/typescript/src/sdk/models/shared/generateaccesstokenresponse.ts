import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateAccessTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;
}
