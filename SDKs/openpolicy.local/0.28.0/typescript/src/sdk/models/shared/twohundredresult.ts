import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TwoHundredResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}
