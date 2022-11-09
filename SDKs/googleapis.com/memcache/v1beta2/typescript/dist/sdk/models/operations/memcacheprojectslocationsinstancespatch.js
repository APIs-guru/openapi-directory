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
var MemcacheProjectsLocationsInstancesPatchPathParams = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesPatchPathParams, _super);
    function MemcacheProjectsLocationsInstancesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchPathParams.prototype, "name", void 0);
    return MemcacheProjectsLocationsInstancesPatchPathParams;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesPatchPathParams };
var MemcacheProjectsLocationsInstancesPatchQueryParams = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesPatchQueryParams, _super);
    function MemcacheProjectsLocationsInstancesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return MemcacheProjectsLocationsInstancesPatchQueryParams;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesPatchQueryParams };
var MemcacheProjectsLocationsInstancesPatchSecurity = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesPatchSecurity, _super);
    function MemcacheProjectsLocationsInstancesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MemcacheProjectsLocationsInstancesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MemcacheProjectsLocationsInstancesPatchSecurity.prototype, "oauth2c", void 0);
    return MemcacheProjectsLocationsInstancesPatchSecurity;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesPatchSecurity };
var MemcacheProjectsLocationsInstancesPatchRequest = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesPatchRequest, _super);
    function MemcacheProjectsLocationsInstancesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesPatchPathParams)
    ], MemcacheProjectsLocationsInstancesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesPatchQueryParams)
    ], MemcacheProjectsLocationsInstancesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Instance)
    ], MemcacheProjectsLocationsInstancesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesPatchSecurity)
    ], MemcacheProjectsLocationsInstancesPatchRequest.prototype, "security", void 0);
    return MemcacheProjectsLocationsInstancesPatchRequest;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesPatchRequest };
var MemcacheProjectsLocationsInstancesPatchResponse = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesPatchResponse, _super);
    function MemcacheProjectsLocationsInstancesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], MemcacheProjectsLocationsInstancesPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MemcacheProjectsLocationsInstancesPatchResponse.prototype, "statusCode", void 0);
    return MemcacheProjectsLocationsInstancesPatchResponse;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesPatchResponse };
