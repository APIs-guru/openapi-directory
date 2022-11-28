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
var TagmanagerAccountsPermissionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsPermissionsUpdatePathParams, _super);
    function TagmanagerAccountsPermissionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdatePathParams.prototype, "permissionId", void 0);
    return TagmanagerAccountsPermissionsUpdatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsPermissionsUpdatePathParams };
var TagmanagerAccountsPermissionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsPermissionsUpdateQueryParams, _super);
    function TagmanagerAccountsPermissionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsPermissionsUpdateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsPermissionsUpdateQueryParams };
var TagmanagerAccountsPermissionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsPermissionsUpdateSecurity, _super);
    function TagmanagerAccountsPermissionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsPermissionsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsPermissionsUpdateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsPermissionsUpdateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsPermissionsUpdateSecurity };
var TagmanagerAccountsPermissionsUpdateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsPermissionsUpdateRequest, _super);
    function TagmanagerAccountsPermissionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsPermissionsUpdatePathParams)
    ], TagmanagerAccountsPermissionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsPermissionsUpdateQueryParams)
    ], TagmanagerAccountsPermissionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserAccess)
    ], TagmanagerAccountsPermissionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsPermissionsUpdateSecurity)
    ], TagmanagerAccountsPermissionsUpdateRequest.prototype, "security", void 0);
    return TagmanagerAccountsPermissionsUpdateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsPermissionsUpdateRequest };
var TagmanagerAccountsPermissionsUpdateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsPermissionsUpdateResponse, _super);
    function TagmanagerAccountsPermissionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsPermissionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsPermissionsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserAccess)
    ], TagmanagerAccountsPermissionsUpdateResponse.prototype, "userAccess", void 0);
    return TagmanagerAccountsPermissionsUpdateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsPermissionsUpdateResponse };
