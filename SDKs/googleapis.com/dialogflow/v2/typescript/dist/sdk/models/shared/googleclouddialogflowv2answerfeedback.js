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
import { GoogleCloudDialogflowV2AgentAssistantFeedback } from "./googleclouddialogflowv2agentassistantfeedback";
export var GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum;
(function (GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum) {
    GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum["CorrectnessLevelUnspecified"] = "CORRECTNESS_LEVEL_UNSPECIFIED";
    GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum["NotCorrect"] = "NOT_CORRECT";
    GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum["PartiallyCorrect"] = "PARTIALLY_CORRECT";
    GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum["FullyCorrect"] = "FULLY_CORRECT";
})(GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum || (GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum = {}));
// GoogleCloudDialogflowV2AnswerFeedback
/**
 * Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
**/
var GoogleCloudDialogflowV2AnswerFeedback = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2AnswerFeedback, _super);
    function GoogleCloudDialogflowV2AnswerFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentAssistantDetailFeedback" }),
        __metadata("design:type", GoogleCloudDialogflowV2AgentAssistantFeedback)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "agentAssistantDetailFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "clickTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicked" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "clicked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctnessLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "correctnessLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "displayTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayed" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2AnswerFeedback.prototype, "displayed", void 0);
    return GoogleCloudDialogflowV2AnswerFeedback;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2AnswerFeedback };
