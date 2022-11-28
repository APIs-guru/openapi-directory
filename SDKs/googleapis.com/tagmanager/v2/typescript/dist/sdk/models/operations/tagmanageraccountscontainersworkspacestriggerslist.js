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
var TagmanagerAccountsContainersWorkspacesTriggersListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListPathParams };
var TagmanagerAccountsContainersWorkspacesTriggersListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListQueryParams };
var TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesTriggersListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesTriggersListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListSecurity };
var TagmanagerAccountsContainersWorkspacesTriggersListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersListPathParams)
    ], TagmanagerAccountsContainersWorkspacesTriggersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesTriggersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersListSecurity)
    ], TagmanagerAccountsContainersWorkspacesTriggersListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListRequest };
var TagmanagerAccountsContainersWorkspacesTriggersListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTriggersResponse)
    ], TagmanagerAccountsContainersWorkspacesTriggersListResponse.prototype, "listTriggersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesTriggersListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersListResponse };
