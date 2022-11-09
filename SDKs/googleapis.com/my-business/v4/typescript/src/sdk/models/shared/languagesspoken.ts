import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LanguagesSpokenArabicSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenCantoneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenDutchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenEnglishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenFilipinoSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenFrenchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenGermanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenHindiSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenIndonesianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenItalianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenJapaneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenKoreanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenMandarinSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenPortugueseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenRussianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenSpanishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenVietnameseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LanguagesSpoken
/** 
 * Languages spoken by at least one staff member.
**/
export class LanguagesSpoken extends SpeakeasyBase {
  @Metadata({ data: "json, name=arabicSpoken" })
  arabicSpoken?: boolean;

  @Metadata({ data: "json, name=arabicSpokenException" })
  arabicSpokenException?: LanguagesSpokenArabicSpokenExceptionEnum;

  @Metadata({ data: "json, name=cantoneseSpoken" })
  cantoneseSpoken?: boolean;

  @Metadata({ data: "json, name=cantoneseSpokenException" })
  cantoneseSpokenException?: LanguagesSpokenCantoneseSpokenExceptionEnum;

  @Metadata({ data: "json, name=dutchSpoken" })
  dutchSpoken?: boolean;

  @Metadata({ data: "json, name=dutchSpokenException" })
  dutchSpokenException?: LanguagesSpokenDutchSpokenExceptionEnum;

  @Metadata({ data: "json, name=englishSpoken" })
  englishSpoken?: boolean;

  @Metadata({ data: "json, name=englishSpokenException" })
  englishSpokenException?: LanguagesSpokenEnglishSpokenExceptionEnum;

  @Metadata({ data: "json, name=filipinoSpoken" })
  filipinoSpoken?: boolean;

  @Metadata({ data: "json, name=filipinoSpokenException" })
  filipinoSpokenException?: LanguagesSpokenFilipinoSpokenExceptionEnum;

  @Metadata({ data: "json, name=frenchSpoken" })
  frenchSpoken?: boolean;

  @Metadata({ data: "json, name=frenchSpokenException" })
  frenchSpokenException?: LanguagesSpokenFrenchSpokenExceptionEnum;

  @Metadata({ data: "json, name=germanSpoken" })
  germanSpoken?: boolean;

  @Metadata({ data: "json, name=germanSpokenException" })
  germanSpokenException?: LanguagesSpokenGermanSpokenExceptionEnum;

  @Metadata({ data: "json, name=hindiSpoken" })
  hindiSpoken?: boolean;

  @Metadata({ data: "json, name=hindiSpokenException" })
  hindiSpokenException?: LanguagesSpokenHindiSpokenExceptionEnum;

  @Metadata({ data: "json, name=indonesianSpoken" })
  indonesianSpoken?: boolean;

  @Metadata({ data: "json, name=indonesianSpokenException" })
  indonesianSpokenException?: LanguagesSpokenIndonesianSpokenExceptionEnum;

  @Metadata({ data: "json, name=italianSpoken" })
  italianSpoken?: boolean;

  @Metadata({ data: "json, name=italianSpokenException" })
  italianSpokenException?: LanguagesSpokenItalianSpokenExceptionEnum;

  @Metadata({ data: "json, name=japaneseSpoken" })
  japaneseSpoken?: boolean;

  @Metadata({ data: "json, name=japaneseSpokenException" })
  japaneseSpokenException?: LanguagesSpokenJapaneseSpokenExceptionEnum;

  @Metadata({ data: "json, name=koreanSpoken" })
  koreanSpoken?: boolean;

  @Metadata({ data: "json, name=koreanSpokenException" })
  koreanSpokenException?: LanguagesSpokenKoreanSpokenExceptionEnum;

  @Metadata({ data: "json, name=mandarinSpoken" })
  mandarinSpoken?: boolean;

  @Metadata({ data: "json, name=mandarinSpokenException" })
  mandarinSpokenException?: LanguagesSpokenMandarinSpokenExceptionEnum;

  @Metadata({ data: "json, name=portugueseSpoken" })
  portugueseSpoken?: boolean;

  @Metadata({ data: "json, name=portugueseSpokenException" })
  portugueseSpokenException?: LanguagesSpokenPortugueseSpokenExceptionEnum;

  @Metadata({ data: "json, name=russianSpoken" })
  russianSpoken?: boolean;

  @Metadata({ data: "json, name=russianSpokenException" })
  russianSpokenException?: LanguagesSpokenRussianSpokenExceptionEnum;

  @Metadata({ data: "json, name=spanishSpoken" })
  spanishSpoken?: boolean;

  @Metadata({ data: "json, name=spanishSpokenException" })
  spanishSpokenException?: LanguagesSpokenSpanishSpokenExceptionEnum;

  @Metadata({ data: "json, name=vietnameseSpoken" })
  vietnameseSpoken?: boolean;

  @Metadata({ data: "json, name=vietnameseSpokenException" })
  vietnameseSpokenException?: LanguagesSpokenVietnameseSpokenExceptionEnum;
}
