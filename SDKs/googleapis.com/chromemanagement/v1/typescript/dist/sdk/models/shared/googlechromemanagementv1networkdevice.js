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
export var GoogleChromeManagementV1NetworkDeviceTypeEnum;
(function (GoogleChromeManagementV1NetworkDeviceTypeEnum) {
    GoogleChromeManagementV1NetworkDeviceTypeEnum["NetworkDeviceTypeUnspecified"] = "NETWORK_DEVICE_TYPE_UNSPECIFIED";
    GoogleChromeManagementV1NetworkDeviceTypeEnum["CellularDevice"] = "CELLULAR_DEVICE";
    GoogleChromeManagementV1NetworkDeviceTypeEnum["EthernetDevice"] = "ETHERNET_DEVICE";
    GoogleChromeManagementV1NetworkDeviceTypeEnum["WifiDevice"] = "WIFI_DEVICE";
})(GoogleChromeManagementV1NetworkDeviceTypeEnum || (GoogleChromeManagementV1NetworkDeviceTypeEnum = {}));
// GoogleChromeManagementV1NetworkDevice
/**
 * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
var GoogleChromeManagementV1NetworkDevice = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1NetworkDevice, _super);
    function GoogleChromeManagementV1NetworkDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iccid" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "iccid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imei" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAddress" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mdn" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "mdn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meid" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "meid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1NetworkDevice.prototype, "type", void 0);
    return GoogleChromeManagementV1NetworkDevice;
}(SpeakeasyBase));
export { GoogleChromeManagementV1NetworkDevice };
