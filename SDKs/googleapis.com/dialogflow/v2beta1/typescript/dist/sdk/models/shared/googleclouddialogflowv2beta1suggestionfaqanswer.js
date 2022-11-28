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
// GoogleCloudDialogflowV2beta1SuggestionFaqAnswer
/**
 * Represents suggested answer from "frequently asked questions".
**/
var GoogleCloudDialogflowV2beta1SuggestionFaqAnswer = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1SuggestionFaqAnswer, _super);
    function GoogleCloudDialogflowV2beta1SuggestionFaqAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "answer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerRecord" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "answerRecord", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=question" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "question", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.prototype, "source", void 0);
    return GoogleCloudDialogflowV2beta1SuggestionFaqAnswer;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1SuggestionFaqAnswer };
