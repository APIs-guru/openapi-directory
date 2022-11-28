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
var DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams.prototype, "parent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity };
var DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsWritePathParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsWriteQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaUserEvent)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest };
var DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaUserEvent)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse.prototype, "googleCloudDiscoveryengineV1betaUserEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse };
