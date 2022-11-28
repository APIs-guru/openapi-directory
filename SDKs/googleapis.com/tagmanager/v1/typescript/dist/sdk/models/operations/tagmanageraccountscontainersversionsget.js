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
var TagmanagerAccountsContainersVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetPathParams, _super);
    function TagmanagerAccountsContainersVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerVersionId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetPathParams.prototype, "containerVersionId", void 0);
    return TagmanagerAccountsContainersVersionsGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetPathParams };
var TagmanagerAccountsContainersVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetQueryParams, _super);
    function TagmanagerAccountsContainersVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVersionsGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetQueryParams };
var TagmanagerAccountsContainersVersionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetSecurityOption1, _super);
    function TagmanagerAccountsContainersVersionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetSecurityOption1 };
var TagmanagerAccountsContainersVersionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetSecurityOption2, _super);
    function TagmanagerAccountsContainersVersionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetSecurityOption2 };
var TagmanagerAccountsContainersVersionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetSecurityOption3, _super);
    function TagmanagerAccountsContainersVersionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVersionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVersionsGetSecurityOption3;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetSecurityOption3 };
var TagmanagerAccountsContainersVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetSecurity, _super);
    function TagmanagerAccountsContainersVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetSecurityOption1)
    ], TagmanagerAccountsContainersVersionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetSecurityOption2)
    ], TagmanagerAccountsContainersVersionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetSecurityOption3)
    ], TagmanagerAccountsContainersVersionsGetSecurity.prototype, "option3", void 0);
    return TagmanagerAccountsContainersVersionsGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetSecurity };
var TagmanagerAccountsContainersVersionsGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetRequest, _super);
    function TagmanagerAccountsContainersVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetPathParams)
    ], TagmanagerAccountsContainersVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetQueryParams)
    ], TagmanagerAccountsContainersVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVersionsGetSecurity)
    ], TagmanagerAccountsContainersVersionsGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVersionsGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetRequest };
var TagmanagerAccountsContainersVersionsGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVersionsGetResponse, _super);
    function TagmanagerAccountsContainersVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContainerVersion)
    ], TagmanagerAccountsContainersVersionsGetResponse.prototype, "containerVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVersionsGetResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersVersionsGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVersionsGetResponse };
