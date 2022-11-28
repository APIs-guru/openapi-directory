import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryInterpretationInterpretationTypeEnum {
    None = "NONE",
    Blend = "BLEND",
    Replace = "REPLACE"
}

export enum QueryInterpretationReasonEnum {
    Unspecified = "UNSPECIFIED",
    QueryHasNaturalLanguageIntent = "QUERY_HAS_NATURAL_LANGUAGE_INTENT",
    NotEnoughResultsFoundForUserQuery = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
}


export class QueryInterpretation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interpretationType" })
  interpretationType?: QueryInterpretationInterpretationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=interpretedQuery" })
  interpretedQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: QueryInterpretationReasonEnum;
}
