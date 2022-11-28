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
var RedisProjectsLocationsInstancesImportPathParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesImportPathParams, _super);
    function RedisProjectsLocationsInstancesImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportPathParams.prototype, "name", void 0);
    return RedisProjectsLocationsInstancesImportPathParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesImportPathParams };
var RedisProjectsLocationsInstancesImportQueryParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesImportQueryParams, _super);
    function RedisProjectsLocationsInstancesImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportQueryParams.prototype, "uploadProtocol", void 0);
    return RedisProjectsLocationsInstancesImportQueryParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesImportQueryParams };
var RedisProjectsLocationsInstancesImportSecurity = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesImportSecurity, _super);
    function RedisProjectsLocationsInstancesImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RedisProjectsLocationsInstancesImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RedisProjectsLocationsInstancesImportSecurity.prototype, "oauth2c", void 0);
    return RedisProjectsLocationsInstancesImportSecurity;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesImportSecurity };
var RedisProjectsLocationsInstancesImportRequest = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesImportRequest, _super);
    function RedisProjectsLocationsInstancesImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesImportPathParams)
    ], RedisProjectsLocationsInstancesImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesImportQueryParams)
    ], RedisProjectsLocationsInstancesImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportInstanceRequest)
    ], RedisProjectsLocationsInstancesImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesImportSecurity)
    ], RedisProjectsLocationsInstancesImportRequest.prototype, "security", void 0);
    return RedisProjectsLocationsInstancesImportRequest;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesImportRequest };
var RedisProjectsLocationsInstancesImportResponse = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesImportResponse, _super);
    function RedisProjectsLocationsInstancesImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RedisProjectsLocationsInstancesImportResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RedisProjectsLocationsInstancesImportResponse.prototype, "statusCode", void 0);
    return RedisProjectsLocationsInstancesImportResponse;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesImportResponse };
