import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DoubleOperatorOptions
/** 
 * Used to provide a search operator for double properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class DoubleOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
