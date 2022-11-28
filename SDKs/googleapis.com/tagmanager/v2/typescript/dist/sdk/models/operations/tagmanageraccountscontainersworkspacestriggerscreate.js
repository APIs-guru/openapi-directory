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
var TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams.prototype, "parent", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams };
var TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams };
var TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity };
var TagmanagerAccountsContainersWorkspacesTriggersCreateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersCreateRequest, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersCreatePathParams)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersCreateQueryParams)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Trigger)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersWorkspacesTriggersCreateSecurity)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersCreateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersCreateRequest };
var TagmanagerAccountsContainersWorkspacesTriggersCreateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersWorkspacesTriggersCreateResponse, _super);
    function TagmanagerAccountsContainersWorkspacesTriggersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Trigger)
    ], TagmanagerAccountsContainersWorkspacesTriggersCreateResponse.prototype, "trigger", void 0);
    return TagmanagerAccountsContainersWorkspacesTriggersCreateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersWorkspacesTriggersCreateResponse };
