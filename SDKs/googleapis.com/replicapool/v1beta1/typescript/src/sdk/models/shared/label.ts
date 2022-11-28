import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * A label to apply to this replica pool.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
