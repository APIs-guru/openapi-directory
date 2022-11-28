import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextOperatorOptions
/** 
 * Used to provide a search operator for text properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class TextOperatorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exactMatchWithOperator" })
  exactMatchWithOperator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
