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
var TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams };
var TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams };
var TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity };
var TagmanagerAccountsContainersWorkspacesGtagConfigListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListRequest };
var TagmanagerAccountsContainersWorkspacesGtagConfigListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGtagConfigResponse)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListResponse.prototype, "listGtagConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigListResponse };
