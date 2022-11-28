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
var RedisProjectsLocationsInstancesCreatePathParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesCreatePathParams, _super);
    function RedisProjectsLocationsInstancesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreatePathParams.prototype, "parent", void 0);
    return RedisProjectsLocationsInstancesCreatePathParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesCreatePathParams };
var RedisProjectsLocationsInstancesCreateQueryParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesCreateQueryParams, _super);
    function RedisProjectsLocationsInstancesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=instanceId" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RedisProjectsLocationsInstancesCreateQueryParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesCreateQueryParams };
var RedisProjectsLocationsInstancesCreateSecurity = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesCreateSecurity, _super);
    function RedisProjectsLocationsInstancesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RedisProjectsLocationsInstancesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RedisProjectsLocationsInstancesCreateSecurity.prototype, "oauth2c", void 0);
    return RedisProjectsLocationsInstancesCreateSecurity;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesCreateSecurity };
var RedisProjectsLocationsInstancesCreateRequest = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesCreateRequest, _super);
    function RedisProjectsLocationsInstancesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesCreatePathParams)
    ], RedisProjectsLocationsInstancesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesCreateQueryParams)
    ], RedisProjectsLocationsInstancesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstanceInput)
    ], RedisProjectsLocationsInstancesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesCreateSecurity)
    ], RedisProjectsLocationsInstancesCreateRequest.prototype, "security", void 0);
    return RedisProjectsLocationsInstancesCreateRequest;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesCreateRequest };
var RedisProjectsLocationsInstancesCreateResponse = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesCreateResponse, _super);
    function RedisProjectsLocationsInstancesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RedisProjectsLocationsInstancesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RedisProjectsLocationsInstancesCreateResponse.prototype, "statusCode", void 0);
    return RedisProjectsLocationsInstancesCreateResponse;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesCreateResponse };
