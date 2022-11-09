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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var FirebasedatabaseProjectsLocationsInstancesGetPathParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetPathParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetPathParams.prototype, "name", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetPathParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetPathParams };
var FirebasedatabaseProjectsLocationsInstancesGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetQueryParams, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetQueryParams;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetQueryParams };
var FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1 };
var FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2 };
var FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3 };
var FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4.prototype, "oauth2c", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4 };
var FirebasedatabaseProjectsLocationsInstancesGetSecurity = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetSecurity, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetSecurityOption1)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetSecurityOption2)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetSecurityOption3)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetSecurityOption4)
    ], FirebasedatabaseProjectsLocationsInstancesGetSecurity.prototype, "option4", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetSecurity;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetSecurity };
var FirebasedatabaseProjectsLocationsInstancesGetRequest = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetRequest, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetPathParams)
    ], FirebasedatabaseProjectsLocationsInstancesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetQueryParams)
    ], FirebasedatabaseProjectsLocationsInstancesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasedatabaseProjectsLocationsInstancesGetSecurity)
    ], FirebasedatabaseProjectsLocationsInstancesGetRequest.prototype, "security", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetRequest;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetRequest };
var FirebasedatabaseProjectsLocationsInstancesGetResponse = /** @class */ (function (_super) {
    __extends(FirebasedatabaseProjectsLocationsInstancesGetResponse, _super);
    function FirebasedatabaseProjectsLocationsInstancesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasedatabaseProjectsLocationsInstancesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DatabaseInstance)
    ], FirebasedatabaseProjectsLocationsInstancesGetResponse.prototype, "databaseInstance", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasedatabaseProjectsLocationsInstancesGetResponse.prototype, "statusCode", void 0);
    return FirebasedatabaseProjectsLocationsInstancesGetResponse;
}(SpeakeasyBase));
export { FirebasedatabaseProjectsLocationsInstancesGetResponse };
