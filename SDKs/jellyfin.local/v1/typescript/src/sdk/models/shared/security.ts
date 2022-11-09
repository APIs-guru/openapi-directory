import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeCustomAuthentication extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Emby-Authorization" })
  apiKey: string;
}
