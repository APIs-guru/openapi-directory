import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntegerOperatorOptions
/** 
 * Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class IntegerOperatorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
