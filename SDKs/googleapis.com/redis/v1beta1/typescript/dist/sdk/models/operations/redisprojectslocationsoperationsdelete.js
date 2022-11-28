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
var RedisProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsOperationsDeletePathParams, _super);
    function RedisProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return RedisProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsOperationsDeletePathParams };
var RedisProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsOperationsDeleteQueryParams, _super);
    function RedisProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return RedisProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsOperationsDeleteQueryParams };
var RedisProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsOperationsDeleteSecurity, _super);
    function RedisProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RedisProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RedisProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return RedisProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { RedisProjectsLocationsOperationsDeleteSecurity };
var RedisProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsOperationsDeleteRequest, _super);
    function RedisProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsOperationsDeletePathParams)
    ], RedisProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsOperationsDeleteQueryParams)
    ], RedisProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsOperationsDeleteSecurity)
    ], RedisProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return RedisProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { RedisProjectsLocationsOperationsDeleteRequest };
var RedisProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsOperationsDeleteResponse, _super);
    function RedisProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RedisProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RedisProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RedisProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return RedisProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { RedisProjectsLocationsOperationsDeleteResponse };
