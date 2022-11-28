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
var TagmanagerAccountsContainersEnvironmentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsUpdatePathParams, _super);
    function TagmanagerAccountsContainersEnvironmentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdatePathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdatePathParams.prototype, "environmentId", void 0);
    return TagmanagerAccountsContainersEnvironmentsUpdatePathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsUpdatePathParams };
var TagmanagerAccountsContainersEnvironmentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsUpdateQueryParams, _super);
    function TagmanagerAccountsContainersEnvironmentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fingerprint" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersEnvironmentsUpdateQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsUpdateQueryParams };
var TagmanagerAccountsContainersEnvironmentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsUpdateSecurity, _super);
    function TagmanagerAccountsContainersEnvironmentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsUpdateSecurity.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsUpdateSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsUpdateSecurity };
var TagmanagerAccountsContainersEnvironmentsUpdateRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsUpdateRequest, _super);
    function TagmanagerAccountsContainersEnvironmentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsUpdatePathParams)
    ], TagmanagerAccountsContainersEnvironmentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsUpdateQueryParams)
    ], TagmanagerAccountsContainersEnvironmentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersEnvironmentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsUpdateSecurity)
    ], TagmanagerAccountsContainersEnvironmentsUpdateRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersEnvironmentsUpdateRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsUpdateRequest };
var TagmanagerAccountsContainersEnvironmentsUpdateResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsUpdateResponse, _super);
    function TagmanagerAccountsContainersEnvironmentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersEnvironmentsUpdateResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersEnvironmentsUpdateResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersEnvironmentsUpdateResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsUpdateResponse };
