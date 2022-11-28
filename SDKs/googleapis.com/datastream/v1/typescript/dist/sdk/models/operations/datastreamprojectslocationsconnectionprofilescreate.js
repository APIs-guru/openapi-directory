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
var DatastreamProjectsLocationsConnectionProfilesCreatePathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesCreatePathParams, _super);
    function DatastreamProjectsLocationsConnectionProfilesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreatePathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsConnectionProfilesCreatePathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesCreatePathParams };
var DatastreamProjectsLocationsConnectionProfilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesCreateQueryParams, _super);
    function DatastreamProjectsLocationsConnectionProfilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionProfileId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "connectionProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsConnectionProfilesCreateQueryParams.prototype, "validateOnly", void 0);
    return DatastreamProjectsLocationsConnectionProfilesCreateQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesCreateQueryParams };
var DatastreamProjectsLocationsConnectionProfilesCreateSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesCreateSecurity, _super);
    function DatastreamProjectsLocationsConnectionProfilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsConnectionProfilesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsConnectionProfilesCreateSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsConnectionProfilesCreateSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesCreateSecurity };
var DatastreamProjectsLocationsConnectionProfilesCreateRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesCreateRequest, _super);
    function DatastreamProjectsLocationsConnectionProfilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesCreatePathParams)
    ], DatastreamProjectsLocationsConnectionProfilesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesCreateQueryParams)
    ], DatastreamProjectsLocationsConnectionProfilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectionProfileInput)
    ], DatastreamProjectsLocationsConnectionProfilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsConnectionProfilesCreateSecurity)
    ], DatastreamProjectsLocationsConnectionProfilesCreateRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsConnectionProfilesCreateRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesCreateRequest };
var DatastreamProjectsLocationsConnectionProfilesCreateResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsConnectionProfilesCreateResponse, _super);
    function DatastreamProjectsLocationsConnectionProfilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsConnectionProfilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatastreamProjectsLocationsConnectionProfilesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsConnectionProfilesCreateResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsConnectionProfilesCreateResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsConnectionProfilesCreateResponse };
