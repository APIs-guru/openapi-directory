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
var PubsubliteAdminProjectsLocationsReservationsCreatePathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsCreatePathParams, _super);
    function PubsubliteAdminProjectsLocationsReservationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreatePathParams.prototype, "parent", void 0);
    return PubsubliteAdminProjectsLocationsReservationsCreatePathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsCreatePathParams };
var PubsubliteAdminProjectsLocationsReservationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsCreateQueryParams, _super);
    function PubsubliteAdminProjectsLocationsReservationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reservationId" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "reservationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsReservationsCreateQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsCreateQueryParams };
var PubsubliteAdminProjectsLocationsReservationsCreateSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsCreateSecurity, _super);
    function PubsubliteAdminProjectsLocationsReservationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsReservationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsReservationsCreateSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsReservationsCreateSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsCreateSecurity };
var PubsubliteAdminProjectsLocationsReservationsCreateRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsCreateRequest, _super);
    function PubsubliteAdminProjectsLocationsReservationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsCreatePathParams)
    ], PubsubliteAdminProjectsLocationsReservationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsCreateQueryParams)
    ], PubsubliteAdminProjectsLocationsReservationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Reservation)
    ], PubsubliteAdminProjectsLocationsReservationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsReservationsCreateSecurity)
    ], PubsubliteAdminProjectsLocationsReservationsCreateRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsReservationsCreateRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsCreateRequest };
var PubsubliteAdminProjectsLocationsReservationsCreateResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsReservationsCreateResponse, _super);
    function PubsubliteAdminProjectsLocationsReservationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsReservationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reservation)
    ], PubsubliteAdminProjectsLocationsReservationsCreateResponse.prototype, "reservation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsReservationsCreateResponse.prototype, "statusCode", void 0);
    return PubsubliteAdminProjectsLocationsReservationsCreateResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsReservationsCreateResponse };
