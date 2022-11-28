import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableSecretInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=plaintext" })
  plaintext: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
