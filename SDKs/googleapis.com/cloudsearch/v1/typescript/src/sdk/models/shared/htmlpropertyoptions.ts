import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HtmlOperatorOptions } from "./htmloperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";


// HtmlPropertyOptions
/** 
 * The options for html properties.
**/
export class HtmlPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: HtmlOperatorOptions;

  @Metadata({ data: "json, name=retrievalImportance" })
  retrievalImportance?: RetrievalImportance;
}
