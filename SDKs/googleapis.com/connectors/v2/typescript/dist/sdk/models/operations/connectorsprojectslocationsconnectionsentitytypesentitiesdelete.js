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
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams.prototype, "name", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeletePathParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteQueryParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteSecurity)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteRequest };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesDeleteResponse };
