import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_key" })
  apiKey: string;
}
