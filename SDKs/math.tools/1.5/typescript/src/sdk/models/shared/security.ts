import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeXMathtoolsApiSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Mathtools-Api-Secret" })
  apiKey: string;
}
