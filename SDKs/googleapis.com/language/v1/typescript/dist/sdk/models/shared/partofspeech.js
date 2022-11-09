var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var PartOfSpeechAspectEnum;
(function (PartOfSpeechAspectEnum) {
    PartOfSpeechAspectEnum["AspectUnknown"] = "ASPECT_UNKNOWN";
    PartOfSpeechAspectEnum["Perfective"] = "PERFECTIVE";
    PartOfSpeechAspectEnum["Imperfective"] = "IMPERFECTIVE";
    PartOfSpeechAspectEnum["Progressive"] = "PROGRESSIVE";
})(PartOfSpeechAspectEnum || (PartOfSpeechAspectEnum = {}));
export var PartOfSpeechCaseEnum;
(function (PartOfSpeechCaseEnum) {
    PartOfSpeechCaseEnum["CaseUnknown"] = "CASE_UNKNOWN";
    PartOfSpeechCaseEnum["Accusative"] = "ACCUSATIVE";
    PartOfSpeechCaseEnum["Adverbial"] = "ADVERBIAL";
    PartOfSpeechCaseEnum["Complementive"] = "COMPLEMENTIVE";
    PartOfSpeechCaseEnum["Dative"] = "DATIVE";
    PartOfSpeechCaseEnum["Genitive"] = "GENITIVE";
    PartOfSpeechCaseEnum["Instrumental"] = "INSTRUMENTAL";
    PartOfSpeechCaseEnum["Locative"] = "LOCATIVE";
    PartOfSpeechCaseEnum["Nominative"] = "NOMINATIVE";
    PartOfSpeechCaseEnum["Oblique"] = "OBLIQUE";
    PartOfSpeechCaseEnum["Partitive"] = "PARTITIVE";
    PartOfSpeechCaseEnum["Prepositional"] = "PREPOSITIONAL";
    PartOfSpeechCaseEnum["ReflexiveCase"] = "REFLEXIVE_CASE";
    PartOfSpeechCaseEnum["RelativeCase"] = "RELATIVE_CASE";
    PartOfSpeechCaseEnum["Vocative"] = "VOCATIVE";
})(PartOfSpeechCaseEnum || (PartOfSpeechCaseEnum = {}));
export var PartOfSpeechFormEnum;
(function (PartOfSpeechFormEnum) {
    PartOfSpeechFormEnum["FormUnknown"] = "FORM_UNKNOWN";
    PartOfSpeechFormEnum["Adnomial"] = "ADNOMIAL";
    PartOfSpeechFormEnum["Auxiliary"] = "AUXILIARY";
    PartOfSpeechFormEnum["Complementizer"] = "COMPLEMENTIZER";
    PartOfSpeechFormEnum["FinalEnding"] = "FINAL_ENDING";
    PartOfSpeechFormEnum["Gerund"] = "GERUND";
    PartOfSpeechFormEnum["Realis"] = "REALIS";
    PartOfSpeechFormEnum["Irrealis"] = "IRREALIS";
    PartOfSpeechFormEnum["Short"] = "SHORT";
    PartOfSpeechFormEnum["Long"] = "LONG";
    PartOfSpeechFormEnum["Order"] = "ORDER";
    PartOfSpeechFormEnum["Specific"] = "SPECIFIC";
})(PartOfSpeechFormEnum || (PartOfSpeechFormEnum = {}));
export var PartOfSpeechGenderEnum;
(function (PartOfSpeechGenderEnum) {
    PartOfSpeechGenderEnum["GenderUnknown"] = "GENDER_UNKNOWN";
    PartOfSpeechGenderEnum["Feminine"] = "FEMININE";
    PartOfSpeechGenderEnum["Masculine"] = "MASCULINE";
    PartOfSpeechGenderEnum["Neuter"] = "NEUTER";
})(PartOfSpeechGenderEnum || (PartOfSpeechGenderEnum = {}));
export var PartOfSpeechMoodEnum;
(function (PartOfSpeechMoodEnum) {
    PartOfSpeechMoodEnum["MoodUnknown"] = "MOOD_UNKNOWN";
    PartOfSpeechMoodEnum["ConditionalMood"] = "CONDITIONAL_MOOD";
    PartOfSpeechMoodEnum["Imperative"] = "IMPERATIVE";
    PartOfSpeechMoodEnum["Indicative"] = "INDICATIVE";
    PartOfSpeechMoodEnum["Interrogative"] = "INTERROGATIVE";
    PartOfSpeechMoodEnum["Jussive"] = "JUSSIVE";
    PartOfSpeechMoodEnum["Subjunctive"] = "SUBJUNCTIVE";
})(PartOfSpeechMoodEnum || (PartOfSpeechMoodEnum = {}));
export var PartOfSpeechNumberEnum;
(function (PartOfSpeechNumberEnum) {
    PartOfSpeechNumberEnum["NumberUnknown"] = "NUMBER_UNKNOWN";
    PartOfSpeechNumberEnum["Singular"] = "SINGULAR";
    PartOfSpeechNumberEnum["Plural"] = "PLURAL";
    PartOfSpeechNumberEnum["Dual"] = "DUAL";
})(PartOfSpeechNumberEnum || (PartOfSpeechNumberEnum = {}));
export var PartOfSpeechPersonEnum;
(function (PartOfSpeechPersonEnum) {
    PartOfSpeechPersonEnum["PersonUnknown"] = "PERSON_UNKNOWN";
    PartOfSpeechPersonEnum["First"] = "FIRST";
    PartOfSpeechPersonEnum["Second"] = "SECOND";
    PartOfSpeechPersonEnum["Third"] = "THIRD";
    PartOfSpeechPersonEnum["ReflexivePerson"] = "REFLEXIVE_PERSON";
})(PartOfSpeechPersonEnum || (PartOfSpeechPersonEnum = {}));
export var PartOfSpeechProperEnum;
(function (PartOfSpeechProperEnum) {
    PartOfSpeechProperEnum["ProperUnknown"] = "PROPER_UNKNOWN";
    PartOfSpeechProperEnum["Proper"] = "PROPER";
    PartOfSpeechProperEnum["NotProper"] = "NOT_PROPER";
})(PartOfSpeechProperEnum || (PartOfSpeechProperEnum = {}));
export var PartOfSpeechReciprocityEnum;
(function (PartOfSpeechReciprocityEnum) {
    PartOfSpeechReciprocityEnum["ReciprocityUnknown"] = "RECIPROCITY_UNKNOWN";
    PartOfSpeechReciprocityEnum["Reciprocal"] = "RECIPROCAL";
    PartOfSpeechReciprocityEnum["NonReciprocal"] = "NON_RECIPROCAL";
})(PartOfSpeechReciprocityEnum || (PartOfSpeechReciprocityEnum = {}));
export var PartOfSpeechTagEnum;
(function (PartOfSpeechTagEnum) {
    PartOfSpeechTagEnum["Unknown"] = "UNKNOWN";
    PartOfSpeechTagEnum["Adj"] = "ADJ";
    PartOfSpeechTagEnum["Adp"] = "ADP";
    PartOfSpeechTagEnum["Adv"] = "ADV";
    PartOfSpeechTagEnum["Conj"] = "CONJ";
    PartOfSpeechTagEnum["Det"] = "DET";
    PartOfSpeechTagEnum["Noun"] = "NOUN";
    PartOfSpeechTagEnum["Num"] = "NUM";
    PartOfSpeechTagEnum["Pron"] = "PRON";
    PartOfSpeechTagEnum["Prt"] = "PRT";
    PartOfSpeechTagEnum["Punct"] = "PUNCT";
    PartOfSpeechTagEnum["Verb"] = "VERB";
    PartOfSpeechTagEnum["X"] = "X";
    PartOfSpeechTagEnum["Affix"] = "AFFIX";
})(PartOfSpeechTagEnum || (PartOfSpeechTagEnum = {}));
export var PartOfSpeechTenseEnum;
(function (PartOfSpeechTenseEnum) {
    PartOfSpeechTenseEnum["TenseUnknown"] = "TENSE_UNKNOWN";
    PartOfSpeechTenseEnum["ConditionalTense"] = "CONDITIONAL_TENSE";
    PartOfSpeechTenseEnum["Future"] = "FUTURE";
    PartOfSpeechTenseEnum["Past"] = "PAST";
    PartOfSpeechTenseEnum["Present"] = "PRESENT";
    PartOfSpeechTenseEnum["Imperfect"] = "IMPERFECT";
    PartOfSpeechTenseEnum["Pluperfect"] = "PLUPERFECT";
})(PartOfSpeechTenseEnum || (PartOfSpeechTenseEnum = {}));
export var PartOfSpeechVoiceEnum;
(function (PartOfSpeechVoiceEnum) {
    PartOfSpeechVoiceEnum["VoiceUnknown"] = "VOICE_UNKNOWN";
    PartOfSpeechVoiceEnum["Active"] = "ACTIVE";
    PartOfSpeechVoiceEnum["Causative"] = "CAUSATIVE";
    PartOfSpeechVoiceEnum["Passive"] = "PASSIVE";
})(PartOfSpeechVoiceEnum || (PartOfSpeechVoiceEnum = {}));
// PartOfSpeech
/**
 * Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
**/
var PartOfSpeech = /** @class */ (function (_super) {
    __extends(PartOfSpeech, _super);
    function PartOfSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=aspect" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "aspect", void 0);
    __decorate([
        Metadata({ data: "json, name=case" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "case", void 0);
    __decorate([
        Metadata({ data: "json, name=form" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "form", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=mood" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "mood", void 0);
    __decorate([
        Metadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "number", void 0);
    __decorate([
        Metadata({ data: "json, name=person" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "person", void 0);
    __decorate([
        Metadata({ data: "json, name=proper" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "proper", void 0);
    __decorate([
        Metadata({ data: "json, name=reciprocity" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "reciprocity", void 0);
    __decorate([
        Metadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "tag", void 0);
    __decorate([
        Metadata({ data: "json, name=tense" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "tense", void 0);
    __decorate([
        Metadata({ data: "json, name=voice" }),
        __metadata("design:type", String)
    ], PartOfSpeech.prototype, "voice", void 0);
    return PartOfSpeech;
}(SpeakeasyBase));
export { PartOfSpeech };
