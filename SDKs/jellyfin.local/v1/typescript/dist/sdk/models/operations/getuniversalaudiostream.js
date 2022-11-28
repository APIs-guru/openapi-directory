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
var GetUniversalAudioStreamPathParams = /** @class */ (function (_super) {
    __extends(GetUniversalAudioStreamPathParams, _super);
    function GetUniversalAudioStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamPathParams.prototype, "itemId", void 0);
    return GetUniversalAudioStreamPathParams;
}(SpeakeasyBase));
export { GetUniversalAudioStreamPathParams };
var GetUniversalAudioStreamQueryParams = /** @class */ (function (_super) {
    __extends(GetUniversalAudioStreamQueryParams, _super);
    function GetUniversalAudioStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "audioBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioCodec" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "audioCodec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" }),
        __metadata("design:type", Boolean)
    ], GetUniversalAudioStreamQueryParams.prototype, "breakOnNonKeyFrames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=container" }),
        __metadata("design:type", Array)
    ], GetUniversalAudioStreamQueryParams.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableRedirection" }),
        __metadata("design:type", Boolean)
    ], GetUniversalAudioStreamQueryParams.prototype, "enableRedirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableRemoteMedia" }),
        __metadata("design:type", Boolean)
    ], GetUniversalAudioStreamQueryParams.prototype, "enableRemoteMedia", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "maxAudioBitDepth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "maxAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioSampleRate" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "maxAudioSampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "maxStreamingBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "startTimeTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingAudioChannels" }),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamQueryParams.prototype, "transcodingAudioChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingContainer" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "transcodingContainer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingProtocol" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "transcodingProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamQueryParams.prototype, "userId", void 0);
    return GetUniversalAudioStreamQueryParams;
}(SpeakeasyBase));
export { GetUniversalAudioStreamQueryParams };
var GetUniversalAudioStreamSecurity = /** @class */ (function (_super) {
    __extends(GetUniversalAudioStreamSecurity, _super);
    function GetUniversalAudioStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetUniversalAudioStreamSecurity.prototype, "customAuthentication", void 0);
    return GetUniversalAudioStreamSecurity;
}(SpeakeasyBase));
export { GetUniversalAudioStreamSecurity };
var GetUniversalAudioStreamRequest = /** @class */ (function (_super) {
    __extends(GetUniversalAudioStreamRequest, _super);
    function GetUniversalAudioStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUniversalAudioStreamPathParams)
    ], GetUniversalAudioStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUniversalAudioStreamQueryParams)
    ], GetUniversalAudioStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUniversalAudioStreamSecurity)
    ], GetUniversalAudioStreamRequest.prototype, "security", void 0);
    return GetUniversalAudioStreamRequest;
}(SpeakeasyBase));
export { GetUniversalAudioStreamRequest };
var GetUniversalAudioStreamResponse = /** @class */ (function (_super) {
    __extends(GetUniversalAudioStreamResponse, _super);
    function GetUniversalAudioStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUniversalAudioStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUniversalAudioStreamResponse.prototype, "getUniversalAudioStream200AudioWildcardBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUniversalAudioStreamResponse.prototype, "statusCode", void 0);
    return GetUniversalAudioStreamResponse;
}(SpeakeasyBase));
export { GetUniversalAudioStreamResponse };
