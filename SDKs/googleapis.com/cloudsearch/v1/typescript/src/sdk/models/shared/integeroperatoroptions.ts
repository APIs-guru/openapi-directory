import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntegerOperatorOptions
/** 
 * Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class IntegerOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @Metadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
