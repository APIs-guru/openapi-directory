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
import { Browsers } from "./browsers";
var ScreenshotPayloadConfigs = /** @class */ (function (_super) {
    __extends(ScreenshotPayloadConfigs, _super);
    function ScreenshotPayloadConfigs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macos mojave" }),
        __metadata("design:type", Browsers)
    ], ScreenshotPayloadConfigs.prototype, "macosMojave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windows 10" }),
        __metadata("design:type", Browsers)
    ], ScreenshotPayloadConfigs.prototype, "windows10", void 0);
    return ScreenshotPayloadConfigs;
}(SpeakeasyBase));
export { ScreenshotPayloadConfigs };
var ScreenshotPayload = /** @class */ (function (_super) {
    __extends(ScreenshotPayload, _super);
    function ScreenshotPayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", ScreenshotPayloadConfigs)
    ], ScreenshotPayload.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defer_time" }),
        __metadata("design:type", Number)
    ], ScreenshotPayload.prototype, "deferTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", Boolean)
    ], ScreenshotPayload.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_res" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "macRes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tunnel" }),
        __metadata("design:type", Boolean)
    ], ScreenshotPayload.prototype, "tunnel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tunnel_identifier" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "tunnelIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=win_res" }),
        __metadata("design:type", String)
    ], ScreenshotPayload.prototype, "winRes", void 0);
    return ScreenshotPayload;
}(SpeakeasyBase));
export { ScreenshotPayload };
