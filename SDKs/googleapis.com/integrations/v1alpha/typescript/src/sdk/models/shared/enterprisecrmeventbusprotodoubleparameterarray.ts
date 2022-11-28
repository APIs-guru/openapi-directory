import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseCrmEventbusProtoDoubleParameterArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValues" })
  doubleValues?: number[];
}
