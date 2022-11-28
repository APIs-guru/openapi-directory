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
var PubsubliteAdminProjectsLocationsReservationsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsListPathParams, _super);
    function PubsubliteAdminProjectsLocationsReservationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListPathParams.prototype, "parent", void 0);
    return PubsubliteAdminProjectsLocationsReservationsListPathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsListPathParams };
var PubsubliteAdminProjectsLocationsReservationsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsListQueryParams, _super);
    function PubsubliteAdminProjectsLocationsReservationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsReservationsListQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsListQueryParams };
var PubsubliteAdminProjectsLocationsReservationsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsListSecurity, _super);
    function PubsubliteAdminProjectsLocationsReservationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsReservationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsReservationsListSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsReservationsListSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsListSecurity };
var PubsubliteAdminProjectsLocationsReservationsListRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsListRequest, _super);
    function PubsubliteAdminProjectsLocationsReservationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsListPathParams)
    ], PubsubliteAdminProjectsLocationsReservationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsListQueryParams)
    ], PubsubliteAdminProjectsLocationsReservationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsListSecurity)
    ], PubsubliteAdminProjectsLocationsReservationsListRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsReservationsListRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsListRequest };
var PubsubliteAdminProjectsLocationsReservationsListResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsListResponse, _super);
    function PubsubliteAdminProjectsLocationsReservationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReservationsResponse)
    ], PubsubliteAdminProjectsLocationsReservationsListResponse.prototype, "listReservationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsReservationsListResponse.prototype, "statusCode", void 0);
    return PubsubliteAdminProjectsLocationsReservationsListResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsListResponse };
