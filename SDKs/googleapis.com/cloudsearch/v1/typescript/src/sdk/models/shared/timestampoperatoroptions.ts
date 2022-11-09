import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimestampOperatorOptions
/** 
 * Used to provide a search operator for timestamp properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
**/
export class TimestampOperatorOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=greaterThanOperatorName" })
  greaterThanOperatorName?: string;

  @Metadata({ data: "json, name=lessThanOperatorName" })
  lessThanOperatorName?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;
}
