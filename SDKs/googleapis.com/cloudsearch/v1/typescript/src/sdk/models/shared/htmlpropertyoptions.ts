import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HtmlOperatorOptions } from "./htmloperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";



// HtmlPropertyOptions
/** 
 * The options for html properties.
**/
export class HtmlPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: HtmlOperatorOptions;

  @SpeakeasyMetadata({ data: "json, name=retrievalImportance" })
  retrievalImportance?: RetrievalImportance;
}
