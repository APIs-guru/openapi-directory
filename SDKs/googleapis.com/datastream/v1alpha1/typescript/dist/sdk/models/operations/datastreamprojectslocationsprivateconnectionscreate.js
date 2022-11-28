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
var DatastreamProjectsLocationsPrivateConnectionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsPrivateConnectionsCreatePathParams, _super);
    function DatastreamProjectsLocationsPrivateConnectionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreatePathParams.prototype, "parent", void 0);
    return DatastreamProjectsLocationsPrivateConnectionsCreatePathParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsPrivateConnectionsCreatePathParams };
var DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams, _super);
    function DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privateConnectionId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "privateConnectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams };
var DatastreamProjectsLocationsPrivateConnectionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsPrivateConnectionsCreateSecurity, _super);
    function DatastreamProjectsLocationsPrivateConnectionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateSecurity.prototype, "oauth2c", void 0);
    return DatastreamProjectsLocationsPrivateConnectionsCreateSecurity;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsPrivateConnectionsCreateSecurity };
var DatastreamProjectsLocationsPrivateConnectionsCreateRequest = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsPrivateConnectionsCreateRequest, _super);
    function DatastreamProjectsLocationsPrivateConnectionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsPrivateConnectionsCreatePathParams)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsPrivateConnectionsCreateQueryParams)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PrivateConnectionInput)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastreamProjectsLocationsPrivateConnectionsCreateSecurity)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateRequest.prototype, "security", void 0);
    return DatastreamProjectsLocationsPrivateConnectionsCreateRequest;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsPrivateConnectionsCreateRequest };
var DatastreamProjectsLocationsPrivateConnectionsCreateResponse = /** @class */ (function (_super) {
    __extends(DatastreamProjectsLocationsPrivateConnectionsCreateResponse, _super);
    function DatastreamProjectsLocationsPrivateConnectionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastreamProjectsLocationsPrivateConnectionsCreateResponse.prototype, "statusCode", void 0);
    return DatastreamProjectsLocationsPrivateConnectionsCreateResponse;
}(SpeakeasyBase));
export { DatastreamProjectsLocationsPrivateConnectionsCreateResponse };
