import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValue
/** 
 * A product label represented as a key-value pair.
**/
export class KeyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
