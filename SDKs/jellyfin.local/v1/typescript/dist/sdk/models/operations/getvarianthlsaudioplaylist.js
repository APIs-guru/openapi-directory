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
import * as shared from "../shared";
var GetVariantHlsAudioPlaylistPathParams = /** @class */ (function (_super) {
    __extends(GetVariantHlsAudioPlaylistPathParams, _super);
    function GetVariantHlsAudioPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistPathParams.prototype, "itemId", void 0);
    return GetVariantHlsAudioPlaylistPathParams;
}(SpeakeasyBase));
export { GetVariantHlsAudioPlaylistPathParams };
var GetVariantHlsAudioPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(GetVariantHlsAudioPlaylistQueryParams, _super);
    function GetVariantHlsAudioPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "allowAudioStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "allowVideoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "audioBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioChannels" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "audioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioCodec" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "audioCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioSampleRate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "audioSampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "breakOnNonKeyFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=context" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "copyTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cpuCoreLimit" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "cpuCoreLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deInterlace" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "deInterlace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceProfileId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "deviceProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableAutoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "enableAutoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableMpegtsM2TsMode" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "enableMpegtsM2TsMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=framerate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "framerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxAudioBitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFramerate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxFramerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxRefFrames" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxRefFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxVideoBitDepth" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "maxVideoBitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minSegments" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "minSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=params" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireAvc" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "requireAvc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireNonAnamorphic" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "requireNonAnamorphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentContainer" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "segmentContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentLength" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "segmentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=static" }),
        __metadata("design:type", Boolean)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "static", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamOptions" }),
        __metadata("design:type", Map)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "streamOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleCodec" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "subtitleCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleMethod" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "subtitleMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodeReasons" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "transcodeReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingMaxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "transcodingMaxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoBitRate" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "videoBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCodec" }),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "videoCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoStreamIndex" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "videoStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistQueryParams.prototype, "width", void 0);
    return GetVariantHlsAudioPlaylistQueryParams;
}(SpeakeasyBase));
export { GetVariantHlsAudioPlaylistQueryParams };
var GetVariantHlsAudioPlaylistSecurity = /** @class */ (function (_super) {
    __extends(GetVariantHlsAudioPlaylistSecurity, _super);
    function GetVariantHlsAudioPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetVariantHlsAudioPlaylistSecurity.prototype, "customAuthentication", void 0);
    return GetVariantHlsAudioPlaylistSecurity;
}(SpeakeasyBase));
export { GetVariantHlsAudioPlaylistSecurity };
var GetVariantHlsAudioPlaylistRequest = /** @class */ (function (_super) {
    __extends(GetVariantHlsAudioPlaylistRequest, _super);
    function GetVariantHlsAudioPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVariantHlsAudioPlaylistPathParams)
    ], GetVariantHlsAudioPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVariantHlsAudioPlaylistQueryParams)
    ], GetVariantHlsAudioPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVariantHlsAudioPlaylistSecurity)
    ], GetVariantHlsAudioPlaylistRequest.prototype, "security", void 0);
    return GetVariantHlsAudioPlaylistRequest;
}(SpeakeasyBase));
export { GetVariantHlsAudioPlaylistRequest };
var GetVariantHlsAudioPlaylistResponse = /** @class */ (function (_super) {
    __extends(GetVariantHlsAudioPlaylistResponse, _super);
    function GetVariantHlsAudioPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVariantHlsAudioPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetVariantHlsAudioPlaylistResponse.prototype, "getVariantHlsAudioPlaylist200ApplicationXMpegurlBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVariantHlsAudioPlaylistResponse.prototype, "statusCode", void 0);
    return GetVariantHlsAudioPlaylistResponse;
}(SpeakeasyBase));
export { GetVariantHlsAudioPlaylistResponse };
