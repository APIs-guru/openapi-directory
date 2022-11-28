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
import { DocumentInputConfig } from "./documentinputconfig";
import { DocumentOutputConfig } from "./documentoutputconfig";
import { TranslateTextGlossaryConfig } from "./translatetextglossaryconfig";
// TranslateDocumentRequest
/**
 * A document translation request.
**/
var TranslateDocumentRequest = /** @class */ (function (_super) {
    __extends(TranslateDocumentRequest, _super);
    function TranslateDocumentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customizedAttribution" }),
        __metadata("design:type", String)
    ], TranslateDocumentRequest.prototype, "customizedAttribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentInputConfig" }),
        __metadata("design:type", DocumentInputConfig)
    ], TranslateDocumentRequest.prototype, "documentInputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentOutputConfig" }),
        __metadata("design:type", DocumentOutputConfig)
    ], TranslateDocumentRequest.prototype, "documentOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=glossaryConfig" }),
        __metadata("design:type", TranslateTextGlossaryConfig)
    ], TranslateDocumentRequest.prototype, "glossaryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTranslateNativePdfOnly" }),
        __metadata("design:type", Boolean)
    ], TranslateDocumentRequest.prototype, "isTranslateNativePdfOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TranslateDocumentRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], TranslateDocumentRequest.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceLanguageCode" }),
        __metadata("design:type", String)
    ], TranslateDocumentRequest.prototype, "sourceLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetLanguageCode" }),
        __metadata("design:type", String)
    ], TranslateDocumentRequest.prototype, "targetLanguageCode", void 0);
    return TranslateDocumentRequest;
}(SpeakeasyBase));
export { TranslateDocumentRequest };
