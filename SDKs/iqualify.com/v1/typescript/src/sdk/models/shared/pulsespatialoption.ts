import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PulseSpatialOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
