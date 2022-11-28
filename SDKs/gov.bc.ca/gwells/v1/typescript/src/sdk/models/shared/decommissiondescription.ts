import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DecommissionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=material" })
  material: string;

  @SpeakeasyMetadata({ data: "json, name=observations" })
  observations?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}
