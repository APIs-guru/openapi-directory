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
var TagmanagerAccountsContainersWorkspacesTagsListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListPathParams };
var TagmanagerAccountsContainersWorkspacesTagsListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListQueryParams };
var TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesTagsListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesTagsListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListSecurity };
var TagmanagerAccountsContainersWorkspacesTagsListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTagsListPathParams)
    ], TagmanagerAccountsContainersWorkspacesTagsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTagsListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesTagsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTagsListSecurity)
    ], TagmanagerAccountsContainersWorkspacesTagsListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListRequest };
var TagmanagerAccountsContainersWorkspacesTagsListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTagsListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesTagsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTagsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTagsResponse)
    ], TagmanagerAccountsContainersWorkspacesTagsListResponse.prototype, "listTagsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesTagsListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesTagsListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTagsListResponse };
