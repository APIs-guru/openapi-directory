import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-IPTWIST-TOKEN" })
  apiKey: string;
}
