import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReportGoogleLocationRequestReportReasonBadLocationEnum {
    BadLocationReasonUnspecified = "BAD_LOCATION_REASON_UNSPECIFIED",
    NotALocation = "NOT_A_LOCATION",
    PermanentlyClosed = "PERMANENTLY_CLOSED",
    DoesNotExist = "DOES_NOT_EXIST",
    Spam = "SPAM",
    NotABusiness = "NOT_A_BUSINESS",
    Moved = "MOVED",
    Duplicate = "DUPLICATE"
}
export declare enum ReportGoogleLocationRequestReportReasonBadRecommendationEnum {
    BadRecommendationReasonUnspecified = "BAD_RECOMMENDATION_REASON_UNSPECIFIED",
    NotAStoreFront = "NOT_A_STORE_FRONT",
    NotPartOfSuggestedChain = "NOT_PART_OF_SUGGESTED_CHAIN",
    Irrelevant = "IRRELEVANT"
}
/**
 * Request message for reporting a GoogleLocation.
**/
export declare class ReportGoogleLocationRequest extends SpeakeasyBase {
    locationGroupName?: string;
    reportReasonBadLocation?: ReportGoogleLocationRequestReportReasonBadLocationEnum;
    reportReasonBadRecommendation?: ReportGoogleLocationRequestReportReasonBadRecommendationEnum;
    reportReasonElaboration?: string;
    reportReasonLanguageCode?: string;
}
