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
var OnPlaybackStoppedPathParams = /** @class */ (function (_super) {
    __extends(OnPlaybackStoppedPathParams, _super);
    function OnPlaybackStoppedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedPathParams.prototype, "itemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedPathParams.prototype, "userId", void 0);
    return OnPlaybackStoppedPathParams;
}(SpeakeasyBase));
export { OnPlaybackStoppedPathParams };
var OnPlaybackStoppedQueryParams = /** @class */ (function (_super) {
    __extends(OnPlaybackStoppedQueryParams, _super);
    function OnPlaybackStoppedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedQueryParams.prototype, "liveStreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedQueryParams.prototype, "mediaSourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextMediaType" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedQueryParams.prototype, "nextMediaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], OnPlaybackStoppedQueryParams.prototype, "playSessionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=positionTicks" }),
        __metadata("design:type", Number)
    ], OnPlaybackStoppedQueryParams.prototype, "positionTicks", void 0);
    return OnPlaybackStoppedQueryParams;
}(SpeakeasyBase));
export { OnPlaybackStoppedQueryParams };
var OnPlaybackStoppedSecurity = /** @class */ (function (_super) {
    __extends(OnPlaybackStoppedSecurity, _super);
    function OnPlaybackStoppedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], OnPlaybackStoppedSecurity.prototype, "customAuthentication", void 0);
    return OnPlaybackStoppedSecurity;
}(SpeakeasyBase));
export { OnPlaybackStoppedSecurity };
var OnPlaybackStoppedRequest = /** @class */ (function (_super) {
    __extends(OnPlaybackStoppedRequest, _super);
    function OnPlaybackStoppedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStoppedPathParams)
    ], OnPlaybackStoppedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStoppedQueryParams)
    ], OnPlaybackStoppedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OnPlaybackStoppedSecurity)
    ], OnPlaybackStoppedRequest.prototype, "security", void 0);
    return OnPlaybackStoppedRequest;
}(SpeakeasyBase));
export { OnPlaybackStoppedRequest };
var OnPlaybackStoppedResponse = /** @class */ (function (_super) {
    __extends(OnPlaybackStoppedResponse, _super);
    function OnPlaybackStoppedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OnPlaybackStoppedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OnPlaybackStoppedResponse.prototype, "statusCode", void 0);
    return OnPlaybackStoppedResponse;
}(SpeakeasyBase));
export { OnPlaybackStoppedResponse };
