import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeHapikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=hapikey" })
  apiKey: string;
}
