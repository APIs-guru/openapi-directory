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
import { SasPortalDeviceAirInterface } from "./sasportaldeviceairinterface";
import { SasPortalInstallationParams } from "./sasportalinstallationparams";
import { SasPortalDeviceModel } from "./sasportaldevicemodel";
export var SasPortalDeviceConfigCategoryEnum;
(function (SasPortalDeviceConfigCategoryEnum) {
    SasPortalDeviceConfigCategoryEnum["DeviceCategoryUnspecified"] = "DEVICE_CATEGORY_UNSPECIFIED";
    SasPortalDeviceConfigCategoryEnum["DeviceCategoryA"] = "DEVICE_CATEGORY_A";
    SasPortalDeviceConfigCategoryEnum["DeviceCategoryB"] = "DEVICE_CATEGORY_B";
})(SasPortalDeviceConfigCategoryEnum || (SasPortalDeviceConfigCategoryEnum = {}));
export var SasPortalDeviceConfigMeasurementCapabilitiesEnum;
(function (SasPortalDeviceConfigMeasurementCapabilitiesEnum) {
    SasPortalDeviceConfigMeasurementCapabilitiesEnum["MeasurementCapabilityUnspecified"] = "MEASUREMENT_CAPABILITY_UNSPECIFIED";
    SasPortalDeviceConfigMeasurementCapabilitiesEnum["MeasurementCapabilityReceivedPowerWithGrant"] = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT";
    SasPortalDeviceConfigMeasurementCapabilitiesEnum["MeasurementCapabilityReceivedPowerWithoutGrant"] = "MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT";
})(SasPortalDeviceConfigMeasurementCapabilitiesEnum || (SasPortalDeviceConfigMeasurementCapabilitiesEnum = {}));
export var SasPortalDeviceConfigStateEnum;
(function (SasPortalDeviceConfigStateEnum) {
    SasPortalDeviceConfigStateEnum["DeviceConfigStateUnspecified"] = "DEVICE_CONFIG_STATE_UNSPECIFIED";
    SasPortalDeviceConfigStateEnum["Draft"] = "DRAFT";
    SasPortalDeviceConfigStateEnum["Final"] = "FINAL";
})(SasPortalDeviceConfigStateEnum || (SasPortalDeviceConfigStateEnum = {}));
// SasPortalDeviceConfig
/**
 * Information about the device configuration.
**/
var SasPortalDeviceConfig = /** @class */ (function (_super) {
    __extends(SasPortalDeviceConfig, _super);
    function SasPortalDeviceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airInterface" }),
        __metadata("design:type", SasPortalDeviceAirInterface)
    ], SasPortalDeviceConfig.prototype, "airInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callSign" }),
        __metadata("design:type", String)
    ], SasPortalDeviceConfig.prototype, "callSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], SasPortalDeviceConfig.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installationParams" }),
        __metadata("design:type", SasPortalInstallationParams)
    ], SasPortalDeviceConfig.prototype, "installationParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSigned" }),
        __metadata("design:type", Boolean)
    ], SasPortalDeviceConfig.prototype, "isSigned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementCapabilities" }),
        __metadata("design:type", Array)
    ], SasPortalDeviceConfig.prototype, "measurementCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", SasPortalDeviceModel)
    ], SasPortalDeviceConfig.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SasPortalDeviceConfig.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], SasPortalDeviceConfig.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], SasPortalDeviceConfig.prototype, "userId", void 0);
    return SasPortalDeviceConfig;
}(SpeakeasyBase));
export { SasPortalDeviceConfig };
