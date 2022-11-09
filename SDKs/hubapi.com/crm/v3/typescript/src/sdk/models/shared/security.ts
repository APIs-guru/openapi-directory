import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeDeveloperHapikey extends SpeakeasyBase {
  @Metadata({ data: "security, name=hapikey" })
  apiKey: string;
}
