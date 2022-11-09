import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SiteVerificationWebResourceGettokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
