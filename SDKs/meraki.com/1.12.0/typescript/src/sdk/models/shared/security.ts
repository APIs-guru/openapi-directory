import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeMerakiApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Cisco-Meraki-API-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  merakiApiKey: SchemeMerakiApiKey;
}
