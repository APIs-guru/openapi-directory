import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BooleanOperatorOptions
/** 
 * Used to provide a search operator for boolean properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class BooleanOperatorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
