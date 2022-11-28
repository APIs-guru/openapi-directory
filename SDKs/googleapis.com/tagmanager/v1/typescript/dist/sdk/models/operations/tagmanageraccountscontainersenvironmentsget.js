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
var TagmanagerAccountsContainersEnvironmentsGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetPathParams, _super);
    function TagmanagerAccountsContainersEnvironmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetPathParams.prototype, "environmentId", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetPathParams };
var TagmanagerAccountsContainersEnvironmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetQueryParams, _super);
    function TagmanagerAccountsContainersEnvironmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetQueryParams };
var TagmanagerAccountsContainersEnvironmentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetSecurityOption1, _super);
    function TagmanagerAccountsContainersEnvironmentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetSecurityOption1 };
var TagmanagerAccountsContainersEnvironmentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetSecurityOption2, _super);
    function TagmanagerAccountsContainersEnvironmentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetSecurityOption2 };
var TagmanagerAccountsContainersEnvironmentsGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetSecurity, _super);
    function TagmanagerAccountsContainersEnvironmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsGetSecurityOption1)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsGetSecurityOption2)
    ], TagmanagerAccountsContainersEnvironmentsGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetSecurity };
var TagmanagerAccountsContainersEnvironmentsGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetRequest, _super);
    function TagmanagerAccountsContainersEnvironmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsGetPathParams)
    ], TagmanagerAccountsContainersEnvironmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsGetQueryParams)
    ], TagmanagerAccountsContainersEnvironmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersEnvironmentsGetSecurity)
    ], TagmanagerAccountsContainersEnvironmentsGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetRequest };
var TagmanagerAccountsContainersEnvironmentsGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersEnvironmentsGetResponse, _super);
    function TagmanagerAccountsContainersEnvironmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersEnvironmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Environment)
    ], TagmanagerAccountsContainersEnvironmentsGetResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersEnvironmentsGetResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersEnvironmentsGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersEnvironmentsGetResponse };
