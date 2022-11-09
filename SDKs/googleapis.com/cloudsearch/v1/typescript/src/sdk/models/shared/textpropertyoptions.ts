import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextOperatorOptions } from "./textoperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";


// TextPropertyOptions
/** 
 * The options for text properties.
**/
export class TextPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: TextOperatorOptions;

  @Metadata({ data: "json, name=retrievalImportance" })
  retrievalImportance?: RetrievalImportance;
}
