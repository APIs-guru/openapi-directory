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
var TagmanagerAccountsContainersWorkspacesGetStatusPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusPathParams };
var TagmanagerAccountsContainersWorkspacesGetStatusQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusQueryParams };
var TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1 };
var TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2 };
var TagmanagerAccountsContainersWorkspacesGetStatusSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2)
    ], TagmanagerAccountsContainersWorkspacesGetStatusSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusSecurity };
var TagmanagerAccountsContainersWorkspacesGetStatusRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusRequest, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGetStatusPathParams)
    ], TagmanagerAccountsContainersWorkspacesGetStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGetStatusQueryParams)
    ], TagmanagerAccountsContainersWorkspacesGetStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGetStatusSecurity)
    ], TagmanagerAccountsContainersWorkspacesGetStatusRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusRequest };
var TagmanagerAccountsContainersWorkspacesGetStatusResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGetStatusResponse, _super);
    function TagmanagerAccountsContainersWorkspacesGetStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGetStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetWorkspaceStatusResponse)
    ], TagmanagerAccountsContainersWorkspacesGetStatusResponse.prototype, "getWorkspaceStatusResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesGetStatusResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesGetStatusResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGetStatusResponse };
