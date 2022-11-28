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
var TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams };
var TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" }),
        __metadata("design:type", Array)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "tagId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=triggerId" }),
        __metadata("design:type", Array)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variableId" }),
        __metadata("design:type", Array)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams.prototype, "variableId", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams };
var TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity };
var TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Folder)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest };
var TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse, _super);
    function TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse };
