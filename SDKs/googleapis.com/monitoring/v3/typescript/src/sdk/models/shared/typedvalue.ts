import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Distribution } from "./distribution";


// TypedValue
/** 
 * A single strongly-typed value.
**/
export class TypedValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=distributionValue" })
  distributionValue?: Distribution;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
