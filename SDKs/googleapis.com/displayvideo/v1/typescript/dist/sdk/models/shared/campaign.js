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
import { CampaignBudget } from "./campaignbudget";
import { CampaignFlight } from "./campaignflight";
import { CampaignGoal } from "./campaigngoal";
import { FrequencyCap } from "./frequencycap";
export var CampaignEntityStatusEnum;
(function (CampaignEntityStatusEnum) {
    CampaignEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    CampaignEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    CampaignEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    CampaignEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    CampaignEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    CampaignEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(CampaignEntityStatusEnum || (CampaignEntityStatusEnum = {}));
// CampaignInput
/**
 * A single campaign.
**/
var CampaignInput = /** @class */ (function (_super) {
    __extends(CampaignInput, _super);
    function CampaignInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignBudgets", elemType: CampaignBudget }),
        __metadata("design:type", Array)
    ], CampaignInput.prototype, "campaignBudgets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignFlight" }),
        __metadata("design:type", CampaignFlight)
    ], CampaignInput.prototype, "campaignFlight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignGoal" }),
        __metadata("design:type", CampaignGoal)
    ], CampaignInput.prototype, "campaignGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CampaignInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], CampaignInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], CampaignInput.prototype, "frequencyCap", void 0);
    return CampaignInput;
}(SpeakeasyBase));
export { CampaignInput };
// Campaign
/**
 * A single campaign.
**/
var Campaign = /** @class */ (function (_super) {
    __extends(Campaign, _super);
    function Campaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignBudgets", elemType: CampaignBudget }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "campaignBudgets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignFlight" }),
        __metadata("design:type", CampaignFlight)
    ], Campaign.prototype, "campaignFlight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignGoal" }),
        __metadata("design:type", CampaignGoal)
    ], Campaign.prototype, "campaignGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], Campaign.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "updateTime", void 0);
    return Campaign;
}(SpeakeasyBase));
export { Campaign };
