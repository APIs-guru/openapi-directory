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
// Vp9CodecSettings
/**
 * VP9 codec settings.
**/
var Vp9CodecSettings = /** @class */ (function (_super) {
    __extends(Vp9CodecSettings, _super);
    function Vp9CodecSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitrateBps" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "bitrateBps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crfLevel" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "crfLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameRate" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gopDuration" }),
        __metadata("design:type", String)
    ], Vp9CodecSettings.prototype, "gopDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gopFrameCount" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "gopFrameCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heightPixels" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "heightPixels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pixelFormat" }),
        __metadata("design:type", String)
    ], Vp9CodecSettings.prototype, "pixelFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], Vp9CodecSettings.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateControlMode" }),
        __metadata("design:type", String)
    ], Vp9CodecSettings.prototype, "rateControlMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=widthPixels" }),
        __metadata("design:type", Number)
    ], Vp9CodecSettings.prototype, "widthPixels", void 0);
    return Vp9CodecSettings;
}(SpeakeasyBase));
export { Vp9CodecSettings };
