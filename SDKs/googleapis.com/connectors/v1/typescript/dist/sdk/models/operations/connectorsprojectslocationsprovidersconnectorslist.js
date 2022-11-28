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
var ConnectorsProjectsLocationsProvidersConnectorsListPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsListPathParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListPathParams.prototype, "parent", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsListPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsListPathParams };
var ConnectorsProjectsLocationsProvidersConnectorsListQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsListQueryParams, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsListQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsListQueryParams };
var ConnectorsProjectsLocationsProvidersConnectorsListSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsListSecurity, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsProvidersConnectorsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsProvidersConnectorsListSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsListSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsListSecurity };
var ConnectorsProjectsLocationsProvidersConnectorsListRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsListRequest, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsListPathParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsListQueryParams)
    ], ConnectorsProjectsLocationsProvidersConnectorsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersConnectorsListSecurity)
    ], ConnectorsProjectsLocationsProvidersConnectorsListRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsListRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsListRequest };
var ConnectorsProjectsLocationsProvidersConnectorsListResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersConnectorsListResponse, _super);
    function ConnectorsProjectsLocationsProvidersConnectorsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersConnectorsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConnectorsResponse)
    ], ConnectorsProjectsLocationsProvidersConnectorsListResponse.prototype, "listConnectorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersConnectorsListResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsProvidersConnectorsListResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersConnectorsListResponse };
