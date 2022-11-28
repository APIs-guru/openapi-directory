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
import { NestedDeviceType } from "./nesteddevicetype";
export var ConsoleServerPortTemplateTypeLabelEnum;
(function (ConsoleServerPortTemplateTypeLabelEnum) {
    ConsoleServerPortTemplateTypeLabelEnum["De9"] = "DE-9";
    ConsoleServerPortTemplateTypeLabelEnum["Db25"] = "DB-25";
    ConsoleServerPortTemplateTypeLabelEnum["Rj11"] = "RJ-11";
    ConsoleServerPortTemplateTypeLabelEnum["Rj12"] = "RJ-12";
    ConsoleServerPortTemplateTypeLabelEnum["Rj45"] = "RJ-45";
    ConsoleServerPortTemplateTypeLabelEnum["UsbTypeA"] = "USB Type A";
    ConsoleServerPortTemplateTypeLabelEnum["UsbTypeB"] = "USB Type B";
    ConsoleServerPortTemplateTypeLabelEnum["UsbTypeC"] = "USB Type C";
    ConsoleServerPortTemplateTypeLabelEnum["UsbMiniA"] = "USB Mini A";
    ConsoleServerPortTemplateTypeLabelEnum["UsbMiniB"] = "USB Mini B";
    ConsoleServerPortTemplateTypeLabelEnum["UsbMicroA"] = "USB Micro A";
    ConsoleServerPortTemplateTypeLabelEnum["UsbMicroB"] = "USB Micro B";
    ConsoleServerPortTemplateTypeLabelEnum["Other"] = "Other";
})(ConsoleServerPortTemplateTypeLabelEnum || (ConsoleServerPortTemplateTypeLabelEnum = {}));
export var ConsoleServerPortTemplateTypeValueEnum;
(function (ConsoleServerPortTemplateTypeValueEnum) {
    ConsoleServerPortTemplateTypeValueEnum["De9"] = "de-9";
    ConsoleServerPortTemplateTypeValueEnum["Db25"] = "db-25";
    ConsoleServerPortTemplateTypeValueEnum["Rj11"] = "rj-11";
    ConsoleServerPortTemplateTypeValueEnum["Rj12"] = "rj-12";
    ConsoleServerPortTemplateTypeValueEnum["Rj45"] = "rj-45";
    ConsoleServerPortTemplateTypeValueEnum["UsbA"] = "usb-a";
    ConsoleServerPortTemplateTypeValueEnum["UsbB"] = "usb-b";
    ConsoleServerPortTemplateTypeValueEnum["UsbC"] = "usb-c";
    ConsoleServerPortTemplateTypeValueEnum["UsbMiniA"] = "usb-mini-a";
    ConsoleServerPortTemplateTypeValueEnum["UsbMiniB"] = "usb-mini-b";
    ConsoleServerPortTemplateTypeValueEnum["UsbMicroA"] = "usb-micro-a";
    ConsoleServerPortTemplateTypeValueEnum["UsbMicroB"] = "usb-micro-b";
    ConsoleServerPortTemplateTypeValueEnum["Other"] = "other";
})(ConsoleServerPortTemplateTypeValueEnum || (ConsoleServerPortTemplateTypeValueEnum = {}));
var ConsoleServerPortTemplateType = /** @class */ (function (_super) {
    __extends(ConsoleServerPortTemplateType, _super);
    function ConsoleServerPortTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsoleServerPortTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ConsoleServerPortTemplateType.prototype, "value", void 0);
    return ConsoleServerPortTemplateType;
}(SpeakeasyBase));
export { ConsoleServerPortTemplateType };
var ConsoleServerPortTemplate = /** @class */ (function (_super) {
    __extends(ConsoleServerPortTemplate, _super);
    function ConsoleServerPortTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], ConsoleServerPortTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ConsoleServerPortTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsoleServerPortTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", ConsoleServerPortTemplateType)
    ], ConsoleServerPortTemplate.prototype, "type", void 0);
    return ConsoleServerPortTemplate;
}(SpeakeasyBase));
export { ConsoleServerPortTemplate };
