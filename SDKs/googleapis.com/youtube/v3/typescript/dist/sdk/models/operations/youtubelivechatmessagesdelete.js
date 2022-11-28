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
var YoutubeLiveChatMessagesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteQueryParams, _super);
    function YoutubeLiveChatMessagesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatMessagesDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteQueryParams };
var YoutubeLiveChatMessagesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteSecurityOption1, _super);
    function YoutubeLiveChatMessagesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteSecurityOption1 };
var YoutubeLiveChatMessagesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteSecurityOption2, _super);
    function YoutubeLiveChatMessagesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatMessagesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatMessagesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatMessagesDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteSecurityOption2 };
var YoutubeLiveChatMessagesDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteSecurity, _super);
    function YoutubeLiveChatMessagesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesDeleteSecurityOption1)
    ], YoutubeLiveChatMessagesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatMessagesDeleteSecurityOption2)
    ], YoutubeLiveChatMessagesDeleteSecurity.prototype, "option2", void 0);
    return YoutubeLiveChatMessagesDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteSecurity };
var YoutubeLiveChatMessagesDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteRequest, _super);
    function YoutubeLiveChatMessagesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesDeleteQueryParams)
    ], YoutubeLiveChatMessagesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatMessagesDeleteSecurity)
    ], YoutubeLiveChatMessagesDeleteRequest.prototype, "security", void 0);
    return YoutubeLiveChatMessagesDeleteRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteRequest };
var YoutubeLiveChatMessagesDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatMessagesDeleteResponse, _super);
    function YoutubeLiveChatMessagesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatMessagesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatMessagesDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatMessagesDeleteResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatMessagesDeleteResponse };
