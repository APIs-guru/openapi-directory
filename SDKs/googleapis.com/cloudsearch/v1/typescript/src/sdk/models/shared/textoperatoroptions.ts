import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextOperatorOptions
/** 
 * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class TextOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=exactMatchWithOperator" })
  exactMatchWithOperator?: boolean;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
