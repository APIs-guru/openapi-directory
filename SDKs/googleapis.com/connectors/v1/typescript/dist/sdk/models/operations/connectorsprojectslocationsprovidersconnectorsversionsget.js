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
var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams.prototype, "name", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams };
export var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum;
(function (ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum) {
    ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum["ConnectorVersionViewUnspecified"] = "CONNECTOR_VERSION_VIEW_UNSPECIFIED";
    ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum["ConnectorVersionViewBasic"] = "CONNECTOR_VERSION_VIEW_BASIC";
    ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum["ConnectorVersionViewFull"] = "CONNECTOR_VERSION_VIEW_FULL";
})(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum || (ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum = {}));
var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams.prototype, "view", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsGetPathParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsGetQueryParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConnectorVersion)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse.prototype, "connectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse };
