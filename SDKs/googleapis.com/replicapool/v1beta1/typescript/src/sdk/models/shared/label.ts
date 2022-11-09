import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * A label to apply to this replica pool.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
