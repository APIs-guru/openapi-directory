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
// GoogleCloudDocumentaiV1beta3EvaluationMetrics
/**
 * Evaluation metrics, either in aggregate or about a specific entity.
**/
var GoogleCloudDocumentaiV1beta3EvaluationMetrics = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3EvaluationMetrics, _super);
    function GoogleCloudDocumentaiV1beta3EvaluationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=f1Score" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "f1Score", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falseNegativesCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "falseNegativesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=falsePositivesCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "falsePositivesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groundTruthDocumentCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "groundTruthDocumentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groundTruthOccurrencesCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "groundTruthOccurrencesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "precision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedDocumentCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "predictedDocumentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedOccurrencesCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "predictedOccurrencesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recall" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "recall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalDocumentsCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "totalDocumentsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truePositivesCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDocumentaiV1beta3EvaluationMetrics.prototype, "truePositivesCount", void 0);
    return GoogleCloudDocumentaiV1beta3EvaluationMetrics;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3EvaluationMetrics };
