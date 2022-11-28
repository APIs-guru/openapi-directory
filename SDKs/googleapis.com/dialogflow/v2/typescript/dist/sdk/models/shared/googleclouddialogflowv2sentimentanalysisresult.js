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
import { GoogleCloudDialogflowV2Sentiment } from "./googleclouddialogflowv2sentiment";
// GoogleCloudDialogflowV2SentimentAnalysisResult
/**
 * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
**/
var GoogleCloudDialogflowV2SentimentAnalysisResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2SentimentAnalysisResult, _super);
    function GoogleCloudDialogflowV2SentimentAnalysisResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryTextSentiment" }),
        __metadata("design:type", GoogleCloudDialogflowV2Sentiment)
    ], GoogleCloudDialogflowV2SentimentAnalysisResult.prototype, "queryTextSentiment", void 0);
    return GoogleCloudDialogflowV2SentimentAnalysisResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2SentimentAnalysisResult };
