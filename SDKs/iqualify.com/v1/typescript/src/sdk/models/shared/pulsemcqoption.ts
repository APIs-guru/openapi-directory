import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PulseMcqOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: boolean;
}
