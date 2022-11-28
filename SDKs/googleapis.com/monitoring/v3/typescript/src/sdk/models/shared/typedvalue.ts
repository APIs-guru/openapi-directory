import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";



// TypedValue
/** 
 * A single strongly-typed value.
**/
export class TypedValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=distributionValue" })
  distributionValue?: Distribution;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
