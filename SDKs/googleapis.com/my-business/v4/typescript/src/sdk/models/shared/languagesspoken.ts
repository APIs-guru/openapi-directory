import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LanguagesSpokenArabicSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenCantoneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenDutchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenEnglishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenFilipinoSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenFrenchSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenGermanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenHindiSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenIndonesianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenItalianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenJapaneseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenKoreanSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenMandarinSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenPortugueseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenRussianSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenSpanishSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum LanguagesSpokenVietnameseSpokenExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// LanguagesSpoken
/** 
 * Languages spoken by at least one staff member.
**/
export class LanguagesSpoken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arabicSpoken" })
  arabicSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=arabicSpokenException" })
  arabicSpokenException?: LanguagesSpokenArabicSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cantoneseSpoken" })
  cantoneseSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cantoneseSpokenException" })
  cantoneseSpokenException?: LanguagesSpokenCantoneseSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=dutchSpoken" })
  dutchSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dutchSpokenException" })
  dutchSpokenException?: LanguagesSpokenDutchSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=englishSpoken" })
  englishSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=englishSpokenException" })
  englishSpokenException?: LanguagesSpokenEnglishSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=filipinoSpoken" })
  filipinoSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filipinoSpokenException" })
  filipinoSpokenException?: LanguagesSpokenFilipinoSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=frenchSpoken" })
  frenchSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frenchSpokenException" })
  frenchSpokenException?: LanguagesSpokenFrenchSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=germanSpoken" })
  germanSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=germanSpokenException" })
  germanSpokenException?: LanguagesSpokenGermanSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=hindiSpoken" })
  hindiSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hindiSpokenException" })
  hindiSpokenException?: LanguagesSpokenHindiSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indonesianSpoken" })
  indonesianSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indonesianSpokenException" })
  indonesianSpokenException?: LanguagesSpokenIndonesianSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=italianSpoken" })
  italianSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=italianSpokenException" })
  italianSpokenException?: LanguagesSpokenItalianSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=japaneseSpoken" })
  japaneseSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=japaneseSpokenException" })
  japaneseSpokenException?: LanguagesSpokenJapaneseSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=koreanSpoken" })
  koreanSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=koreanSpokenException" })
  koreanSpokenException?: LanguagesSpokenKoreanSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mandarinSpoken" })
  mandarinSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mandarinSpokenException" })
  mandarinSpokenException?: LanguagesSpokenMandarinSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=portugueseSpoken" })
  portugueseSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=portugueseSpokenException" })
  portugueseSpokenException?: LanguagesSpokenPortugueseSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=russianSpoken" })
  russianSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=russianSpokenException" })
  russianSpokenException?: LanguagesSpokenRussianSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=spanishSpoken" })
  spanishSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spanishSpokenException" })
  spanishSpokenException?: LanguagesSpokenSpanishSpokenExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=vietnameseSpoken" })
  vietnameseSpoken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vietnameseSpokenException" })
  vietnameseSpokenException?: LanguagesSpokenVietnameseSpokenExceptionEnum;
}
