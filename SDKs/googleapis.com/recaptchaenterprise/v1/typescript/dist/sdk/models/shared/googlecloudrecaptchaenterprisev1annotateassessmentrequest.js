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
export var GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum;
(function (GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum) {
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum["AnnotationUnspecified"] = "ANNOTATION_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum["Legitimate"] = "LEGITIMATE";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum["Fraudulent"] = "FRAUDULENT";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum["PasswordCorrect"] = "PASSWORD_CORRECT";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum["PasswordIncorrect"] = "PASSWORD_INCORRECT";
})(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum || (GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum = {}));
export var GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum;
(function (GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum) {
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["ReasonUnspecified"] = "REASON_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["Chargeback"] = "CHARGEBACK";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["ChargebackFraud"] = "CHARGEBACK_FRAUD";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["ChargebackDispute"] = "CHARGEBACK_DISPUTE";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["Refund"] = "REFUND";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["RefundFraud"] = "REFUND_FRAUD";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["TransactionAccepted"] = "TRANSACTION_ACCEPTED";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["TransactionDeclined"] = "TRANSACTION_DECLINED";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["PaymentHeuristics"] = "PAYMENT_HEURISTICS";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["InitiatedTwoFactor"] = "INITIATED_TWO_FACTOR";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["PassedTwoFactor"] = "PASSED_TWO_FACTOR";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["FailedTwoFactor"] = "FAILED_TWO_FACTOR";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["CorrectPassword"] = "CORRECT_PASSWORD";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["IncorrectPassword"] = "INCORRECT_PASSWORD";
    GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum["SocialSpam"] = "SOCIAL_SPAM";
})(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum || (GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestReasonsEnum = {}));
// GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest
/**
 * The request message to annotate an Assessment.
**/
var GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest, _super);
    function GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.prototype, "annotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hashedAccountId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.prototype, "hashedAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reasons" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest.prototype, "reasons", void 0);
    return GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
}(SpeakeasyBase));
export { GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest };
