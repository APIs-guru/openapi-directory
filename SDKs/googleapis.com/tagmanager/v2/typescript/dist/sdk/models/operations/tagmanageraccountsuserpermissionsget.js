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
var TagmanagerAccountsUserPermissionsGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetPathParams, _super);
    function TagmanagerAccountsUserPermissionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetPathParams.prototype, "path", void 0);
    return TagmanagerAccountsUserPermissionsGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetPathParams };
var TagmanagerAccountsUserPermissionsGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetQueryParams, _super);
    function TagmanagerAccountsUserPermissionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containerVersionId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "containerVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsUserPermissionsGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetQueryParams };
var TagmanagerAccountsUserPermissionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetSecurityOption1, _super);
    function TagmanagerAccountsUserPermissionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsUserPermissionsGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetSecurityOption1 };
var TagmanagerAccountsUserPermissionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetSecurityOption2, _super);
    function TagmanagerAccountsUserPermissionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsUserPermissionsGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetSecurityOption2 };
var TagmanagerAccountsUserPermissionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetSecurityOption3, _super);
    function TagmanagerAccountsUserPermissionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsUserPermissionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return TagmanagerAccountsUserPermissionsGetSecurityOption3;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetSecurityOption3 };
var TagmanagerAccountsUserPermissionsGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetSecurity, _super);
    function TagmanagerAccountsUserPermissionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetSecurityOption1)
    ], TagmanagerAccountsUserPermissionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetSecurityOption2)
    ], TagmanagerAccountsUserPermissionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetSecurityOption3)
    ], TagmanagerAccountsUserPermissionsGetSecurity.prototype, "option3", void 0);
    return TagmanagerAccountsUserPermissionsGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetSecurity };
var TagmanagerAccountsUserPermissionsGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetRequest, _super);
    function TagmanagerAccountsUserPermissionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetPathParams)
    ], TagmanagerAccountsUserPermissionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetQueryParams)
    ], TagmanagerAccountsUserPermissionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsGetSecurity)
    ], TagmanagerAccountsUserPermissionsGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsUserPermissionsGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetRequest };
var TagmanagerAccountsUserPermissionsGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsGetResponse, _super);
    function TagmanagerAccountsUserPermissionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsUserPermissionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserPermission)
    ], TagmanagerAccountsUserPermissionsGetResponse.prototype, "userPermission", void 0);
    return TagmanagerAccountsUserPermissionsGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsGetResponse };
