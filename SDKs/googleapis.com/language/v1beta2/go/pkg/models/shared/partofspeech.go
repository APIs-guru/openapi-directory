package shared

type PartOfSpeechAspectEnum string

const (
	PartOfSpeechAspectEnumAspectUnknown PartOfSpeechAspectEnum = "ASPECT_UNKNOWN"
	PartOfSpeechAspectEnumPerfective    PartOfSpeechAspectEnum = "PERFECTIVE"
	PartOfSpeechAspectEnumImperfective  PartOfSpeechAspectEnum = "IMPERFECTIVE"
	PartOfSpeechAspectEnumProgressive   PartOfSpeechAspectEnum = "PROGRESSIVE"
)

type PartOfSpeechCaseEnum string

const (
	PartOfSpeechCaseEnumCaseUnknown   PartOfSpeechCaseEnum = "CASE_UNKNOWN"
	PartOfSpeechCaseEnumAccusative    PartOfSpeechCaseEnum = "ACCUSATIVE"
	PartOfSpeechCaseEnumAdverbial     PartOfSpeechCaseEnum = "ADVERBIAL"
	PartOfSpeechCaseEnumComplementive PartOfSpeechCaseEnum = "COMPLEMENTIVE"
	PartOfSpeechCaseEnumDative        PartOfSpeechCaseEnum = "DATIVE"
	PartOfSpeechCaseEnumGenitive      PartOfSpeechCaseEnum = "GENITIVE"
	PartOfSpeechCaseEnumInstrumental  PartOfSpeechCaseEnum = "INSTRUMENTAL"
	PartOfSpeechCaseEnumLocative      PartOfSpeechCaseEnum = "LOCATIVE"
	PartOfSpeechCaseEnumNominative    PartOfSpeechCaseEnum = "NOMINATIVE"
	PartOfSpeechCaseEnumOblique       PartOfSpeechCaseEnum = "OBLIQUE"
	PartOfSpeechCaseEnumPartitive     PartOfSpeechCaseEnum = "PARTITIVE"
	PartOfSpeechCaseEnumPrepositional PartOfSpeechCaseEnum = "PREPOSITIONAL"
	PartOfSpeechCaseEnumReflexiveCase PartOfSpeechCaseEnum = "REFLEXIVE_CASE"
	PartOfSpeechCaseEnumRelativeCase  PartOfSpeechCaseEnum = "RELATIVE_CASE"
	PartOfSpeechCaseEnumVocative      PartOfSpeechCaseEnum = "VOCATIVE"
)

type PartOfSpeechFormEnum string

const (
	PartOfSpeechFormEnumFormUnknown    PartOfSpeechFormEnum = "FORM_UNKNOWN"
	PartOfSpeechFormEnumAdnomial       PartOfSpeechFormEnum = "ADNOMIAL"
	PartOfSpeechFormEnumAuxiliary      PartOfSpeechFormEnum = "AUXILIARY"
	PartOfSpeechFormEnumComplementizer PartOfSpeechFormEnum = "COMPLEMENTIZER"
	PartOfSpeechFormEnumFinalEnding    PartOfSpeechFormEnum = "FINAL_ENDING"
	PartOfSpeechFormEnumGerund         PartOfSpeechFormEnum = "GERUND"
	PartOfSpeechFormEnumRealis         PartOfSpeechFormEnum = "REALIS"
	PartOfSpeechFormEnumIrrealis       PartOfSpeechFormEnum = "IRREALIS"
	PartOfSpeechFormEnumShort          PartOfSpeechFormEnum = "SHORT"
	PartOfSpeechFormEnumLong           PartOfSpeechFormEnum = "LONG"
	PartOfSpeechFormEnumOrder          PartOfSpeechFormEnum = "ORDER"
	PartOfSpeechFormEnumSpecific       PartOfSpeechFormEnum = "SPECIFIC"
)

type PartOfSpeechGenderEnum string

const (
	PartOfSpeechGenderEnumGenderUnknown PartOfSpeechGenderEnum = "GENDER_UNKNOWN"
	PartOfSpeechGenderEnumFeminine      PartOfSpeechGenderEnum = "FEMININE"
	PartOfSpeechGenderEnumMasculine     PartOfSpeechGenderEnum = "MASCULINE"
	PartOfSpeechGenderEnumNeuter        PartOfSpeechGenderEnum = "NEUTER"
)

type PartOfSpeechMoodEnum string

const (
	PartOfSpeechMoodEnumMoodUnknown     PartOfSpeechMoodEnum = "MOOD_UNKNOWN"
	PartOfSpeechMoodEnumConditionalMood PartOfSpeechMoodEnum = "CONDITIONAL_MOOD"
	PartOfSpeechMoodEnumImperative      PartOfSpeechMoodEnum = "IMPERATIVE"
	PartOfSpeechMoodEnumIndicative      PartOfSpeechMoodEnum = "INDICATIVE"
	PartOfSpeechMoodEnumInterrogative   PartOfSpeechMoodEnum = "INTERROGATIVE"
	PartOfSpeechMoodEnumJussive         PartOfSpeechMoodEnum = "JUSSIVE"
	PartOfSpeechMoodEnumSubjunctive     PartOfSpeechMoodEnum = "SUBJUNCTIVE"
)

type PartOfSpeechNumberEnum string

