import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepeatedEnumAttributeValue
/** 
 * Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.
**/
export class RepeatedEnumAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=setValues" })
  setValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=unsetValues" })
  unsetValues?: string[];
}
