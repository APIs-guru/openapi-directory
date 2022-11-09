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
var TpuProjectsLocationsNodesGetGuestAttributesPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesGetGuestAttributesPathParams, _super);
    function TpuProjectsLocationsNodesGetGuestAttributesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesPathParams.prototype, "name", void 0);
    return TpuProjectsLocationsNodesGetGuestAttributesPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesGetGuestAttributesPathParams };
var TpuProjectsLocationsNodesGetGuestAttributesQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesGetGuestAttributesQueryParams, _super);
    function TpuProjectsLocationsNodesGetGuestAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsNodesGetGuestAttributesQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesGetGuestAttributesQueryParams };
var TpuProjectsLocationsNodesGetGuestAttributesSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesGetGuestAttributesSecurity, _super);
    function TpuProjectsLocationsNodesGetGuestAttributesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsNodesGetGuestAttributesSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsNodesGetGuestAttributesSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsNodesGetGuestAttributesSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesGetGuestAttributesSecurity };
var TpuProjectsLocationsNodesGetGuestAttributesRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesGetGuestAttributesRequest, _super);
    function TpuProjectsLocationsNodesGetGuestAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesGetGuestAttributesPathParams)
    ], TpuProjectsLocationsNodesGetGuestAttributesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesGetGuestAttributesQueryParams)
    ], TpuProjectsLocationsNodesGetGuestAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetGuestAttributesRequest)
    ], TpuProjectsLocationsNodesGetGuestAttributesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesGetGuestAttributesSecurity)
    ], TpuProjectsLocationsNodesGetGuestAttributesRequest.prototype, "security", void 0);
    return TpuProjectsLocationsNodesGetGuestAttributesRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesGetGuestAttributesRequest };
var TpuProjectsLocationsNodesGetGuestAttributesResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesGetGuestAttributesResponse, _super);
    function TpuProjectsLocationsNodesGetGuestAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesGetGuestAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetGuestAttributesResponse)
    ], TpuProjectsLocationsNodesGetGuestAttributesResponse.prototype, "getGuestAttributesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsNodesGetGuestAttributesResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsNodesGetGuestAttributesResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesGetGuestAttributesResponse };
