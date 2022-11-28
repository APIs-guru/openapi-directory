import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Text
/** 
 * Wrapper for Text Field value.
**/
export class Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
