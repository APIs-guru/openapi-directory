import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyValuePairUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kv_value" })
  kvValue?: any;
}
