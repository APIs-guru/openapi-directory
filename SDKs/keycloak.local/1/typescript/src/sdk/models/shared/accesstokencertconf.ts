import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccessTokenCertConf extends SpeakeasyBase {
  @Metadata({ data: "json, name=x5t#S256" })
  x5tNumberS256?: string;
}
