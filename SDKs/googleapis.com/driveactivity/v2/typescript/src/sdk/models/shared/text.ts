import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Text
/** 
 * Wrapper for Text Field value.
**/
export class Text extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
