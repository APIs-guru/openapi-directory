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
var YoutubeLiveChatMessagesInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertQueryParams, _super);
    function YoutubeLiveChatMessagesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatMessagesInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertQueryParams };
var YoutubeLiveChatMessagesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertSecurityOption1, _super);
    function YoutubeLiveChatMessagesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertSecurityOption1 };
var YoutubeLiveChatMessagesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertSecurityOption2, _super);
    function YoutubeLiveChatMessagesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertSecurityOption2 };
var YoutubeLiveChatMessagesInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertSecurity, _super);
    function YoutubeLiveChatMessagesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesInsertSecurityOption1)
    ], YoutubeLiveChatMessagesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesInsertSecurityOption2)
    ], YoutubeLiveChatMessagesInsertSecurity.prototype, "option2", void 0);
    return YoutubeLiveChatMessagesInsertSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertSecurity };
var YoutubeLiveChatMessagesInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertRequest, _super);
    function YoutubeLiveChatMessagesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesInsertQueryParams)
    ], YoutubeLiveChatMessagesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LiveChatMessage)
    ], YoutubeLiveChatMessagesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesInsertSecurity)
    ], YoutubeLiveChatMessagesInsertRequest.prototype, "security", void 0);
    return YoutubeLiveChatMessagesInsertRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertRequest };
var YoutubeLiveChatMessagesInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesInsertResponse, _super);
    function YoutubeLiveChatMessagesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LiveChatMessage)
    ], YoutubeLiveChatMessagesInsertResponse.prototype, "liveChatMessage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatMessagesInsertResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatMessagesInsertResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesInsertResponse };
