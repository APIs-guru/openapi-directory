import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PartOfSpeechAspectEnum {
    AspectUnknown = "ASPECT_UNKNOWN"
,    Perfective = "PERFECTIVE"
,    Imperfective = "IMPERFECTIVE"
,    Progressive = "PROGRESSIVE"
}

export enum PartOfSpeechCaseEnum {
    CaseUnknown = "CASE_UNKNOWN"
,    Accusative = "ACCUSATIVE"
,    Adverbial = "ADVERBIAL"
,    Complementive = "COMPLEMENTIVE"
,    Dative = "DATIVE"
,    Genitive = "GENITIVE"
,    Instrumental = "INSTRUMENTAL"
,    Locative = "LOCATIVE"
,    Nominative = "NOMINATIVE"
,    Oblique = "OBLIQUE"
,    Partitive = "PARTITIVE"
,    Prepositional = "PREPOSITIONAL"
,    ReflexiveCase = "REFLEXIVE_CASE"
,    RelativeCase = "RELATIVE_CASE"
,    Vocative = "VOCATIVE"
}

export enum PartOfSpeechFormEnum {
    FormUnknown = "FORM_UNKNOWN"
,    Adnomial = "ADNOMIAL"
,    Auxiliary = "AUXILIARY"
,    Complementizer = "COMPLEMENTIZER"
,    FinalEnding = "FINAL_ENDING"
,    Gerund = "GERUND"
,    Realis = "REALIS"
,    Irrealis = "IRREALIS"
,    Short = "SHORT"
,    Long = "LONG"
,    Order = "ORDER"
,    Specific = "SPECIFIC"
}

export enum PartOfSpeechGenderEnum {
    GenderUnknown = "GENDER_UNKNOWN"
,    Feminine = "FEMININE"
,    Masculine = "MASCULINE"
,    Neuter = "NEUTER"
}

export enum PartOfSpeechMoodEnum {
    MoodUnknown = "MOOD_UNKNOWN"
,    ConditionalMood = "CONDITIONAL_MOOD"
,    Imperative = "IMPERATIVE"
,    Indicative = "INDICATIVE"
,    Interrogative = "INTERROGATIVE"
,    Jussive = "JUSSIVE"
,    Subjunctive = "SUBJUNCTIVE"
}

export enum PartOfSpeechNumberEnum {
    NumberUnknown = "NUMBER_UNKNOWN"
,    Singular = "SINGULAR"
,    Plural = "PLURAL"
,    Dual = "DUAL"
}

export enum PartOfSpeechPersonEnum {
    PersonUnknown = "PERSON_UNKNOWN"
,    First = "FIRST"
,    Second = "SECOND"
,    Third = "THIRD"
,    ReflexivePerson = "REFLEXIVE_PERSON"
}

export enum PartOfSpeechProperEnum {
    ProperUnknown = "PROPER_UNKNOWN"
,    Proper = "PROPER"
,    NotProper = "NOT_PROPER"
}

export enum PartOfSpeechReciprocityEnum {
    ReciprocityUnknown = "RECIPROCITY_UNKNOWN"
,    Reciprocal = "RECIPROCAL"
,    NonReciprocal = "NON_RECIPROCAL"
}

export enum PartOfSpeechTagEnum {
    Unknown = "UNKNOWN"
,    Adj = "ADJ"
,    Adp = "ADP"
,    Adv = "ADV"
,    Conj = "CONJ"
,    Det = "DET"
,    Noun = "NOUN"
,    Num = "NUM"
,    Pron = "PRON"
,    Prt = "PRT"
,    Punct = "PUNCT"
,    Verb = "VERB"
,    X = "X"
,    Affix = "AFFIX"
}

export enum PartOfSpeechTenseEnum {
    TenseUnknown = "TENSE_UNKNOWN"
,    ConditionalTense = "CONDITIONAL_TENSE"
,    Future = "FUTURE"
,    Past = "PAST"
,    Present = "PRESENT"
,    Imperfect = "IMPERFECT"
,    Pluperfect = "PLUPERFECT"
}

export enum PartOfSpeechVoiceEnum {
    VoiceUnknown = "VOICE_UNKNOWN"
,    Active = "ACTIVE"
,    Causative = "CAUSATIVE"
,    Passive = "PASSIVE"
}


// PartOfSpeech
/** 
 * Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
**/
export class PartOfSpeech extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspect" })
  aspect?: PartOfSpeechAspectEnum;

  @Metadata({ data: "json, name=case" })
  case?: PartOfSpeechCaseEnum;

  @Metadata({ data: "json, name=form" })
  form?: PartOfSpeechFormEnum;

  @Metadata({ data: "json, name=gender" })
  gender?: PartOfSpeechGenderEnum;

  @Metadata({ data: "json, name=mood" })
  mood?: PartOfSpeechMoodEnum;

  @Metadata({ data: "json, name=number" })
  number?: PartOfSpeechNumberEnum;

  @Metadata({ data: "json, name=person" })
  person?: PartOfSpeechPersonEnum;

  @Metadata({ data: "json, name=proper" })
  proper?: PartOfSpeechProperEnum;

  @Metadata({ data: "json, name=reciprocity" })
  reciprocity?: PartOfSpeechReciprocityEnum;

  @Metadata({ data: "json, name=tag" })
  tag?: PartOfSpeechTagEnum;

  @Metadata({ data: "json, name=tense" })
  tense?: PartOfSpeechTenseEnum;

  @Metadata({ data: "json, name=voice" })
  voice?: PartOfSpeechVoiceEnum;
}
