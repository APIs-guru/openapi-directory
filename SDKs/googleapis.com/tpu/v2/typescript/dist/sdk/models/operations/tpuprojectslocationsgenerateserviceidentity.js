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
var TpuProjectsLocationsGenerateServiceIdentityPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsGenerateServiceIdentityPathParams, _super);
    function TpuProjectsLocationsGenerateServiceIdentityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityPathParams.prototype, "parent", void 0);
    return TpuProjectsLocationsGenerateServiceIdentityPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsGenerateServiceIdentityPathParams };
var TpuProjectsLocationsGenerateServiceIdentityQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsGenerateServiceIdentityQueryParams, _super);
    function TpuProjectsLocationsGenerateServiceIdentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsGenerateServiceIdentityQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsGenerateServiceIdentityQueryParams };
var TpuProjectsLocationsGenerateServiceIdentitySecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsGenerateServiceIdentitySecurity, _super);
    function TpuProjectsLocationsGenerateServiceIdentitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsGenerateServiceIdentitySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsGenerateServiceIdentitySecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsGenerateServiceIdentitySecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsGenerateServiceIdentitySecurity };
var TpuProjectsLocationsGenerateServiceIdentityRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsGenerateServiceIdentityRequest, _super);
    function TpuProjectsLocationsGenerateServiceIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsGenerateServiceIdentityPathParams)
    ], TpuProjectsLocationsGenerateServiceIdentityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsGenerateServiceIdentityQueryParams)
    ], TpuProjectsLocationsGenerateServiceIdentityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], TpuProjectsLocationsGenerateServiceIdentityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TpuProjectsLocationsGenerateServiceIdentitySecurity)
    ], TpuProjectsLocationsGenerateServiceIdentityRequest.prototype, "security", void 0);
    return TpuProjectsLocationsGenerateServiceIdentityRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsGenerateServiceIdentityRequest };
var TpuProjectsLocationsGenerateServiceIdentityResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsGenerateServiceIdentityResponse, _super);
    function TpuProjectsLocationsGenerateServiceIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsGenerateServiceIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateServiceIdentityResponse)
    ], TpuProjectsLocationsGenerateServiceIdentityResponse.prototype, "generateServiceIdentityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsGenerateServiceIdentityResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsGenerateServiceIdentityResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsGenerateServiceIdentityResponse };
