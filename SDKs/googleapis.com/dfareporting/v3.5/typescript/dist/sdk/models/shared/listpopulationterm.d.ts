import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListPopulationTermOperatorEnum {
    NumEquals = "NUM_EQUALS",
    NumLessThan = "NUM_LESS_THAN",
    NumLessThanEqual = "NUM_LESS_THAN_EQUAL",
    NumGreaterThan = "NUM_GREATER_THAN",
    NumGreaterThanEqual = "NUM_GREATER_THAN_EQUAL",
    StringEquals = "STRING_EQUALS",
    StringContains = "STRING_CONTAINS"
}
export declare enum ListPopulationTermTypeEnum {
    CustomVariableTerm = "CUSTOM_VARIABLE_TERM",
    ListMembershipTerm = "LIST_MEMBERSHIP_TERM",
    ReferrerTerm = "REFERRER_TERM"
}
/**
 * Remarketing List Population Rule Term.
**/
export declare class ListPopulationTerm extends SpeakeasyBase {
    contains?: boolean;
    negation?: boolean;
    operator?: ListPopulationTermOperatorEnum;
    remarketingListId?: string;
    type?: ListPopulationTermTypeEnum;
    value?: string;
    variableFriendlyName?: string;
    variableName?: string;
}
