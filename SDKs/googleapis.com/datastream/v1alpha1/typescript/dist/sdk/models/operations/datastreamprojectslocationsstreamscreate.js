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
var DatastreamProjectsLocationsStreamsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsCreatePathParams, _super);
    function DatastreamProjectsLocationsStreamsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreatePathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsStreamsCreatePathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsCreatePathParams };
var DatastreamProjectsLocationsStreamsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsCreateQueryParams, _super);
    function DatastreamProjectsLocationsStreamsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "streamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsStreamsCreateQueryParams.prototype, "validateOnly", void 0);
    return DatastreamProjectsLocationsStreamsCreateQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsCreateQueryParams };
var DatastreamProjectsLocationsStreamsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsCreateSecurity, _super);
    function DatastreamProjectsLocationsStreamsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsStreamsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsStreamsCreateSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsStreamsCreateSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsCreateSecurity };
var DatastreamProjectsLocationsStreamsCreateRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsCreateRequest, _super);
    function DatastreamProjectsLocationsStreamsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsCreatePathParams)
    ], DatastreamProjectsLocationsStreamsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsCreateQueryParams)
    ], DatastreamProjectsLocationsStreamsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StreamInput)
    ], DatastreamProjectsLocationsStreamsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsStreamsCreateSecurity)
    ], DatastreamProjectsLocationsStreamsCreateRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsStreamsCreateRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsCreateRequest };
var DatastreamProjectsLocationsStreamsCreateResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsStreamsCreateResponse, _super);
    function DatastreamProjectsLocationsStreamsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsStreamsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatastreamProjectsLocationsStreamsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsStreamsCreateResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsStreamsCreateResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsStreamsCreateResponse };
