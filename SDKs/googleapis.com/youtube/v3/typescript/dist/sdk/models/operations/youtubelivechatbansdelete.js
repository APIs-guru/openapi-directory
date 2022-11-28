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
var YoutubeLiveChatBansDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteQueryParams, _super);
    function YoutubeLiveChatBansDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeLiveChatBansDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteQueryParams };
var YoutubeLiveChatBansDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteSecurityOption1, _super);
    function YoutubeLiveChatBansDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatBansDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatBansDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeLiveChatBansDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteSecurityOption1 };
var YoutubeLiveChatBansDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteSecurityOption2, _super);
    function YoutubeLiveChatBansDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeLiveChatBansDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeLiveChatBansDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeLiveChatBansDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteSecurityOption2 };
var YoutubeLiveChatBansDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteSecurity, _super);
    function YoutubeLiveChatBansDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatBansDeleteSecurityOption1)
    ], YoutubeLiveChatBansDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeLiveChatBansDeleteSecurityOption2)
    ], YoutubeLiveChatBansDeleteSecurity.prototype, "option2", void 0);
    return YoutubeLiveChatBansDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteSecurity };
var YoutubeLiveChatBansDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteRequest, _super);
    function YoutubeLiveChatBansDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatBansDeleteQueryParams)
    ], YoutubeLiveChatBansDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeLiveChatBansDeleteSecurity)
    ], YoutubeLiveChatBansDeleteRequest.prototype, "security", void 0);
    return YoutubeLiveChatBansDeleteRequest;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteRequest };
var YoutubeLiveChatBansDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeLiveChatBansDeleteResponse, _super);
    function YoutubeLiveChatBansDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeLiveChatBansDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeLiveChatBansDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeLiveChatBansDeleteResponse;
}(SpeakeasyBase));
export { YoutubeLiveChatBansDeleteResponse };
