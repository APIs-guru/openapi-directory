import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PartOfSpeechAspectEnum {
    AspectUnknown = "ASPECT_UNKNOWN",
    Perfective = "PERFECTIVE",
    Imperfective = "IMPERFECTIVE",
    Progressive = "PROGRESSIVE"
}
export declare enum PartOfSpeechCaseEnum {
    CaseUnknown = "CASE_UNKNOWN",
    Accusative = "ACCUSATIVE",
    Adverbial = "ADVERBIAL",
    Complementive = "COMPLEMENTIVE",
    Dative = "DATIVE",
    Genitive = "GENITIVE",
    Instrumental = "INSTRUMENTAL",
    Locative = "LOCATIVE",
    Nominative = "NOMINATIVE",
    Oblique = "OBLIQUE",
    Partitive = "PARTITIVE",
    Prepositional = "PREPOSITIONAL",
    ReflexiveCase = "REFLEXIVE_CASE",
    RelativeCase = "RELATIVE_CASE",
    Vocative = "VOCATIVE"
}
export declare enum PartOfSpeechFormEnum {
    FormUnknown = "FORM_UNKNOWN",
    Adnomial = "ADNOMIAL",
    Auxiliary = "AUXILIARY",
    Complementizer = "COMPLEMENTIZER",
    FinalEnding = "FINAL_ENDING",
    Gerund = "GERUND",
    Realis = "REALIS",
    Irrealis = "IRREALIS",
    Short = "SHORT",
    Long = "LONG",
    Order = "ORDER",
    Specific = "SPECIFIC"
}
export declare enum PartOfSpeechGenderEnum {
    GenderUnknown = "GENDER_UNKNOWN",
    Feminine = "FEMININE",
    Masculine = "MASCULINE",
    Neuter = "NEUTER"
}
export declare enum PartOfSpeechMoodEnum {
    MoodUnknown = "MOOD_UNKNOWN",
    ConditionalMood = "CONDITIONAL_MOOD",
    Imperative = "IMPERATIVE",
    Indicative = "INDICATIVE",
    Interrogative = "INTERROGATIVE",
    Jussive = "JUSSIVE",
    Subjunctive = "SUBJUNCTIVE"
}
export declare enum PartOfSpeechNumberEnum {
    NumberUnknown = "NUMBER_UNKNOWN",
    Singular = "SINGULAR",
    Plural = "PLURAL",
    Dual = "DUAL"
}
export declare enum PartOfSpeechPersonEnum {
    PersonUnknown = "PERSON_UNKNOWN",
    First = "FIRST",
    Second = "SECOND",
    Third = "THIRD",
    ReflexivePerson = "REFLEXIVE_PERSON"
}
export declare enum PartOfSpeechProperEnum {
    ProperUnknown = "PROPER_UNKNOWN",
    Proper = "PROPER",
    NotProper = "NOT_PROPER"
}
export declare enum PartOfSpeechReciprocityEnum {
    ReciprocityUnknown = "RECIPROCITY_UNKNOWN",
    Reciprocal = "RECIPROCAL",
    NonReciprocal = "NON_RECIPROCAL"
}
export declare enum PartOfSpeechTagEnum {
    Unknown = "UNKNOWN",
    Adj = "ADJ",
    Adp = "ADP",
    Adv = "ADV",
    Conj = "CONJ",
    Det = "DET",
    Noun = "NOUN",
    Num = "NUM",
    Pron = "PRON",
    Prt = "PRT",
    Punct = "PUNCT",
    Verb = "VERB",
    X = "X",
    Affix = "AFFIX"
}
export declare enum PartOfSpeechTenseEnum {
    TenseUnknown = "TENSE_UNKNOWN",
    ConditionalTense = "CONDITIONAL_TENSE",
    Future = "FUTURE",
    Past = "PAST",
    Present = "PRESENT",
    Imperfect = "IMPERFECT",
    Pluperfect = "PLUPERFECT"
}
export declare enum PartOfSpeechVoiceEnum {
    VoiceUnknown = "VOICE_UNKNOWN",
    Active = "ACTIVE",
    Causative = "CAUSATIVE",
    Passive = "PASSIVE"
}
/**
 * Represents part of speech information for a token.
**/
export declare class PartOfSpeech extends SpeakeasyBase {
    aspect?: PartOfSpeechAspectEnum;
    case?: PartOfSpeechCaseEnum;
    form?: PartOfSpeechFormEnum;
    gender?: PartOfSpeechGenderEnum;
    mood?: PartOfSpeechMoodEnum;
    number?: PartOfSpeechNumberEnum;
    person?: PartOfSpeechPersonEnum;
    proper?: PartOfSpeechProperEnum;
    reciprocity?: PartOfSpeechReciprocityEnum;
    tag?: PartOfSpeechTagEnum;
    tense?: PartOfSpeechTenseEnum;
    voice?: PartOfSpeechVoiceEnum;
}
