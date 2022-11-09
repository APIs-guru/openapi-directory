import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HtmlValues
/** 
 * List of html values.
**/
export class HtmlValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}
