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
import { GoogleCloudDatalabelingV1beta1ClassificationMetrics } from "./googleclouddatalabelingv1beta1classificationmetrics";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics } from "./googleclouddatalabelingv1beta1objectdetectionmetrics";
var GoogleCloudDatalabelingV1beta1EvaluationMetrics = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1EvaluationMetrics, _super);
    function GoogleCloudDatalabelingV1beta1EvaluationMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationMetrics" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ClassificationMetrics)
    ], GoogleCloudDatalabelingV1beta1EvaluationMetrics.prototype, "classificationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectDetectionMetrics" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics)
    ], GoogleCloudDatalabelingV1beta1EvaluationMetrics.prototype, "objectDetectionMetrics", void 0);
    return GoogleCloudDatalabelingV1beta1EvaluationMetrics;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1EvaluationMetrics };
