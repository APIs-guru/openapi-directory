import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReportGoogleLocationRequestReportReasonBadLocationEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED"
,    NotALocation = "NOT_A_LOCATION"
,    PermanentlyClosed = "PERMANENTLY_CLOSED"
,    DoesNotExist = "DOES_NOT_EXIST"
,    Spam = "SPAM"
,    NotABusiness = "NOT_A_BUSINESS"
,    Moved = "MOVED"
,    Duplicate = "DUPLICATE"
}

export enum ReportGoogleLocationRequestReportReasonBadRecommendationEnum {
    BadRecommendationReasonUnspecified = "BAD_RECOMMENDATION_REASON_UNSPECIFIED"
,    NotAStoreFront = "NOT_A_STORE_FRONT"
,    NotPartOfSuggestedChain = "NOT_PART_OF_SUGGESTED_CHAIN"
,    Irrelevant = "IRRELEVANT"
}


// ReportGoogleLocationRequest
/** 
 * Request message for reporting a GoogleLocation.
**/
export class ReportGoogleLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationGroupName" })
  locationGroupName?: string;

  @Metadata({ data: "json, name=reportReasonBadLocation" })
  reportReasonBadLocation?: ReportGoogleLocationRequestReportReasonBadLocationEnum;

  @Metadata({ data: "json, name=reportReasonBadRecommendation" })
  reportReasonBadRecommendation?: ReportGoogleLocationRequestReportReasonBadRecommendationEnum;

  @Metadata({ data: "json, name=reportReasonElaboration" })
  reportReasonElaboration?: string;

  @Metadata({ data: "json, name=reportReasonLanguageCode" })
  reportReasonLanguageCode?: string;
}
