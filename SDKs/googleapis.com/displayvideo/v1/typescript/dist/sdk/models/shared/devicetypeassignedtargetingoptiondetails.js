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
export var DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
(function (DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum) {
    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum["DeviceTypeUnspecified"] = "DEVICE_TYPE_UNSPECIFIED";
    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum["DeviceTypeComputer"] = "DEVICE_TYPE_COMPUTER";
    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum["DeviceTypeConnectedTv"] = "DEVICE_TYPE_CONNECTED_TV";
    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum["DeviceTypeSmartPhone"] = "DEVICE_TYPE_SMART_PHONE";
    DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum["DeviceTypeTablet"] = "DEVICE_TYPE_TABLET";
})(DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum || (DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum = {}));
// DeviceTypeAssignedTargetingOptionDetails
/**
 * Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.
**/
var DeviceTypeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(DeviceTypeAssignedTargetingOptionDetails, _super);
    function DeviceTypeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceType" }),
        __metadata("design:type", String)
    ], DeviceTypeAssignedTargetingOptionDetails.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], DeviceTypeAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return DeviceTypeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { DeviceTypeAssignedTargetingOptionDetails };
