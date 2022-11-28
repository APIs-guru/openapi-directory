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
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";
import { GoogleCloudDialogflowV2beta1KnowledgeAnswers } from "./googleclouddialogflowv2beta1knowledgeanswers";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";
// GoogleCloudDialogflowV2beta1QueryResult
/**
 * Represents the result of conversational query or event processing.
**/
var GoogleCloudDialogflowV2beta1QueryResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1QueryResult, _super);
    function GoogleCloudDialogflowV2beta1QueryResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allRequiredParamsPresent" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "allRequiredParamsPresent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelsSlotFilling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "cancelsSlotFilling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diagnosticInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "diagnosticInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentMessages", elemType: GoogleCloudDialogflowV2beta1IntentMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "fulfillmentMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentText" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "fulfillmentText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intent" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1Intent)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "intent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intentDetectionConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "intentDetectionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knowledgeAnswers" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1KnowledgeAnswers)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "knowledgeAnswers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryText" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "queryText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentimentAnalysisResult" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SentimentAnalysisResult)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "sentimentAnalysisResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechRecognitionConfidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "speechRecognitionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookPayload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "webhookPayload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookSource" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1QueryResult.prototype, "webhookSource", void 0);
    return GoogleCloudDialogflowV2beta1QueryResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1QueryResult };
