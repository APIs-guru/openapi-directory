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
var FirebaseappcheckProjectsServicesGetPathParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetPathParams, _super);
    function FirebaseappcheckProjectsServicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetPathParams.prototype, "name", void 0);
    return FirebaseappcheckProjectsServicesGetPathParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetPathParams };
var FirebaseappcheckProjectsServicesGetQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetQueryParams, _super);
    function FirebaseappcheckProjectsServicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseappcheckProjectsServicesGetQueryParams;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetQueryParams };
var FirebaseappcheckProjectsServicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetSecurityOption1, _super);
    function FirebaseappcheckProjectsServicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesGetSecurityOption1;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetSecurityOption1 };
var FirebaseappcheckProjectsServicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetSecurityOption2, _super);
    function FirebaseappcheckProjectsServicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseappcheckProjectsServicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseappcheckProjectsServicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseappcheckProjectsServicesGetSecurityOption2;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetSecurityOption2 };
var FirebaseappcheckProjectsServicesGetSecurity = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetSecurity, _super);
    function FirebaseappcheckProjectsServicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesGetSecurityOption1)
    ], FirebaseappcheckProjectsServicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseappcheckProjectsServicesGetSecurityOption2)
    ], FirebaseappcheckProjectsServicesGetSecurity.prototype, "option2", void 0);
    return FirebaseappcheckProjectsServicesGetSecurity;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetSecurity };
var FirebaseappcheckProjectsServicesGetRequest = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetRequest, _super);
    function FirebaseappcheckProjectsServicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesGetPathParams)
    ], FirebaseappcheckProjectsServicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesGetQueryParams)
    ], FirebaseappcheckProjectsServicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirebaseappcheckProjectsServicesGetSecurity)
    ], FirebaseappcheckProjectsServicesGetRequest.prototype, "security", void 0);
    return FirebaseappcheckProjectsServicesGetRequest;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetRequest };
var FirebaseappcheckProjectsServicesGetResponse = /** @class */ (function (_super) {
    __extends(FirebaseappcheckProjectsServicesGetResponse, _super);
    function FirebaseappcheckProjectsServicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirebaseappcheckProjectsServicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleFirebaseAppcheckV1betaService)
    ], FirebaseappcheckProjectsServicesGetResponse.prototype, "googleFirebaseAppcheckV1betaService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirebaseappcheckProjectsServicesGetResponse.prototype, "statusCode", void 0);
    return FirebaseappcheckProjectsServicesGetResponse;
}(SpeakeasyBase));
export { FirebaseappcheckProjectsServicesGetResponse };
