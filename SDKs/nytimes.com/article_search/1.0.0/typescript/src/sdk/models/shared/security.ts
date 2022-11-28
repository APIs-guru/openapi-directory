import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api-key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apikey: SchemeApikey;
}
