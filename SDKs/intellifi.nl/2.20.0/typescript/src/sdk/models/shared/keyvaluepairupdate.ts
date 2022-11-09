import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyValuePairUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=kv_value" })
  kvValue?: any;
}
