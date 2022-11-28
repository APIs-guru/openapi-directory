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
var TagmanagerAccountsContainersWorkspacesResolveConflictPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesResolveConflictPathParams, _super);
    function TagmanagerAccountsContainersWorkspacesResolveConflictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictPathParams.prototype, "path", void 0);
    return TagmanagerAccountsContainersWorkspacesResolveConflictPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesResolveConflictPathParams };
var TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fingerprint" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams };
var TagmanagerAccountsContainersWorkspacesResolveConflictSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesResolveConflictSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesResolveConflictSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesResolveConflictSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesResolveConflictSecurity };
var TagmanagerAccountsContainersWorkspacesResolveConflictRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesResolveConflictRequest, _super);
    function TagmanagerAccountsContainersWorkspacesResolveConflictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesResolveConflictPathParams)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesResolveConflictQueryParams)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Entity)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesResolveConflictSecurity)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesResolveConflictRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesResolveConflictRequest };
var TagmanagerAccountsContainersWorkspacesResolveConflictResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesResolveConflictResponse, _super);
    function TagmanagerAccountsContainersWorkspacesResolveConflictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesResolveConflictResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersWorkspacesResolveConflictResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesResolveConflictResponse };
