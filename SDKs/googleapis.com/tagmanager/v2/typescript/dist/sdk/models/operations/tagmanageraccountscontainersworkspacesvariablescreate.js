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
var TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams };
var TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams };
var TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity };
var TagmanagerAccountsContainersWorkspacesVariablesCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesCreateRequest, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesCreatePathParams)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesCreateQueryParams)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Variable)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesVariablesCreateSecurity)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesCreateRequest };
var TagmanagerAccountsContainersWorkspacesVariablesCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesVariablesCreateResponse, _super);
    function TagmanagerAccountsContainersWorkspacesVariablesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variable)
    ], TagmanagerAccountsContainersWorkspacesVariablesCreateResponse.prototype, "variable", void 0);
    return TagmanagerAccountsContainersWorkspacesVariablesCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesVariablesCreateResponse };
