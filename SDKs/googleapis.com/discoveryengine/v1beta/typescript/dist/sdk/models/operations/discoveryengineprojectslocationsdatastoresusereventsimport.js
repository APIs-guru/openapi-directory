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
var DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams.prototype, "parent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity };
var DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsImportPathParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsImportQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest };
var DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse };
