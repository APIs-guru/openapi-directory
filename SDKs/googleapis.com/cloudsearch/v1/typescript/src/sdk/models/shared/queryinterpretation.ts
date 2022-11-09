import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryInterpretationInterpretationTypeEnum {
    None = "NONE"
,    Blend = "BLEND"
,    Replace = "REPLACE"
}

export enum QueryInterpretationReasonEnum {
    Unspecified = "UNSPECIFIED"
,    QueryHasNaturalLanguageIntent = "QUERY_HAS_NATURAL_LANGUAGE_INTENT"
,    NotEnoughResultsFoundForUserQuery = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
}


export class QueryInterpretation extends SpeakeasyBase {
  @Metadata({ data: "json, name=interpretationType" })
  interpretationType?: QueryInterpretationInterpretationTypeEnum;

  @Metadata({ data: "json, name=interpretedQuery" })
  interpretedQuery?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: QueryInterpretationReasonEnum;
}
