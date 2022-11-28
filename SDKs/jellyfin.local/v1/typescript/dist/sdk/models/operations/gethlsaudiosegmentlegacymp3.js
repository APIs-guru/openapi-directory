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
var GetHlsAudioSegmentLegacyMp3PathParams = /** @class */ (function (_super) {
    __extends(GetHlsAudioSegmentLegacyMp3PathParams, _super);
    function GetHlsAudioSegmentLegacyMp3PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetHlsAudioSegmentLegacyMp3PathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=segmentId" }),
        __metadata("design:type", String)
    ], GetHlsAudioSegmentLegacyMp3PathParams.prototype, "segmentId", void 0);
    return GetHlsAudioSegmentLegacyMp3PathParams;
}(SpeakeasyBase));
export { GetHlsAudioSegmentLegacyMp3PathParams };
var GetHlsAudioSegmentLegacyMp3Request = /** @class */ (function (_super) {
    __extends(GetHlsAudioSegmentLegacyMp3Request, _super);
    function GetHlsAudioSegmentLegacyMp3Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHlsAudioSegmentLegacyMp3PathParams)
    ], GetHlsAudioSegmentLegacyMp3Request.prototype, "pathParams", void 0);
    return GetHlsAudioSegmentLegacyMp3Request;
}(SpeakeasyBase));
export { GetHlsAudioSegmentLegacyMp3Request };
var GetHlsAudioSegmentLegacyMp3Response = /** @class */ (function (_super) {
    __extends(GetHlsAudioSegmentLegacyMp3Response, _super);
    function GetHlsAudioSegmentLegacyMp3Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHlsAudioSegmentLegacyMp3Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetHlsAudioSegmentLegacyMp3Response.prototype, "getHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHlsAudioSegmentLegacyMp3Response.prototype, "statusCode", void 0);
    return GetHlsAudioSegmentLegacyMp3Response;
}(SpeakeasyBase));
export { GetHlsAudioSegmentLegacyMp3Response };
