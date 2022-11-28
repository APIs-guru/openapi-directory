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
var TagmanagerAccountsContainersFoldersEntitiesListPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListPathParams, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListPathParams.prototype, "folderId", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListPathParams };
var TagmanagerAccountsContainersFoldersEntitiesListQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListQueryParams, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListQueryParams };
var TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1 };
var TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2 };
var TagmanagerAccountsContainersFoldersEntitiesListSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListSecurity, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersEntitiesListSecurityOption1)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersFoldersEntitiesListSecurityOption2)
    ], TagmanagerAccountsContainersFoldersEntitiesListSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListSecurity };
var TagmanagerAccountsContainersFoldersEntitiesListRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListRequest, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersEntitiesListPathParams)
    ], TagmanagerAccountsContainersFoldersEntitiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersEntitiesListQueryParams)
    ], TagmanagerAccountsContainersFoldersEntitiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersFoldersEntitiesListSecurity)
    ], TagmanagerAccountsContainersFoldersEntitiesListRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListRequest };
var TagmanagerAccountsContainersFoldersEntitiesListResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersFoldersEntitiesListResponse, _super);
    function TagmanagerAccountsContainersFoldersEntitiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersFoldersEntitiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FolderEntities)
    ], TagmanagerAccountsContainersFoldersEntitiesListResponse.prototype, "folderEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersFoldersEntitiesListResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersFoldersEntitiesListResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersFoldersEntitiesListResponse };
