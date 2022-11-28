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
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams.prototype, "name", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchPathParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchQueryParams)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityInput)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchSecurity)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchRequest };
var ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse, _super);
    function ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Entity)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsEntityTypesEntitiesPatchResponse };
