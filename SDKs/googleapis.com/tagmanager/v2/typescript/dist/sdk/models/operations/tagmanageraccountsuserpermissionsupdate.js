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
var TagmanagerAccountsUserPermissionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsUpdatePathParams, _super);
    function TagmanagerAccountsUserPermissionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdatePathParams.prototype, "path", void 0);
    return TagmanagerAccountsUserPermissionsUpdatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsUpdatePathParams };
var TagmanagerAccountsUserPermissionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsUpdateQueryParams, _super);
    function TagmanagerAccountsUserPermissionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fingerprint" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsUserPermissionsUpdateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsUpdateQueryParams };
var TagmanagerAccountsUserPermissionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsUpdateSecurity, _super);
    function TagmanagerAccountsUserPermissionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsUserPermissionsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsUserPermissionsUpdateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsUserPermissionsUpdateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsUpdateSecurity };
var TagmanagerAccountsUserPermissionsUpdateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsUpdateRequest, _super);
    function TagmanagerAccountsUserPermissionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsUpdatePathParams)
    ], TagmanagerAccountsUserPermissionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsUpdateQueryParams)
    ], TagmanagerAccountsUserPermissionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserPermission)
    ], TagmanagerAccountsUserPermissionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsUserPermissionsUpdateSecurity)
    ], TagmanagerAccountsUserPermissionsUpdateRequest.prototype, "security", void 0);
    return TagmanagerAccountsUserPermissionsUpdateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsUpdateRequest };
var TagmanagerAccountsUserPermissionsUpdateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsUserPermissionsUpdateResponse, _super);
    function TagmanagerAccountsUserPermissionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsUserPermissionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsUserPermissionsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserPermission)
    ], TagmanagerAccountsUserPermissionsUpdateResponse.prototype, "userPermission", void 0);
    return TagmanagerAccountsUserPermissionsUpdateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsUserPermissionsUpdateResponse };
