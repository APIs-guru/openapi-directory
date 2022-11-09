import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IntegerOperatorOptions } from "./integeroperatoroptions";

export enum IntegerPropertyOptionsOrderedRankingEnum {
    NoOrder = "NO_ORDER"
,    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


// IntegerPropertyOptions
/** 
 * The options for integer properties.
**/
export class IntegerPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumValue" })
  maximumValue?: string;

  @Metadata({ data: "json, name=minimumValue" })
  minimumValue?: string;

  @Metadata({ data: "json, name=operatorOptions" })
  operatorOptions?: IntegerOperatorOptions;

  @Metadata({ data: "json, name=orderedRanking" })
  orderedRanking?: IntegerPropertyOptionsOrderedRankingEnum;
}
