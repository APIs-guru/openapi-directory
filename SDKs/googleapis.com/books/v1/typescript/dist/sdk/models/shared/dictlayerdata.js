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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var DictlayerdataCommon = /** @class */ (function (_super) {
    __extends(DictlayerdataCommon, _super);
    function DictlayerdataCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DictlayerdataCommon.prototype, "title", void 0);
    return DictlayerdataCommon;
}(SpeakeasyBase));
export { DictlayerdataCommon };
// DictlayerdataDictSource
/**
 * The source, url and attribution for this dictionary data.
**/
var DictlayerdataDictSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictSource, _super);
    function DictlayerdataDictSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictSource.prototype, "url", void 0);
    return DictlayerdataDictSource;
}(SpeakeasyBase));
export { DictlayerdataDictSource };
var DictlayerdataDictWordsDerivativesSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsDerivativesSource, _super);
    function DictlayerdataDictWordsDerivativesSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsDerivativesSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsDerivativesSource.prototype, "url", void 0);
    return DictlayerdataDictWordsDerivativesSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsDerivativesSource };
var DictlayerdataDictWordsDerivatives = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsDerivatives, _super);
    function DictlayerdataDictWordsDerivatives() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsDerivativesSource)
    ], DictlayerdataDictWordsDerivatives.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsDerivatives.prototype, "text", void 0);
    return DictlayerdataDictWordsDerivatives;
}(SpeakeasyBase));
export { DictlayerdataDictWordsDerivatives };
var DictlayerdataDictWordsExamplesSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsExamplesSource, _super);
    function DictlayerdataDictWordsExamplesSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsExamplesSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsExamplesSource.prototype, "url", void 0);
    return DictlayerdataDictWordsExamplesSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsExamplesSource };
var DictlayerdataDictWordsExamples = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsExamples, _super);
    function DictlayerdataDictWordsExamples() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsExamplesSource)
    ], DictlayerdataDictWordsExamples.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsExamples.prototype, "text", void 0);
    return DictlayerdataDictWordsExamples;
}(SpeakeasyBase));
export { DictlayerdataDictWordsExamples };
var DictlayerdataDictWordsSensesConjugations = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesConjugations, _super);
    function DictlayerdataDictWordsSensesConjugations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesConjugations.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesConjugations.prototype, "value", void 0);
    return DictlayerdataDictWordsSensesConjugations;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesConjugations };
var DictlayerdataDictWordsSensesDefinitionsExamplesSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesDefinitionsExamplesSource, _super);
    function DictlayerdataDictWordsSensesDefinitionsExamplesSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesDefinitionsExamplesSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesDefinitionsExamplesSource.prototype, "url", void 0);
    return DictlayerdataDictWordsSensesDefinitionsExamplesSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesDefinitionsExamplesSource };
var DictlayerdataDictWordsSensesDefinitionsExamples = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesDefinitionsExamples, _super);
    function DictlayerdataDictWordsSensesDefinitionsExamples() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsSensesDefinitionsExamplesSource)
    ], DictlayerdataDictWordsSensesDefinitionsExamples.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesDefinitionsExamples.prototype, "text", void 0);
    return DictlayerdataDictWordsSensesDefinitionsExamples;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesDefinitionsExamples };
var DictlayerdataDictWordsSensesDefinitions = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesDefinitions, _super);
    function DictlayerdataDictWordsSensesDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesDefinitions.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=examples", elemType: DictlayerdataDictWordsSensesDefinitionsExamples }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWordsSensesDefinitions.prototype, "examples", void 0);
    return DictlayerdataDictWordsSensesDefinitions;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesDefinitions };
var DictlayerdataDictWordsSensesSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesSource, _super);
    function DictlayerdataDictWordsSensesSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesSource.prototype, "url", void 0);
    return DictlayerdataDictWordsSensesSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesSource };
var DictlayerdataDictWordsSensesSynonymsSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesSynonymsSource, _super);
    function DictlayerdataDictWordsSensesSynonymsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesSynonymsSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesSynonymsSource.prototype, "url", void 0);
    return DictlayerdataDictWordsSensesSynonymsSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesSynonymsSource };
var DictlayerdataDictWordsSensesSynonyms = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSensesSynonyms, _super);
    function DictlayerdataDictWordsSensesSynonyms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsSensesSynonymsSource)
    ], DictlayerdataDictWordsSensesSynonyms.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSensesSynonyms.prototype, "text", void 0);
    return DictlayerdataDictWordsSensesSynonyms;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSensesSynonyms };
var DictlayerdataDictWordsSenses = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSenses, _super);
    function DictlayerdataDictWordsSenses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conjugations", elemType: DictlayerdataDictWordsSensesConjugations }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWordsSenses.prototype, "conjugations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitions", elemType: DictlayerdataDictWordsSensesDefinitions }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWordsSenses.prototype, "definitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partOfSpeech" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSenses.prototype, "partOfSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pronunciation" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSenses.prototype, "pronunciation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pronunciationUrl" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSenses.prototype, "pronunciationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsSensesSource)
    ], DictlayerdataDictWordsSenses.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syllabification" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSenses.prototype, "syllabification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synonyms", elemType: DictlayerdataDictWordsSensesSynonyms }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWordsSenses.prototype, "synonyms", void 0);
    return DictlayerdataDictWordsSenses;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSenses };
// DictlayerdataDictWordsSource
/**
 * The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
**/
var DictlayerdataDictWordsSource = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWordsSource, _super);
    function DictlayerdataDictWordsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribution" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSource.prototype, "attribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DictlayerdataDictWordsSource.prototype, "url", void 0);
    return DictlayerdataDictWordsSource;
}(SpeakeasyBase));
export { DictlayerdataDictWordsSource };
var DictlayerdataDictWords = /** @class */ (function (_super) {
    __extends(DictlayerdataDictWords, _super);
    function DictlayerdataDictWords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivatives", elemType: DictlayerdataDictWordsDerivatives }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWords.prototype, "derivatives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=examples", elemType: DictlayerdataDictWordsExamples }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWords.prototype, "examples", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=senses", elemType: DictlayerdataDictWordsSenses }),
        __metadata("design:type", Array)
    ], DictlayerdataDictWords.prototype, "senses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictWordsSource)
    ], DictlayerdataDictWords.prototype, "source", void 0);
    return DictlayerdataDictWords;
}(SpeakeasyBase));
export { DictlayerdataDictWords };
var DictlayerdataDict = /** @class */ (function (_super) {
    __extends(DictlayerdataDict, _super);
    function DictlayerdataDict() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", DictlayerdataDictSource)
    ], DictlayerdataDict.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=words", elemType: DictlayerdataDictWords }),
        __metadata("design:type", Array)
    ], DictlayerdataDict.prototype, "words", void 0);
    return DictlayerdataDict;
}(SpeakeasyBase));
export { DictlayerdataDict };
var Dictlayerdata = /** @class */ (function (_super) {
    __extends(Dictlayerdata, _super);
    function Dictlayerdata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=common" }),
        __metadata("design:type", DictlayerdataCommon)
    ], Dictlayerdata.prototype, "common", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dict" }),
        __metadata("design:type", DictlayerdataDict)
    ], Dictlayerdata.prototype, "dict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Dictlayerdata.prototype, "kind", void 0);
    return Dictlayerdata;
}(SpeakeasyBase));
export { Dictlayerdata };
