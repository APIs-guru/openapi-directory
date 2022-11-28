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
var ConnectorsProjectsLocationsConnectionsActionsListPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsListPathParams, _super);
    function ConnectorsProjectsLocationsConnectionsActionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListPathParams.prototype, "parent", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsListPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsListPathParams };
var ConnectorsProjectsLocationsConnectionsActionsListQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsListQueryParams, _super);
    function ConnectorsProjectsLocationsConnectionsActionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsListQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsListQueryParams };
var ConnectorsProjectsLocationsConnectionsActionsListSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsListSecurity, _super);
    function ConnectorsProjectsLocationsConnectionsActionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsConnectionsActionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsConnectionsActionsListSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsListSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsListSecurity };
var ConnectorsProjectsLocationsConnectionsActionsListRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsListRequest, _super);
    function ConnectorsProjectsLocationsConnectionsActionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsListPathParams)
    ], ConnectorsProjectsLocationsConnectionsActionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsListQueryParams)
    ], ConnectorsProjectsLocationsConnectionsActionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsConnectionsActionsListSecurity)
    ], ConnectorsProjectsLocationsConnectionsActionsListRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsListRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsListRequest };
var ConnectorsProjectsLocationsConnectionsActionsListResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsConnectionsActionsListResponse, _super);
    function ConnectorsProjectsLocationsConnectionsActionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsConnectionsActionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListActionsResponse)
    ], ConnectorsProjectsLocationsConnectionsActionsListResponse.prototype, "listActionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsConnectionsActionsListResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsConnectionsActionsListResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsConnectionsActionsListResponse };
