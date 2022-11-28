import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextOperatorOptions } from "./textoperatoroptions";
import { RetrievalImportance } from "./retrievalimportance";



// TextPropertyOptions
/** 
 * The options for text properties.
**/
export class TextPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: TextOperatorOptions;

  @SpeakeasyMetadata({ data: "json, name=retrievalImportance" })
  retrievalImportance?: RetrievalImportance;
}
