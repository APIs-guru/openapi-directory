import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret: string;
}
