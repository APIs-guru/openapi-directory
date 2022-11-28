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
var FileProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsGetPathParams, _super);
    function FileProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return FileProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsGetPathParams };
var FileProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsGetQueryParams, _super);
    function FileProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return FileProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsGetQueryParams };
var FileProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsGetSecurity, _super);
    function FileProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FileProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FileProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return FileProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsGetSecurity };
var FileProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsGetRequest, _super);
    function FileProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsOperationsGetPathParams)
    ], FileProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsOperationsGetQueryParams)
    ], FileProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileProjectsLocationsOperationsGetSecurity)
    ], FileProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return FileProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsGetRequest };
var FileProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(FileProjectsLocationsOperationsGetResponse, _super);
    function FileProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], FileProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return FileProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { FileProjectsLocationsOperationsGetResponse };
