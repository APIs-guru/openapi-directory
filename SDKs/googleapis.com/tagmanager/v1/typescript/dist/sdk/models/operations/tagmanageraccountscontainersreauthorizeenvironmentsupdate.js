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
var TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams, _super);
    function TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams.prototype, "environmentId", void 0);
    return TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams };
var TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams, _super);
    function TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams };
var TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity, _super);
    function TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity };
var TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest, _super);
    function TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest };
var TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse, _super);
    function TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse };
