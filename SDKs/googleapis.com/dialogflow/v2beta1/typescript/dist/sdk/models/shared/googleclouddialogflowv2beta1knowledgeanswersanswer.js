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
export var GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum;
(function (GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum) {
    GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum["MatchConfidenceLevelUnspecified"] = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum["Low"] = "LOW";
    GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum["Medium"] = "MEDIUM";
    GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum["High"] = "HIGH";
})(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum || (GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum = {}));
// GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
/**
 * An answer from Knowledge Connector.
**/
var GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer, _super);
    function GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faqQuestion" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.prototype, "faqQuestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.prototype, "matchConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchConfidenceLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.prototype, "matchConfidenceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer.prototype, "source", void 0);
    return GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer };
