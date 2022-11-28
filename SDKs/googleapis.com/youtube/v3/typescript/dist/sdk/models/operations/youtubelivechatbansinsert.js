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
var YoutubeLiveChatBansInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertQueryParams, _super);
    function YoutubeLiveChatBansInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatBansInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertQueryParams };
var YoutubeLiveChatBansInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertSecurityOption1, _super);
    function YoutubeLiveChatBansInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatBansInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatBansInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatBansInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertSecurityOption1 };
var YoutubeLiveChatBansInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertSecurityOption2, _super);
    function YoutubeLiveChatBansInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatBansInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatBansInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatBansInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertSecurityOption2 };
var YoutubeLiveChatBansInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertSecurity, _super);
    function YoutubeLiveChatBansInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatBansInsertSecurityOption1)
    ], YoutubeLiveChatBansInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatBansInsertSecurityOption2)
    ], YoutubeLiveChatBansInsertSecurity.prototype, "option2", void 0);
    return YoutubeLiveChatBansInsertSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertSecurity };
var YoutubeLiveChatBansInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertRequest, _super);
    function YoutubeLiveChatBansInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatBansInsertQueryParams)
    ], YoutubeLiveChatBansInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveChatBan)
    ], YoutubeLiveChatBansInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatBansInsertSecurity)
    ], YoutubeLiveChatBansInsertRequest.prototype, "security", void 0);
    return YoutubeLiveChatBansInsertRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertRequest };
var YoutubeLiveChatBansInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansInsertResponse, _super);
    function YoutubeLiveChatBansInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveChatBan)
    ], YoutubeLiveChatBansInsertResponse.prototype, "liveChatBan", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatBansInsertResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatBansInsertResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatBansInsertResponse };
