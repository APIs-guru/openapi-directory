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
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudDialogflowV2beta1SuggestArticlesResponse } from "./googleclouddialogflowv2beta1suggestarticlesresponse";
import { GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse } from "./googleclouddialogflowv2beta1suggestfaqanswersresponse";
import { GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse } from "./googleclouddialogflowv2beta1suggestsmartrepliesresponse";
// GoogleCloudDialogflowV2beta1SuggestionResult
/**
 * One response of different type of suggestion response which is used in the response of Participants.AnalyzeContent and Participants.AnalyzeContent, as well as HumanAgentAssistantEvent.
**/
var GoogleCloudDialogflowV2beta1SuggestionResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1SuggestionResult, _super);
    function GoogleCloudDialogflowV2beta1SuggestionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GoogleRpcStatus)
    ], GoogleCloudDialogflowV2beta1SuggestionResult.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestArticlesResponse" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SuggestArticlesResponse)
    ], GoogleCloudDialogflowV2beta1SuggestionResult.prototype, "suggestArticlesResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestFaqAnswersResponse" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse)
    ], GoogleCloudDialogflowV2beta1SuggestionResult.prototype, "suggestFaqAnswersResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestSmartRepliesResponse" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse)
    ], GoogleCloudDialogflowV2beta1SuggestionResult.prototype, "suggestSmartRepliesResponse", void 0);
    return GoogleCloudDialogflowV2beta1SuggestionResult;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1SuggestionResult };
