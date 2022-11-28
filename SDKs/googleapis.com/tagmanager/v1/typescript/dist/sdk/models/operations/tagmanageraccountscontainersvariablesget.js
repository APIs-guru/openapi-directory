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
var TagmanagerAccountsContainersVariablesGetPathParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetPathParams, _super);
    function TagmanagerAccountsContainersVariablesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=containerId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetPathParams.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variableId" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetPathParams.prototype, "variableId", void 0);
    return TagmanagerAccountsContainersVariablesGetPathParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetPathParams };
var TagmanagerAccountsContainersVariablesGetQueryParams = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetQueryParams, _super);
    function TagmanagerAccountsContainersVariablesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetQueryParams.prototype, "uploadProtocol", void 0);
    return TagmanagerAccountsContainersVariablesGetQueryParams;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetQueryParams };
var TagmanagerAccountsContainersVariablesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetSecurityOption1, _super);
    function TagmanagerAccountsContainersVariablesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVariablesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVariablesGetSecurityOption1.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVariablesGetSecurityOption1;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetSecurityOption1 };
var TagmanagerAccountsContainersVariablesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetSecurityOption2, _super);
    function TagmanagerAccountsContainersVariablesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TagmanagerAccountsContainersVariablesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TagmanagerAccountsContainersVariablesGetSecurityOption2.prototype, "oauth2c", void 0);
    return TagmanagerAccountsContainersVariablesGetSecurityOption2;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetSecurityOption2 };
var TagmanagerAccountsContainersVariablesGetSecurity = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetSecurity, _super);
    function TagmanagerAccountsContainersVariablesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVariablesGetSecurityOption1)
    ], TagmanagerAccountsContainersVariablesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TagmanagerAccountsContainersVariablesGetSecurityOption2)
    ], TagmanagerAccountsContainersVariablesGetSecurity.prototype, "option2", void 0);
    return TagmanagerAccountsContainersVariablesGetSecurity;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetSecurity };
var TagmanagerAccountsContainersVariablesGetRequest = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetRequest, _super);
    function TagmanagerAccountsContainersVariablesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVariablesGetPathParams)
    ], TagmanagerAccountsContainersVariablesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVariablesGetQueryParams)
    ], TagmanagerAccountsContainersVariablesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagmanagerAccountsContainersVariablesGetSecurity)
    ], TagmanagerAccountsContainersVariablesGetRequest.prototype, "security", void 0);
    return TagmanagerAccountsContainersVariablesGetRequest;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetRequest };
var TagmanagerAccountsContainersVariablesGetResponse = /** @class */ (function (_super) {
    __extends(TagmanagerAccountsContainersVariablesGetResponse, _super);
    function TagmanagerAccountsContainersVariablesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagmanagerAccountsContainersVariablesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagmanagerAccountsContainersVariablesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variable)
    ], TagmanagerAccountsContainersVariablesGetResponse.prototype, "variable", void 0);
    return TagmanagerAccountsContainersVariablesGetResponse;
}(SpeakeasyBase));
export { TagmanagerAccountsContainersVariablesGetResponse };
