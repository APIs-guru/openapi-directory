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
var ConnectorsProjectsLocationsProvidersListPathParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersListPathParams, _super);
    function ConnectorsProjectsLocationsProvidersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListPathParams.prototype, "parent", void 0);
    return ConnectorsProjectsLocationsProvidersListPathParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersListPathParams };
var ConnectorsProjectsLocationsProvidersListQueryParams = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersListQueryParams, _super);
    function ConnectorsProjectsLocationsProvidersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListQueryParams.prototype, "uploadProtocol", void 0);
    return ConnectorsProjectsLocationsProvidersListQueryParams;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersListQueryParams };
var ConnectorsProjectsLocationsProvidersListSecurity = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersListSecurity, _super);
    function ConnectorsProjectsLocationsProvidersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ConnectorsProjectsLocationsProvidersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ConnectorsProjectsLocationsProvidersListSecurity.prototype, "oauth2c", void 0);
    return ConnectorsProjectsLocationsProvidersListSecurity;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersListSecurity };
var ConnectorsProjectsLocationsProvidersListRequest = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersListRequest, _super);
    function ConnectorsProjectsLocationsProvidersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersListPathParams)
    ], ConnectorsProjectsLocationsProvidersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersListQueryParams)
    ], ConnectorsProjectsLocationsProvidersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConnectorsProjectsLocationsProvidersListSecurity)
    ], ConnectorsProjectsLocationsProvidersListRequest.prototype, "security", void 0);
    return ConnectorsProjectsLocationsProvidersListRequest;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersListRequest };
var ConnectorsProjectsLocationsProvidersListResponse = /** @class */ (function (_super) {
    __extends(ConnectorsProjectsLocationsProvidersListResponse, _super);
    function ConnectorsProjectsLocationsProvidersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConnectorsProjectsLocationsProvidersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProvidersResponse)
    ], ConnectorsProjectsLocationsProvidersListResponse.prototype, "listProvidersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConnectorsProjectsLocationsProvidersListResponse.prototype, "statusCode", void 0);
    return ConnectorsProjectsLocationsProvidersListResponse;
}(SpeakeasyBase));
export { ConnectorsProjectsLocationsProvidersListResponse };