const (
	PartOfSpeechNumberEnumNumberUnknown PartOfSpeechNumberEnum = "NUMBER_UNKNOWN"
	PartOfSpeechNumberEnumSingular      PartOfSpeechNumberEnum = "SINGULAR"
	PartOfSpeechNumberEnumPlural        PartOfSpeechNumberEnum = "PLURAL"
	PartOfSpeechNumberEnumDual          PartOfSpeechNumberEnum = "DUAL"
)

type PartOfSpeechPersonEnum string

const (
	PartOfSpeechPersonEnumPersonUnknown   PartOfSpeechPersonEnum = "PERSON_UNKNOWN"
	PartOfSpeechPersonEnumFirst           PartOfSpeechPersonEnum = "FIRST"
	PartOfSpeechPersonEnumSecond          PartOfSpeechPersonEnum = "SECOND"
	PartOfSpeechPersonEnumThird           PartOfSpeechPersonEnum = "THIRD"
	PartOfSpeechPersonEnumReflexivePerson PartOfSpeechPersonEnum = "REFLEXIVE_PERSON"
)

type PartOfSpeechProperEnum string

const (
	PartOfSpeechProperEnumProperUnknown PartOfSpeechProperEnum = "PROPER_UNKNOWN"
	PartOfSpeechProperEnumProper        PartOfSpeechProperEnum = "PROPER"
	PartOfSpeechProperEnumNotProper     PartOfSpeechProperEnum = "NOT_PROPER"
)

type PartOfSpeechReciprocityEnum string

const (
	PartOfSpeechReciprocityEnumReciprocityUnknown PartOfSpeechReciprocityEnum = "RECIPROCITY_UNKNOWN"
	PartOfSpeechReciprocityEnumReciprocal         PartOfSpeechReciprocityEnum = "RECIPROCAL"
	PartOfSpeechReciprocityEnumNonReciprocal      PartOfSpeechReciprocityEnum = "NON_RECIPROCAL"
)

type PartOfSpeechTagEnum string

const (
	PartOfSpeechTagEnumUnknown PartOfSpeechTagEnum = "UNKNOWN"
	PartOfSpeechTagEnumAdj     PartOfSpeechTagEnum = "ADJ"
	PartOfSpeechTagEnumAdp     PartOfSpeechTagEnum = "ADP"
	PartOfSpeechTagEnumAdv     PartOfSpeechTagEnum = "ADV"
	PartOfSpeechTagEnumConj    PartOfSpeechTagEnum = "CONJ"
	PartOfSpeechTagEnumDet     PartOfSpeechTagEnum = "DET"
	PartOfSpeechTagEnumNoun    PartOfSpeechTagEnum = "NOUN"
	PartOfSpeechTagEnumNum     PartOfSpeechTagEnum = "NUM"
	PartOfSpeechTagEnumPron    PartOfSpeechTagEnum = "PRON"
	PartOfSpeechTagEnumPrt     PartOfSpeechTagEnum = "PRT"
	PartOfSpeechTagEnumPunct   PartOfSpeechTagEnum = "PUNCT"
	PartOfSpeechTagEnumVerb    PartOfSpeechTagEnum = "VERB"
	PartOfSpeechTagEnumX       PartOfSpeechTagEnum = "X"
	PartOfSpeechTagEnumAffix   PartOfSpeechTagEnum = "AFFIX"
)

type PartOfSpeechTenseEnum string

const (
	PartOfSpeechTenseEnumTenseUnknown     PartOfSpeechTenseEnum = "TENSE_UNKNOWN"
	PartOfSpeechTenseEnumConditionalTense PartOfSpeechTenseEnum = "CONDITIONAL_TENSE"
	PartOfSpeechTenseEnumFuture           PartOfSpeechTenseEnum = "FUTURE"
	PartOfSpeechTenseEnumPast             PartOfSpeechTenseEnum = "PAST"
	PartOfSpeechTenseEnumPresent          PartOfSpeechTenseEnum = "PRESENT"
	PartOfSpeechTenseEnumImperfect        PartOfSpeechTenseEnum = "IMPERFECT"
	PartOfSpeechTenseEnumPluperfect       PartOfSpeechTenseEnum = "PLUPERFECT"
)

type PartOfSpeechVoiceEnum string

const (
	PartOfSpeechVoiceEnumVoiceUnknown PartOfSpeechVoiceEnum = "VOICE_UNKNOWN"
	PartOfSpeechVoiceEnumActive       PartOfSpeechVoiceEnum = "ACTIVE"
	PartOfSpeechVoiceEnumCausative    PartOfSpeechVoiceEnum = "CAUSATIVE"
	PartOfSpeechVoiceEnumPassive      PartOfSpeechVoiceEnum = "PASSIVE"
)

type PartOfSpeech struct {
	Aspect      *PartOfSpeechAspectEnum      `json:"aspect"`
	Case        *PartOfSpeechCaseEnum        `json:"case"`
	Form        *PartOfSpeechFormEnum        `json:"form"`
	Gender      *PartOfSpeechGenderEnum      `json:"gender"`
	Mood        *PartOfSpeechMoodEnum        `json:"mood"`
	Number      *PartOfSpeechNumberEnum      `json:"number"`
	Person      *PartOfSpeechPersonEnum      `json:"person"`
	Proper      *PartOfSpeechProperEnum      `json:"proper"`
	Reciprocity *PartOfSpeechReciprocityEnum `json:"reciprocity"`
	Tag         *PartOfSpeechTagEnum         `json:"tag"`
	Tense       *PartOfSpeechTenseEnum       `json:"tense"`
	Voice       *PartOfSpeechVoiceEnum       `json:"voice"`
}
