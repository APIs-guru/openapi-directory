import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDeveloperHapikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=hapikey" })
  apiKey: string;
}
