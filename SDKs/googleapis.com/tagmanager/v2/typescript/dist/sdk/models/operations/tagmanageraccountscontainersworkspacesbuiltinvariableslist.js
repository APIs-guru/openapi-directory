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
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesListPathParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesBuiltInVariablesListSecurity)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListRequest };
var TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListEnabledBuiltInVariablesResponse)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse.prototype, "listEnabledBuiltInVariablesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesBuiltInVariablesListResponse };
