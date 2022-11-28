import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LanguageSpokenSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LanguageSpoken
/** 
 * Language spoken by at least one staff member.
**/
export class LanguageSpoken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=spoken" })
  spoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spokenException" })
  spokenException?: LanguageSpokenSpokenExceptionEnum;
}
