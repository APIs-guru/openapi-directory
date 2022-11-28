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
var TagmanagerAccountsContainersWorkspacesClientsListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListPathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListPathParams };
var TagmanagerAccountsContainersWorkspacesClientsListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListQueryParams };
var TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesClientsListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesClientsListSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesClientsListSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesClientsListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListSecurity };
var TagmanagerAccountsContainersWorkspacesClientsListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListRequest, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesClientsListPathParams)
    ], TagmanagerAccountsContainersWorkspacesClientsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesClientsListQueryParams)
    ], TagmanagerAccountsContainersWorkspacesClientsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesClientsListSecurity)
    ], TagmanagerAccountsContainersWorkspacesClientsListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListRequest };
var TagmanagerAccountsContainersWorkspacesClientsListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesClientsListResponse, _super);
    function TagmanagerAccountsContainersWorkspacesClientsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesClientsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListClientsResponse)
    ], TagmanagerAccountsContainersWorkspacesClientsListResponse.prototype, "listClientsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesClientsListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesClientsListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesClientsListResponse };
