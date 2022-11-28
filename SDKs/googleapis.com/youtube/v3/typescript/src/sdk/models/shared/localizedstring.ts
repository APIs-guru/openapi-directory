import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocalizedString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
