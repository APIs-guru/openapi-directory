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
import { GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback } from "./googleclouddialogflowv2beta1agentassistantfeedbacksummarizationfeedback";
export var GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum;
(function (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum) {
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum["AnswerRelevanceUnspecified"] = "ANSWER_RELEVANCE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum["Irrelevant"] = "IRRELEVANT";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum["Relevant"] = "RELEVANT";
})(GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum || (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = {}));
export var GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum;
(function (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum) {
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum["DocumentCorrectnessUnspecified"] = "DOCUMENT_CORRECTNESS_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum["Incorrect"] = "INCORRECT";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum["Correct"] = "CORRECT";
})(GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum || (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = {}));
export var GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum;
(function (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum) {
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum["DocumentEfficiencyUnspecified"] = "DOCUMENT_EFFICIENCY_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum["Inefficient"] = "INEFFICIENT";
    GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum["Efficient"] = "EFFICIENT";
})(GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum || (GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = {}));
// GoogleCloudDialogflowV2beta1AgentAssistantFeedback
/**
 * Detail feedback of Agent Assistant result.
**/
var GoogleCloudDialogflowV2beta1AgentAssistantFeedback = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1AgentAssistantFeedback, _super);
    function GoogleCloudDialogflowV2beta1AgentAssistantFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerRelevance" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AgentAssistantFeedback.prototype, "answerRelevance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentCorrectness" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AgentAssistantFeedback.prototype, "documentCorrectness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentEfficiency" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1AgentAssistantFeedback.prototype, "documentEfficiency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summarizationFeedback" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback)
    ], GoogleCloudDialogflowV2beta1AgentAssistantFeedback.prototype, "summarizationFeedback", void 0);
    return GoogleCloudDialogflowV2beta1AgentAssistantFeedback;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1AgentAssistantFeedback };
