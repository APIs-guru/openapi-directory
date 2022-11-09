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
var FileProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsDeletePathParams, _super);
    function FileProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return FileProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsDeletePathParams };
var FileProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsDeleteQueryParams, _super);
    function FileProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FileProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsDeleteQueryParams };
var FileProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsDeleteSecurity, _super);
    function FileProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FileProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FileProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return FileProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsDeleteSecurity };
var FileProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsDeleteRequest, _super);
    function FileProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsOperationsDeletePathParams)
    ], FileProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsOperationsDeleteQueryParams)
    ], FileProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FileProjectsLocationsOperationsDeleteSecurity)
    ], FileProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return FileProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsDeleteRequest };
var FileProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsDeleteResponse, _super);
    function FileProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FileProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FileProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return FileProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsDeleteResponse };
