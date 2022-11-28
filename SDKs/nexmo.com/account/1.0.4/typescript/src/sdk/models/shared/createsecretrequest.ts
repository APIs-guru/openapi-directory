import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}
