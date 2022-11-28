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
var DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams, _super);
    function DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams };
var DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams, _super);
    function DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams };
var DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity, _super);
    function DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity };
var DatastreamProjectsLocationsConnectionProfilesDiscoverRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesDiscoverRequest, _super);
    function DatastreamProjectsLocationsConnectionProfilesDiscoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesDiscoverPathParams)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesDiscoverQueryParams)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DiscoverConnectionProfileRequestInput)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesDiscoverSecurity)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsConnectionProfilesDiscoverRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesDiscoverRequest };
var DatastreamProjectsLocationsConnectionProfilesDiscoverResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesDiscoverResponse, _super);
    function DatastreamProjectsLocationsConnectionProfilesDiscoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DiscoverConnectionProfileResponse)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverResponse.prototype, "discoverConnectionProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsConnectionProfilesDiscoverResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsConnectionProfilesDiscoverResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesDiscoverResponse };
