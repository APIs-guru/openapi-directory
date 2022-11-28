import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegerOperatorOptions } from "./integeroperatoroptions";


export enum IntegerPropertyOptionsOrderedRankingEnum {
    NoOrder = "NO_ORDER",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


// IntegerPropertyOptions
/** 
 * The options for integer properties.
**/
export class IntegerPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximumValue" })
  maximumValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumValue" })
  minimumValue?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorOptions" })
  operatorOptions?: IntegerOperatorOptions;

  @SpeakeasyMetadata({ data: "json, name=orderedRanking" })
  orderedRanking?: IntegerPropertyOptionsOrderedRankingEnum;
}
