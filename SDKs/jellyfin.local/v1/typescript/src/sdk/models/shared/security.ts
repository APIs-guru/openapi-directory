import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeCustomAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Emby-Authorization" })
  apiKey: string;
}
