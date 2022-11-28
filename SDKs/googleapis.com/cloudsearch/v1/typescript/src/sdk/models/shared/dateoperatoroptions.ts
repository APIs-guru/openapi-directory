import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateOperatorOptions
/** 
 * Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class DateOperatorOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
