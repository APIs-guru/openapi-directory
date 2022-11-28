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
var TagmanagerAccountsContainersWorkspacesVariablesListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListPathParams };
var TagmanagerAccountsContainersWorkspacesVariablesListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListQueryParams };
var TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesVariablesListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesVariablesListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListSecurity };
var TagmanagerAccountsContainersWorkspacesVariablesListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesListPathParams)
    ], TagmanagerAccountsContainersWorkspacesVariablesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesVariablesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesListSecurity)
    ], TagmanagerAccountsContainersWorkspacesVariablesListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListRequest };
var TagmanagerAccountsContainersWorkspacesVariablesListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVariablesResponse)
    ], TagmanagerAccountsContainersWorkspacesVariablesListResponse.prototype, "listVariablesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesVariablesListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesListResponse };
