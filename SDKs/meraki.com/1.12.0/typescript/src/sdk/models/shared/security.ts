import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeMerakiApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Cisco-Meraki-API-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  merakiApiKey: SchemeMerakiApiKey;
}
