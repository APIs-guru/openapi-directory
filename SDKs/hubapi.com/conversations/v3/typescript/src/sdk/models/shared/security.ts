import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeHapikey extends SpeakeasyBase {
  @Metadata({ data: "security, name=hapikey" })
  apiKey: string;
}


export class SchemeOauth2Legacy extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
