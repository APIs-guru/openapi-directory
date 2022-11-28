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
var OpenLiveStreamQueryParams = /** @class */ (function (_super) {
    __extends(OpenLiveStreamQueryParams, _super);
    function OpenLiveStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" }),
        __metadata("design:type", Boolean)
    ], OpenLiveStreamQueryParams.prototype, "enableDirectPlay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" }),
        __metadata("design:type", Boolean)
    ], OpenLiveStreamQueryParams.prototype, "enableDirectStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamQueryParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamQueryParams.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamQueryParams.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=openToken" }),
        __metadata("design:type", String)
    ], OpenLiveStreamQueryParams.prototype, "openToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamQueryParams.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], OpenLiveStreamQueryParams.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], OpenLiveStreamQueryParams.prototype, "userId", void 0);
    return OpenLiveStreamQueryParams;
}(SpeakeasyBase));
export { OpenLiveStreamQueryParams };
var OpenLiveStreamRequests = /** @class */ (function (_super) {
    __extends(OpenLiveStreamRequests, _super);
    function OpenLiveStreamRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.OpenLiveStreamDto)
    ], OpenLiveStreamRequests.prototype, "openLiveStreamDto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OpenLiveStreamDto)
    ], OpenLiveStreamRequests.prototype, "openLiveStreamDto1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.OpenLiveStreamDto)
    ], OpenLiveStreamRequests.prototype, "openLiveStreamDto2", void 0);
    return OpenLiveStreamRequests;
}(SpeakeasyBase));
export { OpenLiveStreamRequests };
var OpenLiveStreamSecurity = /** @class */ (function (_super) {
    __extends(OpenLiveStreamSecurity, _super);
    function OpenLiveStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], OpenLiveStreamSecurity.prototype, "customAuthentication", void 0);
    return OpenLiveStreamSecurity;
}(SpeakeasyBase));
export { OpenLiveStreamSecurity };
var OpenLiveStreamRequest = /** @class */ (function (_super) {
    __extends(OpenLiveStreamRequest, _super);
    function OpenLiveStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpenLiveStreamQueryParams)
    ], OpenLiveStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpenLiveStreamRequests)
    ], OpenLiveStreamRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OpenLiveStreamSecurity)
    ], OpenLiveStreamRequest.prototype, "security", void 0);
    return OpenLiveStreamRequest;
}(SpeakeasyBase));
export { OpenLiveStreamRequest };
var OpenLiveStreamResponse = /** @class */ (function (_super) {
    __extends(OpenLiveStreamResponse, _super);
    function OpenLiveStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OpenLiveStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStreamResponse)
    ], OpenLiveStreamResponse.prototype, "liveStreamResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OpenLiveStreamResponse.prototype, "statusCode", void 0);
    return OpenLiveStreamResponse;
}(SpeakeasyBase));
export { OpenLiveStreamResponse };
