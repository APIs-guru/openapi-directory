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
var FirebasehostingSitesDomainsGetPathParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetPathParams, _super);
    function FirebasehostingSitesDomainsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetPathParams.prototype, "name", void 0);
    return FirebasehostingSitesDomainsGetPathParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetPathParams };
var FirebasehostingSitesDomainsGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetQueryParams, _super);
    function FirebasehostingSitesDomainsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasehostingSitesDomainsGetQueryParams;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetQueryParams };
var FirebasehostingSitesDomainsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetSecurityOption1, _super);
    function FirebasehostingSitesDomainsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsGetSecurityOption1;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetSecurityOption1 };
var FirebasehostingSitesDomainsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetSecurityOption2, _super);
    function FirebasehostingSitesDomainsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsGetSecurityOption2;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetSecurityOption2 };
var FirebasehostingSitesDomainsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetSecurityOption3, _super);
    function FirebasehostingSitesDomainsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsGetSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsGetSecurityOption3;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetSecurityOption3 };
var FirebasehostingSitesDomainsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetSecurityOption4, _super);
    function FirebasehostingSitesDomainsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasehostingSitesDomainsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasehostingSitesDomainsGetSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasehostingSitesDomainsGetSecurityOption4;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetSecurityOption4 };
var FirebasehostingSitesDomainsGetSecurity = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetSecurity, _super);
    function FirebasehostingSitesDomainsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsGetSecurityOption1)
    ], FirebasehostingSitesDomainsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsGetSecurityOption2)
    ], FirebasehostingSitesDomainsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsGetSecurityOption3)
    ], FirebasehostingSitesDomainsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasehostingSitesDomainsGetSecurityOption4)
    ], FirebasehostingSitesDomainsGetSecurity.prototype, "option4", void 0);
    return FirebasehostingSitesDomainsGetSecurity;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetSecurity };
var FirebasehostingSitesDomainsGetRequest = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetRequest, _super);
    function FirebasehostingSitesDomainsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsGetPathParams)
    ], FirebasehostingSitesDomainsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsGetQueryParams)
    ], FirebasehostingSitesDomainsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebasehostingSitesDomainsGetSecurity)
    ], FirebasehostingSitesDomainsGetRequest.prototype, "security", void 0);
    return FirebasehostingSitesDomainsGetRequest;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetRequest };
var FirebasehostingSitesDomainsGetResponse = /** @class */ (function (_super) {
    __extends(FirebasehostingSitesDomainsGetResponse, _super);
    function FirebasehostingSitesDomainsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebasehostingSitesDomainsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], FirebasehostingSitesDomainsGetResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebasehostingSitesDomainsGetResponse.prototype, "statusCode", void 0);
    return FirebasehostingSitesDomainsGetResponse;
}(SpeakeasyBase));
export { FirebasehostingSitesDomainsGetResponse };
