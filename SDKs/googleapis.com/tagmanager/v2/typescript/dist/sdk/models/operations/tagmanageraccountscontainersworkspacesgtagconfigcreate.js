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
var TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams };
var TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams };
var TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity };
var TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigCreatePathParams)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigCreateQueryParams)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GtagConfig)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesGtagConfigCreateSecurity)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigCreateRequest };
var TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse, _super);
    function TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GtagConfig)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse.prototype, "gtagConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesGtagConfigCreateResponse };
