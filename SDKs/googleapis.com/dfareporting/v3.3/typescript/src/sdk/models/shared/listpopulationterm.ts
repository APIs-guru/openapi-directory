import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListPopulationTermOperatorEnum {
    NumEquals = "NUM_EQUALS",
    NumLessThan = "NUM_LESS_THAN",
    NumLessThanEqual = "NUM_LESS_THAN_EQUAL",
    NumGreaterThan = "NUM_GREATER_THAN",
    NumGreaterThanEqual = "NUM_GREATER_THAN_EQUAL",
    StringEquals = "STRING_EQUALS",
    StringContains = "STRING_CONTAINS"
}

export enum ListPopulationTermTypeEnum {
    CustomVariableTerm = "CUSTOM_VARIABLE_TERM",
    ListMembershipTerm = "LIST_MEMBERSHIP_TERM",
    ReferrerTerm = "REFERRER_TERM"
}


// ListPopulationTerm
/** 
 * Remarketing List Population Rule Term.
**/
export class ListPopulationTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: boolean;

  @SpeakeasyMetadata({ data: "json, name=negation" })
  negation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: ListPopulationTermOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=remarketingListId" })
  remarketingListId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListPopulationTermTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=variableFriendlyName" })
  variableFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=variableName" })
  variableName?: string;
}
