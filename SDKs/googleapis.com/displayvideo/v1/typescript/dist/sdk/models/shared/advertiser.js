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
import { AdvertiserAdServerConfig } from "./advertiseradserverconfig";
import { AdvertiserCreativeConfig } from "./advertisercreativeconfig";
import { AdvertiserDataAccessConfig } from "./advertiserdataaccessconfig";
import { AdvertiserGeneralConfig } from "./advertisergeneralconfig";
import { IntegrationDetails } from "./integrationdetails";
import { AdvertiserTargetingConfig } from "./advertisertargetingconfig";
import { AdvertiserGeneralConfigInput } from "./advertisergeneralconfig";
export var AdvertiserEntityStatusEnum;
(function (AdvertiserEntityStatusEnum) {
    AdvertiserEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    AdvertiserEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    AdvertiserEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    AdvertiserEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    AdvertiserEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    AdvertiserEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(AdvertiserEntityStatusEnum || (AdvertiserEntityStatusEnum = {}));
// Advertiser
/**
 * A single advertiser in Display & Video 360 (DV360).
**/
var Advertiser = /** @class */ (function (_super) {
    __extends(Advertiser, _super);
    function Advertiser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adServerConfig" }),
        __metadata("design:type", AdvertiserAdServerConfig)
    ], Advertiser.prototype, "adServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeConfig" }),
        __metadata("design:type", AdvertiserCreativeConfig)
    ], Advertiser.prototype, "creativeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataAccessConfig" }),
        __metadata("design:type", AdvertiserDataAccessConfig)
    ], Advertiser.prototype, "dataAccessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generalConfig" }),
        __metadata("design:type", AdvertiserGeneralConfig)
    ], Advertiser.prototype, "generalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], Advertiser.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prismaEnabled" }),
        __metadata("design:type", Boolean)
    ], Advertiser.prototype, "prismaEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingConfig" }),
        __metadata("design:type", AdvertiserTargetingConfig)
    ], Advertiser.prototype, "servingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Advertiser.prototype, "updateTime", void 0);
    return Advertiser;
}(SpeakeasyBase));
export { Advertiser };
// AdvertiserInput
/**
 * A single advertiser in Display & Video 360 (DV360).
**/
var AdvertiserInput = /** @class */ (function (_super) {
    __extends(AdvertiserInput, _super);
    function AdvertiserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adServerConfig" }),
        __metadata("design:type", AdvertiserAdServerConfig)
    ], AdvertiserInput.prototype, "adServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeConfig" }),
        __metadata("design:type", AdvertiserCreativeConfig)
    ], AdvertiserInput.prototype, "creativeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataAccessConfig" }),
        __metadata("design:type", AdvertiserDataAccessConfig)
    ], AdvertiserInput.prototype, "dataAccessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AdvertiserInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], AdvertiserInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generalConfig" }),
        __metadata("design:type", AdvertiserGeneralConfigInput)
    ], AdvertiserInput.prototype, "generalConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], AdvertiserInput.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], AdvertiserInput.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prismaEnabled" }),
        __metadata("design:type", Boolean)
    ], AdvertiserInput.prototype, "prismaEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingConfig" }),
        __metadata("design:type", AdvertiserTargetingConfig)
    ], AdvertiserInput.prototype, "servingConfig", void 0);
    return AdvertiserInput;
}(SpeakeasyBase));
export { AdvertiserInput };
