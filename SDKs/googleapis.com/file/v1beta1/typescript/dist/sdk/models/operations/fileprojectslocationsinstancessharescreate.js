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
var FileProjectsLocationsInstancesSharesCreatePathParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSharesCreatePathParams, _super);
    function FileProjectsLocationsInstancesSharesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreatePathParams.prototype, "parent", void 0);
    return FileProjectsLocationsInstancesSharesCreatePathParams;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSharesCreatePathParams };
var FileProjectsLocationsInstancesSharesCreateQueryParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSharesCreateQueryParams, _super);
    function FileProjectsLocationsInstancesSharesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=shareId" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "shareId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return FileProjectsLocationsInstancesSharesCreateQueryParams;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSharesCreateQueryParams };
var FileProjectsLocationsInstancesSharesCreateSecurity = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSharesCreateSecurity, _super);
    function FileProjectsLocationsInstancesSharesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FileProjectsLocationsInstancesSharesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FileProjectsLocationsInstancesSharesCreateSecurity.prototype, "oauth2c", void 0);
    return FileProjectsLocationsInstancesSharesCreateSecurity;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSharesCreateSecurity };
var FileProjectsLocationsInstancesSharesCreateRequest = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSharesCreateRequest, _super);
    function FileProjectsLocationsInstancesSharesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSharesCreatePathParams)
    ], FileProjectsLocationsInstancesSharesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSharesCreateQueryParams)
    ], FileProjectsLocationsInstancesSharesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Share)
    ], FileProjectsLocationsInstancesSharesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsInstancesSharesCreateSecurity)
    ], FileProjectsLocationsInstancesSharesCreateRequest.prototype, "security", void 0);
    return FileProjectsLocationsInstancesSharesCreateRequest;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSharesCreateRequest };
var FileProjectsLocationsInstancesSharesCreateResponse = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsInstancesSharesCreateResponse, _super);
    function FileProjectsLocationsInstancesSharesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileProjectsLocationsInstancesSharesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], FileProjectsLocationsInstancesSharesCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileProjectsLocationsInstancesSharesCreateResponse.prototype, "statusCode", void 0);
    return FileProjectsLocationsInstancesSharesCreateResponse;
}(SpeakeasyBase));
export { FileProjectsLocationsInstancesSharesCreateResponse };
