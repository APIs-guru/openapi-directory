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
var GmailUsersWatchPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersWatchPathParams, _super);
    function GmailUsersWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersWatchPathParams.prototype, "userId", void 0);
    return GmailUsersWatchPathParams;
}(SpeakeasyBase));
export { GmailUsersWatchPathParams };
var GmailUsersWatchQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersWatchQueryParams, _super);
    function GmailUsersWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersWatchQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersWatchQueryParams;
}(SpeakeasyBase));
export { GmailUsersWatchQueryParams };
var GmailUsersWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersWatchSecurityOption1, _super);
    function GmailUsersWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersWatchSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersWatchSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersWatchSecurityOption1 };
var GmailUsersWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersWatchSecurityOption2, _super);
    function GmailUsersWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersWatchSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersWatchSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersWatchSecurityOption2 };
var GmailUsersWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersWatchSecurityOption3, _super);
    function GmailUsersWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersWatchSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersWatchSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersWatchSecurityOption3 };
var GmailUsersWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersWatchSecurityOption4, _super);
    function GmailUsersWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersWatchSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersWatchSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersWatchSecurityOption4 };
var GmailUsersWatchSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersWatchSecurity, _super);
    function GmailUsersWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersWatchSecurityOption1)
    ], GmailUsersWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersWatchSecurityOption2)
    ], GmailUsersWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersWatchSecurityOption3)
    ], GmailUsersWatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersWatchSecurityOption4)
    ], GmailUsersWatchSecurity.prototype, "option4", void 0);
    return GmailUsersWatchSecurity;
}(SpeakeasyBase));
export { GmailUsersWatchSecurity };
var GmailUsersWatchRequest = /** @class */ (function (_super) {
    __extends(GmailUsersWatchRequest, _super);
    function GmailUsersWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersWatchPathParams)
    ], GmailUsersWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersWatchQueryParams)
    ], GmailUsersWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WatchRequest)
    ], GmailUsersWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersWatchSecurity)
    ], GmailUsersWatchRequest.prototype, "security", void 0);
    return GmailUsersWatchRequest;
}(SpeakeasyBase));
export { GmailUsersWatchRequest };
var GmailUsersWatchResponse = /** @class */ (function (_super) {
    __extends(GmailUsersWatchResponse, _super);
    function GmailUsersWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersWatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WatchResponse)
    ], GmailUsersWatchResponse.prototype, "watchResponse", void 0);
    return GmailUsersWatchResponse;
}(SpeakeasyBase));
export { GmailUsersWatchResponse };
