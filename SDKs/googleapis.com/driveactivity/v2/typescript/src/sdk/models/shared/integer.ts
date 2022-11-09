import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Integer
/** 
 * Wrapper for Integer Field value.
**/
export class Integer extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
