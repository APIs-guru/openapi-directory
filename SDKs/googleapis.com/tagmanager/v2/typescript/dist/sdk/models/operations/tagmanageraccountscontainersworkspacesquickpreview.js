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
var TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams };
var TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams };
var TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity };
var TagmanagerAccountsContainersWorkspacesQuickPreviewRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesQuickPreviewRequest, _super);
    function TagmanagerAccountsContainersWorkspacesQuickPreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesQuickPreviewPathParams)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesQuickPreviewQueryParams)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesQuickPreviewSecurity)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesQuickPreviewRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesQuickPreviewRequest };
var TagmanagerAccountsContainersWorkspacesQuickPreviewResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesQuickPreviewResponse, _super);
    function TagmanagerAccountsContainersWorkspacesQuickPreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QuickPreviewResponse)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewResponse.prototype, "quickPreviewResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesQuickPreviewResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesQuickPreviewResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesQuickPreviewResponse };
