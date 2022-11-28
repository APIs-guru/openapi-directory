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
var YoutubeLiveStreamsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertQueryParams, _super);
    function YoutubeLiveStreamsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveStreamsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertQueryParams };
var YoutubeLiveStreamsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertSecurityOption1, _super);
    function YoutubeLiveStreamsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveStreamsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveStreamsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveStreamsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertSecurityOption1 };
var YoutubeLiveStreamsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertSecurityOption2, _super);
    function YoutubeLiveStreamsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveStreamsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveStreamsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveStreamsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertSecurityOption2 };
var YoutubeLiveStreamsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertSecurity, _super);
    function YoutubeLiveStreamsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveStreamsInsertSecurityOption1)
    ], YoutubeLiveStreamsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveStreamsInsertSecurityOption2)
    ], YoutubeLiveStreamsInsertSecurity.prototype, "option2", void 0);
    return YoutubeLiveStreamsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertSecurity };
var YoutubeLiveStreamsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertRequest, _super);
    function YoutubeLiveStreamsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveStreamsInsertQueryParams)
    ], YoutubeLiveStreamsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveStream)
    ], YoutubeLiveStreamsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveStreamsInsertSecurity)
    ], YoutubeLiveStreamsInsertRequest.prototype, "security", void 0);
    return YoutubeLiveStreamsInsertRequest;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertRequest };
var YoutubeLiveStreamsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveStreamsInsertResponse, _super);
    function YoutubeLiveStreamsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveStreamsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveStream)
    ], YoutubeLiveStreamsInsertResponse.prototype, "liveStream", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveStreamsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeLiveStreamsInsertResponse;
}(SpeakeasyBase));
export { YoutubeLiveStreamsInsertResponse };
