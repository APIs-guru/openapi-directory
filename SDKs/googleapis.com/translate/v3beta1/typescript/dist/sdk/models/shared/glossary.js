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
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodesSet } from "./languagecodesset";
import { LanguageCodePair } from "./languagecodepair";
// Glossary
/**
 * Represents a glossary built from user provided data.
**/
var Glossary = /** @class */ (function (_super) {
    __extends(Glossary, _super);
    function Glossary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Glossary.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryCount" }),
        __metadata("design:type", Number)
    ], Glossary.prototype, "entryCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GlossaryInputConfig)
    ], Glossary.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCodesSet" }),
        __metadata("design:type", LanguageCodesSet)
    ], Glossary.prototype, "languageCodesSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languagePair" }),
        __metadata("design:type", LanguageCodePair)
    ], Glossary.prototype, "languagePair", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Glossary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submitTime" }),
        __metadata("design:type", String)
    ], Glossary.prototype, "submitTime", void 0);
    return Glossary;
}(SpeakeasyBase));
export { Glossary };
// GlossaryInput
/**
 * Represents a glossary built from user provided data.
**/
var GlossaryInput = /** @class */ (function (_super) {
    __extends(GlossaryInput, _super);
    function GlossaryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GlossaryInputConfig)
    ], GlossaryInput.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCodesSet" }),
        __metadata("design:type", LanguageCodesSet)
    ], GlossaryInput.prototype, "languageCodesSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languagePair" }),
        __metadata("design:type", LanguageCodePair)
    ], GlossaryInput.prototype, "languagePair", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GlossaryInput.prototype, "name", void 0);
    return GlossaryInput;
}(SpeakeasyBase));
export { GlossaryInput };
