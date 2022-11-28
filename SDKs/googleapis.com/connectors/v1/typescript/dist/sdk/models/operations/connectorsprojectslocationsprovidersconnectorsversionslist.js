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
var ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams.prototype, "parent", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams };
export var ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum;
(function (ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum) {
    ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum["ConnectorVersionViewUnspecified"] = "CONNECTOR_VERSION_VIEW_UNSPECIFIED";
    ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum["ConnectorVersionViewBasic"] = "CONNECTOR_VERSION_VIEW_BASIC";
    ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum["ConnectorVersionViewFull"] = "CONNECTOR_VERSION_VIEW_FULL";
})(ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum || (ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum = {}));
var ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams.prototype, "view", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsListPathParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsListQueryParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest };
var ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConnectorVersionsResponse)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse.prototype, "listConnectorVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse };
