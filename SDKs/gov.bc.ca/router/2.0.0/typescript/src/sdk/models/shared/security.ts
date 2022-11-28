import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=apikey" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: SchemeApikey;
}
