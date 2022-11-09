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
var RedisProjectsLocationsInstancesGetAuthStringPathParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesGetAuthStringPathParams, _super);
    function RedisProjectsLocationsInstancesGetAuthStringPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringPathParams.prototype, "name", void 0);
    return RedisProjectsLocationsInstancesGetAuthStringPathParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesGetAuthStringPathParams };
var RedisProjectsLocationsInstancesGetAuthStringQueryParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesGetAuthStringQueryParams, _super);
    function RedisProjectsLocationsInstancesGetAuthStringQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringQueryParams.prototype, "uploadProtocol", void 0);
    return RedisProjectsLocationsInstancesGetAuthStringQueryParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesGetAuthStringQueryParams };
var RedisProjectsLocationsInstancesGetAuthStringSecurity = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesGetAuthStringSecurity, _super);
    function RedisProjectsLocationsInstancesGetAuthStringSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RedisProjectsLocationsInstancesGetAuthStringSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RedisProjectsLocationsInstancesGetAuthStringSecurity.prototype, "oauth2c", void 0);
    return RedisProjectsLocationsInstancesGetAuthStringSecurity;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesGetAuthStringSecurity };
var RedisProjectsLocationsInstancesGetAuthStringRequest = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesGetAuthStringRequest, _super);
    function RedisProjectsLocationsInstancesGetAuthStringRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesGetAuthStringPathParams)
    ], RedisProjectsLocationsInstancesGetAuthStringRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesGetAuthStringQueryParams)
    ], RedisProjectsLocationsInstancesGetAuthStringRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesGetAuthStringSecurity)
    ], RedisProjectsLocationsInstancesGetAuthStringRequest.prototype, "security", void 0);
    return RedisProjectsLocationsInstancesGetAuthStringRequest;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesGetAuthStringRequest };
var RedisProjectsLocationsInstancesGetAuthStringResponse = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesGetAuthStringResponse, _super);
    function RedisProjectsLocationsInstancesGetAuthStringResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesGetAuthStringResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.InstanceAuthString)
    ], RedisProjectsLocationsInstancesGetAuthStringResponse.prototype, "instanceAuthString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RedisProjectsLocationsInstancesGetAuthStringResponse.prototype, "statusCode", void 0);
    return RedisProjectsLocationsInstancesGetAuthStringResponse;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesGetAuthStringResponse };
