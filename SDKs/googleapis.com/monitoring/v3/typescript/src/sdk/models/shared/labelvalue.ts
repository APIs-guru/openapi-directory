import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelValue
/** 
 * A label value.
**/
export class LabelValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
