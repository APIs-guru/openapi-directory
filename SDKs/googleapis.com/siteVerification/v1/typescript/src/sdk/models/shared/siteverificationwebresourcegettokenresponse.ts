import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SiteVerificationWebResourceGettokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
