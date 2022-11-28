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
export var GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum;
(function (GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum) {
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["NetworkConnectionStateUnspecified"] = "NETWORK_CONNECTION_STATE_UNSPECIFIED";
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["Online"] = "ONLINE";
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["Connected"] = "CONNECTED";
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["Portal"] = "PORTAL";
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["Connecting"] = "CONNECTING";
    GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum["NotConnected"] = "NOT_CONNECTED";
})(GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum || (GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = {}));
export var GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum;
(function (GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum) {
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["NetworkTypeUnspecified"] = "NETWORK_TYPE_UNSPECIFIED";
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["Cellular"] = "CELLULAR";
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["Ethernet"] = "ETHERNET";
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["Tether"] = "TETHER";
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["Vpn"] = "VPN";
    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum["Wifi"] = "WIFI";
})(GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum || (GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = {}));
// GoogleChromeManagementV1NetworkStatusReport
/**
 * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
**/
var GoogleChromeManagementV1NetworkStatusReport = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1NetworkStatusReport, _super);
    function GoogleChromeManagementV1NetworkStatusReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionState" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "connectionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionType" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "connectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionOn" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "encryptionOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayIpAddress" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "gatewayIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guid" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lanIpAddress" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "lanIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingBitRateMbps" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "receivingBitRateMbps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportTime" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "reportTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleFrequency" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "sampleFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signalStrengthDbm" }),
        __metadata("design:type", Number)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "signalStrengthDbm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissionBitRateMbps" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "transmissionBitRateMbps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transmissionPowerDbm" }),
        __metadata("design:type", Number)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "transmissionPowerDbm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiLinkQuality" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "wifiLinkQuality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiPowerManagementEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleChromeManagementV1NetworkStatusReport.prototype, "wifiPowerManagementEnabled", void 0);
    return GoogleChromeManagementV1NetworkStatusReport;
}(SpeakeasyBase));
export { GoogleChromeManagementV1NetworkStatusReport };
