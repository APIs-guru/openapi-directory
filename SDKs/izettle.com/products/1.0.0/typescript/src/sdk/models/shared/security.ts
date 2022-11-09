import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeZettleApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeZettleOauth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
