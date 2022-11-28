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
var YoutubeLiveChatModeratorsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertQueryParams, _super);
    function YoutubeLiveChatModeratorsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatModeratorsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertQueryParams };
var YoutubeLiveChatModeratorsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertSecurityOption1, _super);
    function YoutubeLiveChatModeratorsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatModeratorsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatModeratorsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatModeratorsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertSecurityOption1 };
var YoutubeLiveChatModeratorsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertSecurityOption2, _super);
    function YoutubeLiveChatModeratorsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatModeratorsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatModeratorsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatModeratorsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertSecurityOption2 };
var YoutubeLiveChatModeratorsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertSecurity, _super);
    function YoutubeLiveChatModeratorsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatModeratorsInsertSecurityOption1)
    ], YoutubeLiveChatModeratorsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatModeratorsInsertSecurityOption2)
    ], YoutubeLiveChatModeratorsInsertSecurity.prototype, "option2", void 0);
    return YoutubeLiveChatModeratorsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertSecurity };
var YoutubeLiveChatModeratorsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertRequest, _super);
    function YoutubeLiveChatModeratorsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatModeratorsInsertQueryParams)
    ], YoutubeLiveChatModeratorsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveChatModerator)
    ], YoutubeLiveChatModeratorsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatModeratorsInsertSecurity)
    ], YoutubeLiveChatModeratorsInsertRequest.prototype, "security", void 0);
    return YoutubeLiveChatModeratorsInsertRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertRequest };
var YoutubeLiveChatModeratorsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatModeratorsInsertResponse, _super);
    function YoutubeLiveChatModeratorsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatModeratorsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveChatModerator)
    ], YoutubeLiveChatModeratorsInsertResponse.prototype, "liveChatModerator", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatModeratorsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatModeratorsInsertResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatModeratorsInsertResponse };
