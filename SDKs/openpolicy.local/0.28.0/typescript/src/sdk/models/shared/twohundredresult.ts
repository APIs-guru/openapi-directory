import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TwoHundredResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: any[];
}
