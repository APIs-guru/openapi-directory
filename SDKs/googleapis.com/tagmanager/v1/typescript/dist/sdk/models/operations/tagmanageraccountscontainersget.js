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
var TagmanagerAccountsContainersGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetPathParams, _super);
    function TagmanagerAccountsContainersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetPathParams.prototype, "containerId", void 0);
    return TagmanagerAccountsContainersGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetPathParams };
var TagmanagerAccountsContainersGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetQueryParams, _super);
    function TagmanagerAccountsContainersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetQueryParams };
var TagmanagerAccountsContainersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetSecurityOption1, _super);
    function TagmanagerAccountsContainersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetSecurityOption1 };
var TagmanagerAccountsContainersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetSecurityOption2, _super);
    function TagmanagerAccountsContainersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetSecurityOption2 };
var TagmanagerAccountsContainersGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetSecurity, _super);
    function TagmanagerAccountsContainersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersGetSecurityOption1)
    ], TagmanagerAccountsContainersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersGetSecurityOption2)
    ], TagmanagerAccountsContainersGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetSecurity };
var TagmanagerAccountsContainersGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetRequest, _super);
    function TagmanagerAccountsContainersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersGetPathParams)
    ], TagmanagerAccountsContainersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersGetQueryParams)
    ], TagmanagerAccountsContainersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersGetSecurity)
    ], TagmanagerAccountsContainersGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetRequest };
var TagmanagerAccountsContainersGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersGetResponse, _super);
    function TagmanagerAccountsContainersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Container)
    ], TagmanagerAccountsContainersGetResponse.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersGetResponse.prototype, "statusCode", void 0);
    return TagmanagerAccountsContainersGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersGetResponse };
