import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessTokenCertConf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x5t#S256" })
  x5tNumberS256?: string;
}
