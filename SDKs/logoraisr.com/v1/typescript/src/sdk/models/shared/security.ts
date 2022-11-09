import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  token: SchemeToken;
}
