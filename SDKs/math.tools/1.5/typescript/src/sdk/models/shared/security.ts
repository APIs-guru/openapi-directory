import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeXMathtoolsApiSecret extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Mathtools-Api-Secret" })
  apiKey: string;
}
