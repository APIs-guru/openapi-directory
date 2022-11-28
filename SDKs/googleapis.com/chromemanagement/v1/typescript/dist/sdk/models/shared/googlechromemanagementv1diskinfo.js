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
// GoogleChromeManagementV1DiskInfo
/**
 * Status of the single storage device.
**/
var GoogleChromeManagementV1DiskInfo = /** @class */ (function (_super) {
    __extends(GoogleChromeManagementV1DiskInfo, _super);
    function GoogleChromeManagementV1DiskInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bytesReadThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "bytesReadThisSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bytesWrittenThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "bytesWrittenThisSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discardTimeThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "discardTimeThisSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "health", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ioTimeThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "ioTimeThisSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readTimeThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "readTimeThisSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeIds" }),
        __metadata("design:type", Array)
    ], GoogleChromeManagementV1DiskInfo.prototype, "volumeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeTimeThisSession" }),
        __metadata("design:type", String)
    ], GoogleChromeManagementV1DiskInfo.prototype, "writeTimeThisSession", void 0);
    return GoogleChromeManagementV1DiskInfo;
}(SpeakeasyBase));
export { GoogleChromeManagementV1DiskInfo };
