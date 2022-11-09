import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelValue
/** 
 * A label value.
**/
export class LabelValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
