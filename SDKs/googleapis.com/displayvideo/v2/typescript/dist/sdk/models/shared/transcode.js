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
import { Dimensions } from "./dimensions";
// Transcode
/**
 * Represents information about the transcoded audio or video file.
**/
var Transcode = /** @class */ (function (_super) {
    __extends(Transcode, _super);
    function Transcode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioBitRateKbps" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "audioBitRateKbps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioSampleRateHz" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "audioSampleRateHz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitRateKbps" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "bitRateKbps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Dimensions)
    ], Transcode.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSizeBytes" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "fileSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameRate" }),
        __metadata("design:type", Number)
    ], Transcode.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Transcode.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcoded" }),
        __metadata("design:type", Boolean)
    ], Transcode.prototype, "transcoded", void 0);
    return Transcode;
}(SpeakeasyBase));
export { Transcode };
