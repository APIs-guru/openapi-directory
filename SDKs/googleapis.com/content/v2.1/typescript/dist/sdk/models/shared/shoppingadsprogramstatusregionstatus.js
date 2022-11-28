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
import { ShoppingAdsProgramStatusReviewIneligibilityReasonDetails } from "./shoppingadsprogramstatusreviewineligibilityreasondetails";
export var ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum;
(function (ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum) {
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["Approved"] = "APPROVED";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["Disapproved"] = "DISAPPROVED";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["Warning"] = "WARNING";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["UnderReview"] = "UNDER_REVIEW";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["PendingReview"] = "PENDING_REVIEW";
    ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum["Onboarding"] = "ONBOARDING";
})(ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum || (ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum = {}));
export var ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum;
(function (ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum) {
    ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum["ReviewEligibilityUnspecified"] = "REVIEW_ELIGIBILITY_UNSPECIFIED";
    ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum["Eligible"] = "ELIGIBLE";
    ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum["Ineligible"] = "INELIGIBLE";
})(ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum || (ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum = {}));
export var ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum;
(function (ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum) {
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["ReviewIneligibilityReasonUnspecified"] = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["OnboardingIssues"] = "ONBOARDING_ISSUES";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["NotEnoughOffers"] = "NOT_ENOUGH_OFFERS";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["InCooldownPeriod"] = "IN_COOLDOWN_PERIOD";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["AlreadyUnderReview"] = "ALREADY_UNDER_REVIEW";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["NoReviewRequired"] = "NO_REVIEW_REQUIRED";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["WillBeReviewedAutomatically"] = "WILL_BE_REVIEWED_AUTOMATICALLY";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["IsRetired"] = "IS_RETIRED";
    ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum["AlreadyReviewed"] = "ALREADY_REVIEWED";
})(ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum || (ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum = {}));
// ShoppingAdsProgramStatusRegionStatus
/**
 * Status of program and region.
**/
var ShoppingAdsProgramStatusRegionStatus = /** @class */ (function (_super) {
    __extends(ShoppingAdsProgramStatusRegionStatus, _super);
    function ShoppingAdsProgramStatusRegionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disapprovalDate" }),
        __metadata("design:type", String)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "disapprovalDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibilityStatus" }),
        __metadata("design:type", String)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "eligibilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onboardingIssues" }),
        __metadata("design:type", Array)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "onboardingIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionCodes" }),
        __metadata("design:type", Array)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "regionCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewEligibilityStatus" }),
        __metadata("design:type", String)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "reviewEligibilityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReason" }),
        __metadata("design:type", String)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "reviewIneligibilityReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDescription" }),
        __metadata("design:type", String)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "reviewIneligibilityReasonDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewIneligibilityReasonDetails" }),
        __metadata("design:type", ShoppingAdsProgramStatusReviewIneligibilityReasonDetails)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "reviewIneligibilityReasonDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewIssues" }),
        __metadata("design:type", Array)
    ], ShoppingAdsProgramStatusRegionStatus.prototype, "reviewIssues", void 0);
    return ShoppingAdsProgramStatusRegionStatus;
}(SpeakeasyBase));
export { ShoppingAdsProgramStatusRegionStatus };
