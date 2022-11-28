import { SpeakeasyBase } from "../../../internal/utils";
import { IntegerOperatorOptions } from "./integeroperatoroptions";
export declare enum IntegerPropertyOptionsOrderedRankingEnum {
    NoOrder = "NO_ORDER",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * The options for integer properties.
**/
export declare class IntegerPropertyOptions extends SpeakeasyBase {
    maximumValue?: string;
    minimumValue?: string;
    operatorOptions?: IntegerOperatorOptions;
    orderedRanking?: IntegerPropertyOptionsOrderedRankingEnum;
}
