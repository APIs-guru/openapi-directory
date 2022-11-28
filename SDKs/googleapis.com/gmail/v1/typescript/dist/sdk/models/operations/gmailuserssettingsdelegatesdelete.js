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
var GmailUsersSettingsDelegatesDeletePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesDeletePathParams, _super);
    function GmailUsersSettingsDelegatesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delegateEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeletePathParams.prototype, "delegateEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeletePathParams.prototype, "userId", void 0);
    return GmailUsersSettingsDelegatesDeletePathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesDeletePathParams };
var GmailUsersSettingsDelegatesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesDeleteQueryParams, _super);
    function GmailUsersSettingsDelegatesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsDelegatesDeleteQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesDeleteQueryParams };
var GmailUsersSettingsDelegatesDeleteSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesDeleteSecurity, _super);
    function GmailUsersSettingsDelegatesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesDeleteSecurity.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesDeleteSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesDeleteSecurity };
var GmailUsersSettingsDelegatesDeleteRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesDeleteRequest, _super);
    function GmailUsersSettingsDelegatesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesDeletePathParams)
    ], GmailUsersSettingsDelegatesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesDeleteQueryParams)
    ], GmailUsersSettingsDelegatesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesDeleteSecurity)
    ], GmailUsersSettingsDelegatesDeleteRequest.prototype, "security", void 0);
    return GmailUsersSettingsDelegatesDeleteRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesDeleteRequest };
var GmailUsersSettingsDelegatesDeleteResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesDeleteResponse, _super);
    function GmailUsersSettingsDelegatesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsDelegatesDeleteResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsDelegatesDeleteResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesDeleteResponse };
