import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryInterpretationInterpretationTypeEnum {
    None = "NONE",
    Blend = "BLEND",
    Replace = "REPLACE"
}
export declare enum QueryInterpretationReasonEnum {
    Unspecified = "UNSPECIFIED",
    QueryHasNaturalLanguageIntent = "QUERY_HAS_NATURAL_LANGUAGE_INTENT",
    NotEnoughResultsFoundForUserQuery = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
}
export declare class QueryInterpretation extends SpeakeasyBase {
    interpretationType?: QueryInterpretationInterpretationTypeEnum;
    interpretedQuery?: string;
    reason?: QueryInterpretationReasonEnum;
}
