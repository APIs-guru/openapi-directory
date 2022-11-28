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
var TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams };
var TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams };
var TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity };
var TagmanagerAccountsContainersWorkspacesFoldersCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersCreateRequest, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersCreatePathParams)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersCreateQueryParams)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Folder)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersCreateSecurity)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersCreateRequest };
var TagmanagerAccountsContainersWorkspacesFoldersCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersCreateResponse, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Folder)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateResponse.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesFoldersCreateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersCreateResponse };
