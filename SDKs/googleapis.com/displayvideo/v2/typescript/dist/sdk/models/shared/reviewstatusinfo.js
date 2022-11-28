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
import { ExchangeReviewStatus } from "./exchangereviewstatus";
import { PublisherReviewStatus } from "./publisherreviewstatus";
export var ReviewStatusInfoApprovalStatusEnum;
(function (ReviewStatusInfoApprovalStatusEnum) {
    ReviewStatusInfoApprovalStatusEnum["ApprovalStatusUnspecified"] = "APPROVAL_STATUS_UNSPECIFIED";
    ReviewStatusInfoApprovalStatusEnum["ApprovalStatusPendingNotServable"] = "APPROVAL_STATUS_PENDING_NOT_SERVABLE";
    ReviewStatusInfoApprovalStatusEnum["ApprovalStatusPendingServable"] = "APPROVAL_STATUS_PENDING_SERVABLE";
    ReviewStatusInfoApprovalStatusEnum["ApprovalStatusApprovedServable"] = "APPROVAL_STATUS_APPROVED_SERVABLE";
    ReviewStatusInfoApprovalStatusEnum["ApprovalStatusRejectedNotServable"] = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE";
})(ReviewStatusInfoApprovalStatusEnum || (ReviewStatusInfoApprovalStatusEnum = {}));
export var ReviewStatusInfoContentAndPolicyReviewStatusEnum;
(function (ReviewStatusInfoContentAndPolicyReviewStatusEnum) {
    ReviewStatusInfoContentAndPolicyReviewStatusEnum["ReviewStatusUnspecified"] = "REVIEW_STATUS_UNSPECIFIED";
    ReviewStatusInfoContentAndPolicyReviewStatusEnum["ReviewStatusApproved"] = "REVIEW_STATUS_APPROVED";
    ReviewStatusInfoContentAndPolicyReviewStatusEnum["ReviewStatusRejected"] = "REVIEW_STATUS_REJECTED";
    ReviewStatusInfoContentAndPolicyReviewStatusEnum["ReviewStatusPending"] = "REVIEW_STATUS_PENDING";
})(ReviewStatusInfoContentAndPolicyReviewStatusEnum || (ReviewStatusInfoContentAndPolicyReviewStatusEnum = {}));
export var ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
(function (ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum) {
    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum["ReviewStatusUnspecified"] = "REVIEW_STATUS_UNSPECIFIED";
    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum["ReviewStatusApproved"] = "REVIEW_STATUS_APPROVED";
    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum["ReviewStatusRejected"] = "REVIEW_STATUS_REJECTED";
    ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum["ReviewStatusPending"] = "REVIEW_STATUS_PENDING";
})(ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum || (ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum = {}));
// ReviewStatusInfo
/**
 * Review statuses for the creative.
**/
var ReviewStatusInfo = /** @class */ (function (_super) {
    __extends(ReviewStatusInfo, _super);
    function ReviewStatusInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalStatus" }),
        __metadata("design:type", String)
    ], ReviewStatusInfo.prototype, "approvalStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentAndPolicyReviewStatus" }),
        __metadata("design:type", String)
    ], ReviewStatusInfo.prototype, "contentAndPolicyReviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeAndLandingPageReviewStatus" }),
        __metadata("design:type", String)
    ], ReviewStatusInfo.prototype, "creativeAndLandingPageReviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchangeReviewStatuses", elemType: ExchangeReviewStatus }),
        __metadata("design:type", Array)
    ], ReviewStatusInfo.prototype, "exchangeReviewStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisherReviewStatuses", elemType: PublisherReviewStatus }),
        __metadata("design:type", Array)
    ], ReviewStatusInfo.prototype, "publisherReviewStatuses", void 0);
    return ReviewStatusInfo;
}(SpeakeasyBase));
export { ReviewStatusInfo };
