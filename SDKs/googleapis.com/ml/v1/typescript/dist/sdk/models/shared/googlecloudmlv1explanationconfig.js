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
import { GoogleCloudMlV1IntegratedGradientsAttribution } from "./googlecloudmlv1integratedgradientsattribution";
import { GoogleCloudMlV1SampledShapleyAttribution } from "./googlecloudmlv1sampledshapleyattribution";
import { GoogleCloudMlV1XraiAttribution } from "./googlecloudmlv1xraiattribution";
// GoogleCloudMlV1ExplanationConfig
/**
 * Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
**/
var GoogleCloudMlV1ExplanationConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1ExplanationConfig, _super);
    function GoogleCloudMlV1ExplanationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integratedGradientsAttribution" }),
        __metadata("design:type", GoogleCloudMlV1IntegratedGradientsAttribution)
    ], GoogleCloudMlV1ExplanationConfig.prototype, "integratedGradientsAttribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampledShapleyAttribution" }),
        __metadata("design:type", GoogleCloudMlV1SampledShapleyAttribution)
    ], GoogleCloudMlV1ExplanationConfig.prototype, "sampledShapleyAttribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xraiAttribution" }),
        __metadata("design:type", GoogleCloudMlV1XraiAttribution)
    ], GoogleCloudMlV1ExplanationConfig.prototype, "xraiAttribution", void 0);
    return GoogleCloudMlV1ExplanationConfig;
}(SpeakeasyBase));
export { GoogleCloudMlV1ExplanationConfig };
