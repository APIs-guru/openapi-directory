import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Browsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chrome" })
  chrome?: string[];

  @SpeakeasyMetadata({ data: "json, name=firefox" })
  firefox?: string[];

  @SpeakeasyMetadata({ data: "json, name=opera" })
  opera?: string[];
}
