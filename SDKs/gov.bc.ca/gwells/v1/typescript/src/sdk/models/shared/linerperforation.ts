import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinerPerforation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}
