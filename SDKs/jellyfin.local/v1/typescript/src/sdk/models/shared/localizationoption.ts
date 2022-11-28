import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocalizationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
