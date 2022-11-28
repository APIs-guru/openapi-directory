import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntityOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
