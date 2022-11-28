import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseCrmEventbusProtoDoubleArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: number[];
}
