import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmEventbusProtoDoubleArray extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: number[];
}
