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
var TagmanagerAccountsContainersWorkspacesCreateVersionPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesCreateVersionPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesCreateVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesCreateVersionPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesCreateVersionPathParams };
var TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams };
var TagmanagerAccountsContainersWorkspacesCreateVersionSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesCreateVersionSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesCreateVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesCreateVersionSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesCreateVersionSecurity };
var TagmanagerAccountsContainersWorkspacesCreateVersionRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesCreateVersionRequest, _super);
    function TagmanagerAccountsContainersWorkspacesCreateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesCreateVersionPathParams)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesCreateVersionQueryParams)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateContainerVersionRequestVersionOptions)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesCreateVersionSecurity)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesCreateVersionRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesCreateVersionRequest };
var TagmanagerAccountsContainersWorkspacesCreateVersionResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesCreateVersionResponse, _super);
    function TagmanagerAccountsContainersWorkspacesCreateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateContainerVersionResponse)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionResponse.prototype, "createContainerVersionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesCreateVersionResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesCreateVersionResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesCreateVersionResponse };
