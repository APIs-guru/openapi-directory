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
var OnPlaybackStartPathParams = /** @class */ (function (_super) {
    __extends(OnPlaybackStartPathParams, _super);
    function OnPlaybackStartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], OnPlaybackStartPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], OnPlaybackStartPathParams.prototype, "userId", void 0);
    return OnPlaybackStartPathParams;
}(SpeakeasyBase));
export { OnPlaybackStartPathParams };
var OnPlaybackStartQueryParams = /** @class */ (function (_super) {
    __extends(OnPlaybackStartQueryParams, _super);
    function OnPlaybackStartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" }),
        __metadata("design:type", Number)
    ], OnPlaybackStartQueryParams.prototype, "audioStreamIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canSeek" }),
        __metadata("design:type", Boolean)
    ], OnPlaybackStartQueryParams.prototype, "canSeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], OnPlaybackStartQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], OnPlaybackStartQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playMethod" }),
        __metadata("design:type", String)
    ], OnPlaybackStartQueryParams.prototype, "playMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], OnPlaybackStartQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" }),
        __metadata("design:type", Number)
    ], OnPlaybackStartQueryParams.prototype, "subtitleStreamIndex", void 0);
    return OnPlaybackStartQueryParams;
}(SpeakeasyBase));
export { OnPlaybackStartQueryParams };
var OnPlaybackStartSecurity = /** @class */ (function (_super) {
    __extends(OnPlaybackStartSecurity, _super);
    function OnPlaybackStartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], OnPlaybackStartSecurity.prototype, "customAuthentication", void 0);
    return OnPlaybackStartSecurity;
}(SpeakeasyBase));
export { OnPlaybackStartSecurity };
var OnPlaybackStartRequest = /** @class */ (function (_super) {
    __extends(OnPlaybackStartRequest, _super);
    function OnPlaybackStartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStartPathParams)
    ], OnPlaybackStartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStartQueryParams)
    ], OnPlaybackStartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStartSecurity)
    ], OnPlaybackStartRequest.prototype, "security", void 0);
    return OnPlaybackStartRequest;
}(SpeakeasyBase));
export { OnPlaybackStartRequest };
var OnPlaybackStartResponse = /** @class */ (function (_super) {
    __extends(OnPlaybackStartResponse, _super);
    function OnPlaybackStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OnPlaybackStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OnPlaybackStartResponse.prototype, "statusCode", void 0);
    return OnPlaybackStartResponse;
}(SpeakeasyBase));
export { OnPlaybackStartResponse };
