import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ListPopulationTermOperatorEnum {
    NumEquals = "NUM_EQUALS"
,    NumLessThan = "NUM_LESS_THAN"
,    NumLessThanEqual = "NUM_LESS_THAN_EQUAL"
,    NumGreaterThan = "NUM_GREATER_THAN"
,    NumGreaterThanEqual = "NUM_GREATER_THAN_EQUAL"
,    StringEquals = "STRING_EQUALS"
,    StringContains = "STRING_CONTAINS"
}

export enum ListPopulationTermTypeEnum {
    CustomVariableTerm = "CUSTOM_VARIABLE_TERM"
,    ListMembershipTerm = "LIST_MEMBERSHIP_TERM"
,    ReferrerTerm = "REFERRER_TERM"
}


// ListPopulationTerm
/** 
 * Remarketing List Population Rule Term.
**/
export class ListPopulationTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=contains" })
  contains?: boolean;

  @Metadata({ data: "json, name=negation" })
  negation?: boolean;

  @Metadata({ data: "json, name=operator" })
  operator?: ListPopulationTermOperatorEnum;

  @Metadata({ data: "json, name=remarketingListId" })
  remarketingListId?: string;

  @Metadata({ data: "json, name=type" })
  type?: ListPopulationTermTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=variableFriendlyName" })
  variableFriendlyName?: string;

  @Metadata({ data: "json, name=variableName" })
  variableName?: string;
}
