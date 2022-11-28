import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HtmlOperatorOptions
/** 
 * Used to provide a search operator for html properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class HtmlOperatorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
