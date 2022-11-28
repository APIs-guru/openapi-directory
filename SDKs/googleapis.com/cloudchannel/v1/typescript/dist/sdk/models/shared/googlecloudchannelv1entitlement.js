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
import { GoogleCloudChannelV1AssociationInfo } from "./googlecloudchannelv1associationinfo";
import { GoogleCloudChannelV1CommitmentSettingsInput } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1TrialSettings } from "./googlecloudchannelv1trialsettings";
import { GoogleCloudChannelV1CommitmentSettings } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1ProvisionedService } from "./googlecloudchannelv1provisionedservice";
export var GoogleCloudChannelV1EntitlementProvisioningStateEnum;
(function (GoogleCloudChannelV1EntitlementProvisioningStateEnum) {
    GoogleCloudChannelV1EntitlementProvisioningStateEnum["ProvisioningStateUnspecified"] = "PROVISIONING_STATE_UNSPECIFIED";
    GoogleCloudChannelV1EntitlementProvisioningStateEnum["Active"] = "ACTIVE";
    GoogleCloudChannelV1EntitlementProvisioningStateEnum["Suspended"] = "SUSPENDED";
})(GoogleCloudChannelV1EntitlementProvisioningStateEnum || (GoogleCloudChannelV1EntitlementProvisioningStateEnum = {}));
export var GoogleCloudChannelV1EntitlementSuspensionReasonsEnum;
(function (GoogleCloudChannelV1EntitlementSuspensionReasonsEnum) {
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["SuspensionReasonUnspecified"] = "SUSPENSION_REASON_UNSPECIFIED";
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["ResellerInitiated"] = "RESELLER_INITIATED";
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["TrialEnded"] = "TRIAL_ENDED";
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["RenewalWithTypeCancel"] = "RENEWAL_WITH_TYPE_CANCEL";
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["PendingTosAcceptance"] = "PENDING_TOS_ACCEPTANCE";
    GoogleCloudChannelV1EntitlementSuspensionReasonsEnum["Other"] = "OTHER";
})(GoogleCloudChannelV1EntitlementSuspensionReasonsEnum || (GoogleCloudChannelV1EntitlementSuspensionReasonsEnum = {}));
// GoogleCloudChannelV1EntitlementInput
/**
 * An entitlement is a representation of a customer's ability to use a service.
**/
var GoogleCloudChannelV1EntitlementInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1EntitlementInput, _super);
    function GoogleCloudChannelV1EntitlementInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associationInfo" }),
        __metadata("design:type", GoogleCloudChannelV1AssociationInfo)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "associationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitmentSettings" }),
        __metadata("design:type", GoogleCloudChannelV1CommitmentSettingsInput)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "commitmentSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "offer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1ParameterInput }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrderId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "purchaseOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialSettings" }),
        __metadata("design:type", GoogleCloudChannelV1TrialSettings)
    ], GoogleCloudChannelV1EntitlementInput.prototype, "trialSettings", void 0);
    return GoogleCloudChannelV1EntitlementInput;
}(SpeakeasyBase));
export { GoogleCloudChannelV1EntitlementInput };
// GoogleCloudChannelV1Entitlement
/**
 * An entitlement is a representation of a customer's ability to use a service.
**/
var GoogleCloudChannelV1Entitlement = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1Entitlement, _super);
    function GoogleCloudChannelV1Entitlement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associationInfo" }),
        __metadata("design:type", GoogleCloudChannelV1AssociationInfo)
    ], GoogleCloudChannelV1Entitlement.prototype, "associationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitmentSettings" }),
        __metadata("design:type", GoogleCloudChannelV1CommitmentSettings)
    ], GoogleCloudChannelV1Entitlement.prototype, "commitmentSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "offer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1Parameter }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1Entitlement.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisionedService" }),
        __metadata("design:type", GoogleCloudChannelV1ProvisionedService)
    ], GoogleCloudChannelV1Entitlement.prototype, "provisionedService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioningState" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "provisioningState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchaseOrderId" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "purchaseOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspensionReasons" }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1Entitlement.prototype, "suspensionReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialSettings" }),
        __metadata("design:type", GoogleCloudChannelV1TrialSettings)
    ], GoogleCloudChannelV1Entitlement.prototype, "trialSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1Entitlement.prototype, "updateTime", void 0);
    return GoogleCloudChannelV1Entitlement;
}(SpeakeasyBase));
export { GoogleCloudChannelV1Entitlement };
