import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Integer
/** 
 * Wrapper for Integer Field value.
**/
export class Integer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
