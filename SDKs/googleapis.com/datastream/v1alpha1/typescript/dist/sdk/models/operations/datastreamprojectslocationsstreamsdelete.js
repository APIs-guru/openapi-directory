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
var DatastreamProjectsLocationsStreamsDeletePathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsDeletePathParams, _super);
    function DatastreamProjectsLocationsStreamsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeletePathParams.prototype, "name", void 0);
    return DatastreamProjectsLocationsStreamsDeletePathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsDeletePathParams };
var DatastreamProjectsLocationsStreamsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsDeleteQueryParams, _super);
    function DatastreamProjectsLocationsStreamsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsStreamsDeleteQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsDeleteQueryParams };
var DatastreamProjectsLocationsStreamsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsDeleteSecurity, _super);
    function DatastreamProjectsLocationsStreamsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsStreamsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsStreamsDeleteSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsStreamsDeleteSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsDeleteSecurity };
var DatastreamProjectsLocationsStreamsDeleteRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsDeleteRequest, _super);
    function DatastreamProjectsLocationsStreamsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsDeletePathParams)
    ], DatastreamProjectsLocationsStreamsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsDeleteQueryParams)
    ], DatastreamProjectsLocationsStreamsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsDeleteSecurity)
    ], DatastreamProjectsLocationsStreamsDeleteRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsStreamsDeleteRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsDeleteRequest };
var DatastreamProjectsLocationsStreamsDeleteResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsDeleteResponse, _super);
    function DatastreamProjectsLocationsStreamsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatastreamProjectsLocationsStreamsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsDeleteResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsStreamsDeleteResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsDeleteResponse };
