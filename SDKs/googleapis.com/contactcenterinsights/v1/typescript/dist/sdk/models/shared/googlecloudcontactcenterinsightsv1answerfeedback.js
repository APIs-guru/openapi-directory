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
export var GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum;
(function (GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum) {
    GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum["CorrectnessLevelUnspecified"] = "CORRECTNESS_LEVEL_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum["NotCorrect"] = "NOT_CORRECT";
    GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum["PartiallyCorrect"] = "PARTIALLY_CORRECT";
    GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum["FullyCorrect"] = "FULLY_CORRECT";
})(GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum || (GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum = {}));
// GoogleCloudContactcenterinsightsV1AnswerFeedback
/**
 * The feedback that the customer has about a certain answer in the conversation.
**/
var GoogleCloudContactcenterinsightsV1AnswerFeedback = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1AnswerFeedback, _super);
    function GoogleCloudContactcenterinsightsV1AnswerFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicked" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnswerFeedback.prototype, "clicked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctnessLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1AnswerFeedback.prototype, "correctnessLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayed" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1AnswerFeedback.prototype, "displayed", void 0);
    return GoogleCloudContactcenterinsightsV1AnswerFeedback;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1AnswerFeedback };
