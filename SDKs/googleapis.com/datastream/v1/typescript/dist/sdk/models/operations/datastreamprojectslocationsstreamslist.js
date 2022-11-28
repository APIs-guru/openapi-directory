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
var DatastreamProjectsLocationsStreamsListPathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsListPathParams, _super);
    function DatastreamProjectsLocationsStreamsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListPathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsStreamsListPathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsListPathParams };
var DatastreamProjectsLocationsStreamsListQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsListQueryParams, _super);
    function DatastreamProjectsLocationsStreamsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsStreamsListQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsListQueryParams };
var DatastreamProjectsLocationsStreamsListSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsListSecurity, _super);
    function DatastreamProjectsLocationsStreamsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsStreamsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsStreamsListSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsStreamsListSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsListSecurity };
var DatastreamProjectsLocationsStreamsListRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsListRequest, _super);
    function DatastreamProjectsLocationsStreamsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsListPathParams)
    ], DatastreamProjectsLocationsStreamsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsListQueryParams)
    ], DatastreamProjectsLocationsStreamsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsListSecurity)
    ], DatastreamProjectsLocationsStreamsListRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsStreamsListRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsListRequest };
var DatastreamProjectsLocationsStreamsListResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsListResponse, _super);
    function DatastreamProjectsLocationsStreamsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListStreamsResponse)
    ], DatastreamProjectsLocationsStreamsListResponse.prototype, "listStreamsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsListResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsStreamsListResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsListResponse };
