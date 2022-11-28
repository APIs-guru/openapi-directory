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
export var GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum;
(function (GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum) {
    GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum["AccountDefenderLabelUnspecified"] = "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum["ProfileMatch"] = "PROFILE_MATCH";
    GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum["SuspiciousLoginActivity"] = "SUSPICIOUS_LOGIN_ACTIVITY";
    GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum["SuspiciousAccountCreation"] = "SUSPICIOUS_ACCOUNT_CREATION";
    GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum["RelatedAccountsNumberHigh"] = "RELATED_ACCOUNTS_NUMBER_HIGH";
})(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum || (GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum = {}));
// GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment
/**
 * Account defender risk assessment.
**/
var GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment, _super);
    function GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment.prototype, "labels", void 0);
    return GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
}(SpeakeasyBase));
export { GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment };
