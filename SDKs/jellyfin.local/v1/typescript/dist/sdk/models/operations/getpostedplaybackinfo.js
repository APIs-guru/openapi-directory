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
var GetPostedPlaybackInfoPathParams = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoPathParams, _super);
    function GetPostedPlaybackInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetPostedPlaybackInfoPathParams.prototype, "itemId", void 0);
    return GetPostedPlaybackInfoPathParams;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoPathParams };
var GetPostedPlaybackInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoQueryParams, _super);
    function GetPostedPlaybackInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "allowAudioStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "allowVideoStreamCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoOpenLiveStream" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "autoOpenLiveStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "enableDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "enableDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTranscoding" }),
        __metadata("design:type", Boolean)
    ], GetPostedPlaybackInfoQueryParams.prototype, "enableTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], GetPostedPlaybackInfoQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoQueryParams.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoQueryParams.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetPostedPlaybackInfoQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" }),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoQueryParams.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoQueryParams.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetPostedPlaybackInfoQueryParams.prototype, "userId", void 0);
    return GetPostedPlaybackInfoQueryParams;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoQueryParams };
var GetPostedPlaybackInfoRequests = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoRequests, _super);
    function GetPostedPlaybackInfoRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PlaybackInfoDto)
    ], GetPostedPlaybackInfoRequests.prototype, "playbackInfoDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PlaybackInfoDto)
    ], GetPostedPlaybackInfoRequests.prototype, "playbackInfoDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PlaybackInfoDto)
    ], GetPostedPlaybackInfoRequests.prototype, "playbackInfoDto2", void 0);
    return GetPostedPlaybackInfoRequests;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoRequests };
var GetPostedPlaybackInfoSecurity = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoSecurity, _super);
    function GetPostedPlaybackInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPostedPlaybackInfoSecurity.prototype, "customAuthentication", void 0);
    return GetPostedPlaybackInfoSecurity;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoSecurity };
var GetPostedPlaybackInfoRequest = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoRequest, _super);
    function GetPostedPlaybackInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostedPlaybackInfoPathParams)
    ], GetPostedPlaybackInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostedPlaybackInfoQueryParams)
    ], GetPostedPlaybackInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostedPlaybackInfoRequests)
    ], GetPostedPlaybackInfoRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPostedPlaybackInfoSecurity)
    ], GetPostedPlaybackInfoRequest.prototype, "security", void 0);
    return GetPostedPlaybackInfoRequest;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoRequest };
var GetPostedPlaybackInfoResponse = /** @class */ (function (_super) {
    __extends(GetPostedPlaybackInfoResponse, _super);
    function GetPostedPlaybackInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPostedPlaybackInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaybackInfoResponse)
    ], GetPostedPlaybackInfoResponse.prototype, "playbackInfoResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPostedPlaybackInfoResponse.prototype, "statusCode", void 0);
    return GetPostedPlaybackInfoResponse;
}(SpeakeasyBase));
export { GetPostedPlaybackInfoResponse };
