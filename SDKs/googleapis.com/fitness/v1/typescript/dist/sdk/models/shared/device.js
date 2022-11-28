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
export var DeviceTypeEnum;
(function (DeviceTypeEnum) {
    DeviceTypeEnum["Unknown"] = "unknown";
    DeviceTypeEnum["Phone"] = "phone";
    DeviceTypeEnum["Tablet"] = "tablet";
    DeviceTypeEnum["Watch"] = "watch";
    DeviceTypeEnum["ChestStrap"] = "chestStrap";
    DeviceTypeEnum["Scale"] = "scale";
    DeviceTypeEnum["HeadMounted"] = "headMounted";
    DeviceTypeEnum["SmartDisplay"] = "smartDisplay";
})(DeviceTypeEnum || (DeviceTypeEnum = {}));
// Device
/**
 * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], Device.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Device.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Device.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Device.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Device.prototype, "version", void 0);
    return Device;
}(SpeakeasyBase));
export { Device };
