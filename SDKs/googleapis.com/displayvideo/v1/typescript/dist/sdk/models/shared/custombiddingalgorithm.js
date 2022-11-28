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
import { CustomBiddingModelReadinessState } from "./custombiddingmodelreadinessstate";
export var CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum;
(function (CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum) {
    CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum["Enabled"] = "ENABLED";
    CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum["Dormant"] = "DORMANT";
    CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum["Suspended"] = "SUSPENDED";
})(CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum || (CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum = {}));
export var CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
(function (CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum) {
    CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum["CustomBiddingAlgorithmTypeUnspecified"] = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED";
    CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum["ScriptBased"] = "SCRIPT_BASED";
    CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum["AdsDataHubBased"] = "ADS_DATA_HUB_BASED";
    CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum["GoalBuilderBased"] = "GOAL_BUILDER_BASED";
})(CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum || (CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum = {}));
export var CustomBiddingAlgorithmEntityStatusEnum;
(function (CustomBiddingAlgorithmEntityStatusEnum) {
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    CustomBiddingAlgorithmEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(CustomBiddingAlgorithmEntityStatusEnum || (CustomBiddingAlgorithmEntityStatusEnum = {}));
// CustomBiddingAlgorithmInput
/**
 * A single custom bidding algorithm.
**/
var CustomBiddingAlgorithmInput = /** @class */ (function (_super) {
    __extends(CustomBiddingAlgorithmInput, _super);
    function CustomBiddingAlgorithmInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithmInput.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmType" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithmInput.prototype, "customBiddingAlgorithmType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithmInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithmInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithmInput.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedAdvertiserIds" }),
        __metadata("design:type", Array)
    ], CustomBiddingAlgorithmInput.prototype, "sharedAdvertiserIds", void 0);
    return CustomBiddingAlgorithmInput;
}(SpeakeasyBase));
export { CustomBiddingAlgorithmInput };
// CustomBiddingAlgorithm
/**
 * A single custom bidding algorithm.
**/
var CustomBiddingAlgorithm = /** @class */ (function (_super) {
    __extends(CustomBiddingAlgorithm, _super);
    function CustomBiddingAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "customBiddingAlgorithmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmState" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "customBiddingAlgorithmState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmType" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "customBiddingAlgorithmType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelReadiness", elemType: CustomBiddingModelReadinessState }),
        __metadata("design:type", Array)
    ], CustomBiddingAlgorithm.prototype, "modelReadiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], CustomBiddingAlgorithm.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedAdvertiserIds" }),
        __metadata("design:type", Array)
    ], CustomBiddingAlgorithm.prototype, "sharedAdvertiserIds", void 0);
    return CustomBiddingAlgorithm;
}(SpeakeasyBase));
export { CustomBiddingAlgorithm };
