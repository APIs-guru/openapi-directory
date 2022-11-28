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
export var BuyOnGoogleProgramStatusBusinessModelEnum;
(function (BuyOnGoogleProgramStatusBusinessModelEnum) {
    BuyOnGoogleProgramStatusBusinessModelEnum["BusinessModelUnspecified"] = "BUSINESS_MODEL_UNSPECIFIED";
    BuyOnGoogleProgramStatusBusinessModelEnum["Manufacturer"] = "MANUFACTURER";
    BuyOnGoogleProgramStatusBusinessModelEnum["Importer"] = "IMPORTER";
    BuyOnGoogleProgramStatusBusinessModelEnum["Reseller"] = "RESELLER";
    BuyOnGoogleProgramStatusBusinessModelEnum["Other"] = "OTHER";
})(BuyOnGoogleProgramStatusBusinessModelEnum || (BuyOnGoogleProgramStatusBusinessModelEnum = {}));
export var BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
(function (BuyOnGoogleProgramStatusOnlineSalesChannelEnum) {
    BuyOnGoogleProgramStatusOnlineSalesChannelEnum["OnlineSalesChannelUnspecified"] = "ONLINE_SALES_CHANNEL_UNSPECIFIED";
    BuyOnGoogleProgramStatusOnlineSalesChannelEnum["GoogleExclusive"] = "GOOGLE_EXCLUSIVE";
    BuyOnGoogleProgramStatusOnlineSalesChannelEnum["GoogleAndOtherWebsites"] = "GOOGLE_AND_OTHER_WEBSITES";
})(BuyOnGoogleProgramStatusOnlineSalesChannelEnum || (BuyOnGoogleProgramStatusOnlineSalesChannelEnum = {}));
export var BuyOnGoogleProgramStatusParticipationStageEnum;
(function (BuyOnGoogleProgramStatusParticipationStageEnum) {
    BuyOnGoogleProgramStatusParticipationStageEnum["ProgramParticipationStageUnspecified"] = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED";
    BuyOnGoogleProgramStatusParticipationStageEnum["NotEligible"] = "NOT_ELIGIBLE";
    BuyOnGoogleProgramStatusParticipationStageEnum["Eligible"] = "ELIGIBLE";
    BuyOnGoogleProgramStatusParticipationStageEnum["Onboarding"] = "ONBOARDING";
    BuyOnGoogleProgramStatusParticipationStageEnum["EligibleForReview"] = "ELIGIBLE_FOR_REVIEW";
    BuyOnGoogleProgramStatusParticipationStageEnum["PendingReview"] = "PENDING_REVIEW";
    BuyOnGoogleProgramStatusParticipationStageEnum["ReviewDisapproved"] = "REVIEW_DISAPPROVED";
    BuyOnGoogleProgramStatusParticipationStageEnum["Active"] = "ACTIVE";
    BuyOnGoogleProgramStatusParticipationStageEnum["Paused"] = "PAUSED";
})(BuyOnGoogleProgramStatusParticipationStageEnum || (BuyOnGoogleProgramStatusParticipationStageEnum = {}));
// BuyOnGoogleProgramStatus
/**
 * Response message for the GetProgramStatus method.
**/
var BuyOnGoogleProgramStatus = /** @class */ (function (_super) {
    __extends(BuyOnGoogleProgramStatus, _super);
    function BuyOnGoogleProgramStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessModel" }),
        __metadata("design:type", Array)
    ], BuyOnGoogleProgramStatus.prototype, "businessModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingEmail" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServicePendingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingPhoneNumber" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServicePendingPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingPhoneRegionCode" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServicePendingPhoneRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServiceVerifiedEmail" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServiceVerifiedEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServiceVerifiedPhoneNumber" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServiceVerifiedPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServiceVerifiedPhoneRegionCode" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "customerServiceVerifiedPhoneRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlineSalesChannel" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "onlineSalesChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participationStage" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatus.prototype, "participationStage", void 0);
    return BuyOnGoogleProgramStatus;
}(SpeakeasyBase));
export { BuyOnGoogleProgramStatus };
// BuyOnGoogleProgramStatusInput
/**
 * Response message for the GetProgramStatus method.
**/
var BuyOnGoogleProgramStatusInput = /** @class */ (function (_super) {
    __extends(BuyOnGoogleProgramStatusInput, _super);
    function BuyOnGoogleProgramStatusInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessModel" }),
        __metadata("design:type", Array)
    ], BuyOnGoogleProgramStatusInput.prototype, "businessModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingEmail" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatusInput.prototype, "customerServicePendingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingPhoneNumber" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatusInput.prototype, "customerServicePendingPhoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerServicePendingPhoneRegionCode" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatusInput.prototype, "customerServicePendingPhoneRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlineSalesChannel" }),
        __metadata("design:type", String)
    ], BuyOnGoogleProgramStatusInput.prototype, "onlineSalesChannel", void 0);
    return BuyOnGoogleProgramStatusInput;
}(SpeakeasyBase));
export { BuyOnGoogleProgramStatusInput };
