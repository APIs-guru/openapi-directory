import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValue
/** 
 * A product label represented as a key-value pair.
**/
export class KeyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
