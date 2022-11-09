import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateOperatorOptions
/** 
 * Optional. Provides a search operator for date properties. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class DateOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @Metadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
