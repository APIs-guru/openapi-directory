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
var TpuProjectsLocationsRuntimeVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsRuntimeVersionsGetPathParams, _super);
    function TpuProjectsLocationsRuntimeVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetPathParams.prototype, "name", void 0);
    return TpuProjectsLocationsRuntimeVersionsGetPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsRuntimeVersionsGetPathParams };
var TpuProjectsLocationsRuntimeVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsRuntimeVersionsGetQueryParams, _super);
    function TpuProjectsLocationsRuntimeVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsRuntimeVersionsGetQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsRuntimeVersionsGetQueryParams };
var TpuProjectsLocationsRuntimeVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsRuntimeVersionsGetSecurity, _super);
    function TpuProjectsLocationsRuntimeVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsRuntimeVersionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsRuntimeVersionsGetSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsRuntimeVersionsGetSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsRuntimeVersionsGetSecurity };
var TpuProjectsLocationsRuntimeVersionsGetRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsRuntimeVersionsGetRequest, _super);
    function TpuProjectsLocationsRuntimeVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsRuntimeVersionsGetPathParams)
    ], TpuProjectsLocationsRuntimeVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsRuntimeVersionsGetQueryParams)
    ], TpuProjectsLocationsRuntimeVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsRuntimeVersionsGetSecurity)
    ], TpuProjectsLocationsRuntimeVersionsGetRequest.prototype, "security", void 0);
    return TpuProjectsLocationsRuntimeVersionsGetRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsRuntimeVersionsGetRequest };
var TpuProjectsLocationsRuntimeVersionsGetResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsRuntimeVersionsGetResponse, _super);
    function TpuProjectsLocationsRuntimeVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsRuntimeVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RuntimeVersion)
    ], TpuProjectsLocationsRuntimeVersionsGetResponse.prototype, "runtimeVersion", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsRuntimeVersionsGetResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsRuntimeVersionsGetResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsRuntimeVersionsGetResponse };
