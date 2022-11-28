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
export var MeasurementPartnerWrappingDataLinkStatusEnum;
(function (MeasurementPartnerWrappingDataLinkStatusEnum) {
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerUnlinked"] = "MEASUREMENT_PARTNER_UNLINKED";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinked"] = "MEASUREMENT_PARTNER_LINKED";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinkPending"] = "MEASUREMENT_PARTNER_LINK_PENDING";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinkFailure"] = "MEASUREMENT_PARTNER_LINK_FAILURE";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinkOptOut"] = "MEASUREMENT_PARTNER_LINK_OPT_OUT";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinkOptOutPending"] = "MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerLinkWrappingPending"] = "MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING";
    MeasurementPartnerWrappingDataLinkStatusEnum["MeasurementPartnerModeChangePending"] = "MEASUREMENT_PARTNER_MODE_CHANGE_PENDING";
})(MeasurementPartnerWrappingDataLinkStatusEnum || (MeasurementPartnerWrappingDataLinkStatusEnum = {}));
export var MeasurementPartnerWrappingDataMeasurementPartnerEnum;
(function (MeasurementPartnerWrappingDataMeasurementPartnerEnum) {
    MeasurementPartnerWrappingDataMeasurementPartnerEnum["None"] = "NONE";
    MeasurementPartnerWrappingDataMeasurementPartnerEnum["IntegralAdScience"] = "INTEGRAL_AD_SCIENCE";
    MeasurementPartnerWrappingDataMeasurementPartnerEnum["DoubleVerify"] = "DOUBLE_VERIFY";
})(MeasurementPartnerWrappingDataMeasurementPartnerEnum || (MeasurementPartnerWrappingDataMeasurementPartnerEnum = {}));
export var MeasurementPartnerWrappingDataTagWrappingModeEnum;
(function (MeasurementPartnerWrappingDataTagWrappingModeEnum) {
    MeasurementPartnerWrappingDataTagWrappingModeEnum["None"] = "NONE";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["Blocking"] = "BLOCKING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["Monitoring"] = "MONITORING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["MonitoringOnly"] = "MONITORING_ONLY";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VideoPixelMonitoring"] = "VIDEO_PIXEL_MONITORING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["Tracking"] = "TRACKING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidMonitoring"] = "VPAID_MONITORING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidBlocking"] = "VPAID_BLOCKING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["NonVpaidMonitoring"] = "NON_VPAID_MONITORING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidOnlyMonitoring"] = "VPAID_ONLY_MONITORING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidOnlyBlocking"] = "VPAID_ONLY_BLOCKING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidOnlyFiltering"] = "VPAID_ONLY_FILTERING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["VpaidFiltering"] = "VPAID_FILTERING";
    MeasurementPartnerWrappingDataTagWrappingModeEnum["NonVpaidFiltering"] = "NON_VPAID_FILTERING";
})(MeasurementPartnerWrappingDataTagWrappingModeEnum || (MeasurementPartnerWrappingDataTagWrappingModeEnum = {}));
// MeasurementPartnerWrappingData
/**
 * Placement tag wrapping
**/
var MeasurementPartnerWrappingData = /** @class */ (function (_super) {
    __extends(MeasurementPartnerWrappingData, _super);
    function MeasurementPartnerWrappingData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkStatus" }),
        __metadata("design:type", String)
    ], MeasurementPartnerWrappingData.prototype, "linkStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementPartner" }),
        __metadata("design:type", String)
    ], MeasurementPartnerWrappingData.prototype, "measurementPartner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagWrappingMode" }),
        __metadata("design:type", String)
    ], MeasurementPartnerWrappingData.prototype, "tagWrappingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wrappedTag" }),
        __metadata("design:type", String)
    ], MeasurementPartnerWrappingData.prototype, "wrappedTag", void 0);
    return MeasurementPartnerWrappingData;
}(SpeakeasyBase));
export { MeasurementPartnerWrappingData };
