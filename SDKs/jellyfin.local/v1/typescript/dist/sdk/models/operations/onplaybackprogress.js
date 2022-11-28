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
var OnPlaybackProgressPathParams = /** @class */ (function (_super) {
    __extends(OnPlaybackProgressPathParams, _super);
    function OnPlaybackProgressPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressPathParams.prototype, "userId", void 0);
    return OnPlaybackProgressPathParams;
}(SpeakeasyBase));
export { OnPlaybackProgressPathParams };
var OnPlaybackProgressQueryParams = /** @class */ (function (_super) {
    __extends(OnPlaybackProgressQueryParams, _super);
    function OnPlaybackProgressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], OnPlaybackProgressQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMuted" }),
        __metadata("design:type", Boolean)
    ], OnPlaybackProgressQueryParams.prototype, "isMuted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPaused" }),
        __metadata("design:type", Boolean)
    ], OnPlaybackProgressQueryParams.prototype, "isPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playMethod" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressQueryParams.prototype, "playMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=positionTicks" }),
        __metadata("design:type", Number)
    ], OnPlaybackProgressQueryParams.prototype, "positionTicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repeatMode" }),
        __metadata("design:type", String)
    ], OnPlaybackProgressQueryParams.prototype, "repeatMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], OnPlaybackProgressQueryParams.prototype, "subtitleStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeLevel" }),
        __metadata("design:type", Number)
    ], OnPlaybackProgressQueryParams.prototype, "volumeLevel", void 0);
    return OnPlaybackProgressQueryParams;
}(SpeakeasyBase));
export { OnPlaybackProgressQueryParams };
var OnPlaybackProgressSecurity = /** @class */ (function (_super) {
    __extends(OnPlaybackProgressSecurity, _super);
    function OnPlaybackProgressSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], OnPlaybackProgressSecurity.prototype, "customAuthentication", void 0);
    return OnPlaybackProgressSecurity;
}(SpeakeasyBase));
export { OnPlaybackProgressSecurity };
var OnPlaybackProgressRequest = /** @class */ (function (_super) {
    __extends(OnPlaybackProgressRequest, _super);
    function OnPlaybackProgressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackProgressPathParams)
    ], OnPlaybackProgressRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackProgressQueryParams)
    ], OnPlaybackProgressRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackProgressSecurity)
    ], OnPlaybackProgressRequest.prototype, "security", void 0);
    return OnPlaybackProgressRequest;
}(SpeakeasyBase));
export { OnPlaybackProgressRequest };
var OnPlaybackProgressResponse = /** @class */ (function (_super) {
    __extends(OnPlaybackProgressResponse, _super);
    function OnPlaybackProgressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OnPlaybackProgressResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OnPlaybackProgressResponse.prototype, "statusCode", void 0);
    return OnPlaybackProgressResponse;
}(SpeakeasyBase));
export { OnPlaybackProgressResponse };
