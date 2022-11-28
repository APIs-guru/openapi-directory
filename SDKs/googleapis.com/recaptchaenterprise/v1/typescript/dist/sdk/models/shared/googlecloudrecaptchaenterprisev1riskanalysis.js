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
export var GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum;
(function (GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum) {
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["ClassificationReasonUnspecified"] = "CLASSIFICATION_REASON_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["Automation"] = "AUTOMATION";
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["UnexpectedEnvironment"] = "UNEXPECTED_ENVIRONMENT";
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["TooMuchTraffic"] = "TOO_MUCH_TRAFFIC";
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["UnexpectedUsagePatterns"] = "UNEXPECTED_USAGE_PATTERNS";
    GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum["LowConfidenceScore"] = "LOW_CONFIDENCE_SCORE";
})(GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum || (GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum = {}));
// GoogleCloudRecaptchaenterpriseV1RiskAnalysis
/**
 * Risk analysis result for an event.
**/
var GoogleCloudRecaptchaenterpriseV1RiskAnalysis = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1RiskAnalysis, _super);
    function GoogleCloudRecaptchaenterpriseV1RiskAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasons" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1RiskAnalysis.prototype, "reasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=score" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecaptchaenterpriseV1RiskAnalysis.prototype, "score", void 0);
    return GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
}(SpeakeasyBase));
export { GoogleCloudRecaptchaenterpriseV1RiskAnalysis };
