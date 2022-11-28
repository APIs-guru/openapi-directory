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
var DatastreamProjectsLocationsStreamsObjectsLookupPathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsLookupPathParams, _super);
    function DatastreamProjectsLocationsStreamsObjectsLookupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupPathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsStreamsObjectsLookupPathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsLookupPathParams };
var DatastreamProjectsLocationsStreamsObjectsLookupQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsLookupQueryParams, _super);
    function DatastreamProjectsLocationsStreamsObjectsLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsStreamsObjectsLookupQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsLookupQueryParams };
var DatastreamProjectsLocationsStreamsObjectsLookupSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsLookupSecurity, _super);
    function DatastreamProjectsLocationsStreamsObjectsLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsStreamsObjectsLookupSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsStreamsObjectsLookupSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsStreamsObjectsLookupSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsLookupSecurity };
var DatastreamProjectsLocationsStreamsObjectsLookupRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsLookupRequest, _super);
    function DatastreamProjectsLocationsStreamsObjectsLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsLookupPathParams)
    ], DatastreamProjectsLocationsStreamsObjectsLookupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsLookupQueryParams)
    ], DatastreamProjectsLocationsStreamsObjectsLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LookupStreamObjectRequest)
    ], DatastreamProjectsLocationsStreamsObjectsLookupRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsObjectsLookupSecurity)
    ], DatastreamProjectsLocationsStreamsObjectsLookupRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsStreamsObjectsLookupRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsLookupRequest };
var DatastreamProjectsLocationsStreamsObjectsLookupResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsObjectsLookupResponse, _super);
    function DatastreamProjectsLocationsStreamsObjectsLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsObjectsLookupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsObjectsLookupResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StreamObject)
    ], DatastreamProjectsLocationsStreamsObjectsLookupResponse.prototype, "streamObject", void 0);
    return DatastreamProjectsLocationsStreamsObjectsLookupResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsObjectsLookupResponse };
