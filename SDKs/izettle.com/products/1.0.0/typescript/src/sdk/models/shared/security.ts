import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeZettleApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeZettleOauth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
