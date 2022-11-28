import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnumOperatorOptions } from "./enumoperatoroptions";
import { EnumValuePair } from "./enumvaluepair";


export enum EnumPropertyOptionsOrderedRankingEnum {
    NoOrder = "NO_ORDER",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// EnumPropertyOptions
/** 
 * The options for enum properties, which allow you to define a restricted set of strings to match user queries, set rankings for those string values, and define an operator name to be paired with those strings so that users can narrow results to only items with a specific value. For example, for items in a request tracking system with priority information, you could define *p0* as an allowable enum value and tie this enum to the operator name *priority* so that search users could add *priority:p0* to their query to restrict the set of results to only those items indexed with the value *p0*.
**/
export class EnumPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: EnumOperatorOptions;

  @SpeakeasyMetadata({ data: "json, name=orderedRanking" })
  orderedRanking?: EnumPropertyOptionsOrderedRankingEnum;

  @SpeakeasyMetadata({ data: "json, name=possibleValues", elemType: EnumValuePair })
  possibleValues?: EnumValuePair[];
}
