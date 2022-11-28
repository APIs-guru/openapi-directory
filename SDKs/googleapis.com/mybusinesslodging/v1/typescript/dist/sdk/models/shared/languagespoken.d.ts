import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LanguageSpokenSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Language spoken by at least one staff member.
**/
export declare class LanguageSpoken extends SpeakeasyBase {
    languageCode?: string;
    spoken?: boolean;
    spokenException?: LanguageSpokenSpokenExceptionEnum;
}
