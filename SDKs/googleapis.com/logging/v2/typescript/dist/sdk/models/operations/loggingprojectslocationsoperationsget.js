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
var LoggingProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetPathParams, _super);
    function LoggingProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetPathParams };
var LoggingProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetQueryParams, _super);
    function LoggingProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetQueryParams };
var LoggingProjectsLocationsOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetSecurityOption1, _super);
    function LoggingProjectsLocationsOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetSecurityOption1 };
var LoggingProjectsLocationsOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetSecurityOption2, _super);
    function LoggingProjectsLocationsOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetSecurityOption2 };
var LoggingProjectsLocationsOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetSecurityOption3, _super);
    function LoggingProjectsLocationsOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetSecurityOption3 };
var LoggingProjectsLocationsOperationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetSecurityOption4, _super);
    function LoggingProjectsLocationsOperationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsGetSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetSecurityOption4 };
var LoggingProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetSecurity, _super);
    function LoggingProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetSecurityOption1)
    ], LoggingProjectsLocationsOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetSecurityOption2)
    ], LoggingProjectsLocationsOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetSecurityOption3)
    ], LoggingProjectsLocationsOperationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetSecurityOption4)
    ], LoggingProjectsLocationsOperationsGetSecurity.prototype, "option4", void 0);
    return LoggingProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetSecurity };
var LoggingProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetRequest, _super);
    function LoggingProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetPathParams)
    ], LoggingProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetQueryParams)
    ], LoggingProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsGetSecurity)
    ], LoggingProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetRequest };
var LoggingProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsGetResponse, _super);
    function LoggingProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], LoggingProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsGetResponse };
