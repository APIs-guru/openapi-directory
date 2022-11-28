import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HtmlValues
/** 
 * List of html values.
**/
export class HtmlValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
