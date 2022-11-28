import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Arc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dir" })
  dir: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
