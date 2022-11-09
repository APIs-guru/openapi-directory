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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// VideoStream
/**
 * Video stream resource.
**/
var VideoStream = /** @class */ (function (_super) {
    __extends(VideoStream, _super);
    function VideoStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowOpenGop" }),
        __metadata("design:type", Boolean)
    ], VideoStream.prototype, "allowOpenGop", void 0);
    __decorate([
        Metadata({ data: "json, name=aqStrength" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "aqStrength", void 0);
    __decorate([
        Metadata({ data: "json, name=bFrameCount" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "bFrameCount", void 0);
    __decorate([
        Metadata({ data: "json, name=bPyramid" }),
        __metadata("design:type", Boolean)
    ], VideoStream.prototype, "bPyramid", void 0);
    __decorate([
        Metadata({ data: "json, name=bitrateBps" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "bitrateBps", void 0);
    __decorate([
        Metadata({ data: "json, name=codec" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "codec", void 0);
    __decorate([
        Metadata({ data: "json, name=crfLevel" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "crfLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=enableTwoPass" }),
        __metadata("design:type", Boolean)
    ], VideoStream.prototype, "enableTwoPass", void 0);
    __decorate([
        Metadata({ data: "json, name=entropyCoder" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "entropyCoder", void 0);
    __decorate([
        Metadata({ data: "json, name=frameRate" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "frameRate", void 0);
    __decorate([
        Metadata({ data: "json, name=gopDuration" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "gopDuration", void 0);
    __decorate([
        Metadata({ data: "json, name=gopFrameCount" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "gopFrameCount", void 0);
    __decorate([
        Metadata({ data: "json, name=heightPixels" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "heightPixels", void 0);
    __decorate([
        Metadata({ data: "json, name=pixelFormat" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "pixelFormat", void 0);
    __decorate([
        Metadata({ data: "json, name=preset" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "preset", void 0);
    __decorate([
        Metadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "profile", void 0);
    __decorate([
        Metadata({ data: "json, name=rateControlMode" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "rateControlMode", void 0);
    __decorate([
        Metadata({ data: "json, name=tune" }),
        __metadata("design:type", String)
    ], VideoStream.prototype, "tune", void 0);
    __decorate([
        Metadata({ data: "json, name=vbvFullnessBits" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "vbvFullnessBits", void 0);
    __decorate([
        Metadata({ data: "json, name=vbvSizeBits" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "vbvSizeBits", void 0);
    __decorate([
        Metadata({ data: "json, name=widthPixels" }),
        __metadata("design:type", Number)
    ], VideoStream.prototype, "widthPixels", void 0);
    return VideoStream;
}(SpeakeasyBase));
export { VideoStream };
