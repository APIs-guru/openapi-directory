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
var GetPlaybackInfoPathParams = /** @class */ (function (_super) {
    __extends(GetPlaybackInfoPathParams, _super);
    function GetPlaybackInfoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetPlaybackInfoPathParams.prototype, "itemId", void 0);
    return GetPlaybackInfoPathParams;
}(SpeakeasyBase));
export { GetPlaybackInfoPathParams };
var GetPlaybackInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetPlaybackInfoQueryParams, _super);
    function GetPlaybackInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetPlaybackInfoQueryParams.prototype, "userId", void 0);
    return GetPlaybackInfoQueryParams;
}(SpeakeasyBase));
export { GetPlaybackInfoQueryParams };
var GetPlaybackInfoSecurity = /** @class */ (function (_super) {
    __extends(GetPlaybackInfoSecurity, _super);
    function GetPlaybackInfoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPlaybackInfoSecurity.prototype, "customAuthentication", void 0);
    return GetPlaybackInfoSecurity;
}(SpeakeasyBase));
export { GetPlaybackInfoSecurity };
var GetPlaybackInfoRequest = /** @class */ (function (_super) {
    __extends(GetPlaybackInfoRequest, _super);
    function GetPlaybackInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaybackInfoPathParams)
    ], GetPlaybackInfoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaybackInfoQueryParams)
    ], GetPlaybackInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPlaybackInfoSecurity)
    ], GetPlaybackInfoRequest.prototype, "security", void 0);
    return GetPlaybackInfoRequest;
}(SpeakeasyBase));
export { GetPlaybackInfoRequest };
var GetPlaybackInfoResponse = /** @class */ (function (_super) {
    __extends(GetPlaybackInfoResponse, _super);
    function GetPlaybackInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPlaybackInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlaybackInfoResponse)
    ], GetPlaybackInfoResponse.prototype, "playbackInfoResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPlaybackInfoResponse.prototype, "statusCode", void 0);
    return GetPlaybackInfoResponse;
}(SpeakeasyBase));
export { GetPlaybackInfoResponse };
