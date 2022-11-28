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
var GetMasterHlsAudioPlaylistPathParams = /** @class */ (function (_super) {
    __extends(GetMasterHlsAudioPlaylistPathParams, _super);
    function GetMasterHlsAudioPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistPathParams.prototype, "itemId", void 0);
    return GetMasterHlsAudioPlaylistPathParams;
}(SpeakeasyBase));
export { GetMasterHlsAudioPlaylistPathParams };
var GetMasterHlsAudioPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(GetMasterHlsAudioPlaylistQueryParams, _super);
    function GetMasterHlsAudioPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "allowAudioStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "allowVideoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "audioBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioChannels" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "audioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioCodec" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "audioCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioSampleRate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "audioSampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "breakOnNonKeyFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=context" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "copyTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cpuCoreLimit" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "cpuCoreLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deInterlace" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "deInterlace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceProfileId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "deviceProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableAdaptiveBitrateStreaming" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "enableAdaptiveBitrateStreaming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableAutoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "enableAutoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableMpegtsM2TsMode" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "enableMpegtsM2TsMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=framerate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "framerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxAudioBitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFramerate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxFramerate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxRefFrames" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxRefFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxVideoBitDepth" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "maxVideoBitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minSegments" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "minSegments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=params" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireAvc" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "requireAvc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireNonAnamorphic" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "requireNonAnamorphic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentContainer" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "segmentContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentLength" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "segmentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=static" }),
        __metadata("design:type", Boolean)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "static", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamOptions" }),
        __metadata("design:type", Map)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "streamOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleCodec" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "subtitleCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleMethod" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "subtitleMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodeReasons" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "transcodeReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingMaxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "transcodingMaxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoBitRate" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "videoBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCodec" }),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "videoCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoStreamIndex" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "videoStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistQueryParams.prototype, "width", void 0);
    return GetMasterHlsAudioPlaylistQueryParams;
}(SpeakeasyBase));
export { GetMasterHlsAudioPlaylistQueryParams };
var GetMasterHlsAudioPlaylistSecurity = /** @class */ (function (_super) {
    __extends(GetMasterHlsAudioPlaylistSecurity, _super);
    function GetMasterHlsAudioPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetMasterHlsAudioPlaylistSecurity.prototype, "customAuthentication", void 0);
    return GetMasterHlsAudioPlaylistSecurity;
}(SpeakeasyBase));
export { GetMasterHlsAudioPlaylistSecurity };
var GetMasterHlsAudioPlaylistRequest = /** @class */ (function (_super) {
    __extends(GetMasterHlsAudioPlaylistRequest, _super);
    function GetMasterHlsAudioPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMasterHlsAudioPlaylistPathParams)
    ], GetMasterHlsAudioPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMasterHlsAudioPlaylistQueryParams)
    ], GetMasterHlsAudioPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMasterHlsAudioPlaylistSecurity)
    ], GetMasterHlsAudioPlaylistRequest.prototype, "security", void 0);
    return GetMasterHlsAudioPlaylistRequest;
}(SpeakeasyBase));
export { GetMasterHlsAudioPlaylistRequest };
var GetMasterHlsAudioPlaylistResponse = /** @class */ (function (_super) {
    __extends(GetMasterHlsAudioPlaylistResponse, _super);
    function GetMasterHlsAudioPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMasterHlsAudioPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMasterHlsAudioPlaylistResponse.prototype, "getMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMasterHlsAudioPlaylistResponse.prototype, "statusCode", void 0);
    return GetMasterHlsAudioPlaylistResponse;
}(SpeakeasyBase));
export { GetMasterHlsAudioPlaylistResponse };
