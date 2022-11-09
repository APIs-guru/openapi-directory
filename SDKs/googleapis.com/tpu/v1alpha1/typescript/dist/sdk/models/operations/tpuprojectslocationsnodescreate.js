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
var TpuProjectsLocationsNodesCreatePathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesCreatePathParams, _super);
    function TpuProjectsLocationsNodesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreatePathParams.prototype, "parent", void 0);
    return TpuProjectsLocationsNodesCreatePathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesCreatePathParams };
var TpuProjectsLocationsNodesCreateQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesCreateQueryParams, _super);
    function TpuProjectsLocationsNodesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=nodeId" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "nodeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsNodesCreateQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesCreateQueryParams };
var TpuProjectsLocationsNodesCreateSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesCreateSecurity, _super);
    function TpuProjectsLocationsNodesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsNodesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsNodesCreateSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsNodesCreateSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesCreateSecurity };
var TpuProjectsLocationsNodesCreateRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesCreateRequest, _super);
    function TpuProjectsLocationsNodesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesCreatePathParams)
    ], TpuProjectsLocationsNodesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesCreateQueryParams)
    ], TpuProjectsLocationsNodesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Node)
    ], TpuProjectsLocationsNodesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesCreateSecurity)
    ], TpuProjectsLocationsNodesCreateRequest.prototype, "security", void 0);
    return TpuProjectsLocationsNodesCreateRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesCreateRequest };
var TpuProjectsLocationsNodesCreateResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesCreateResponse, _super);
    function TpuProjectsLocationsNodesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], TpuProjectsLocationsNodesCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsNodesCreateResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsNodesCreateResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesCreateResponse };
