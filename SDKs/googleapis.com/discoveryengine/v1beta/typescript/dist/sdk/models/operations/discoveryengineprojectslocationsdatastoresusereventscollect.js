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
var DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams.prototype, "parent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ets" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "ets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uri" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userEvent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams.prototype, "userEvent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams };
var DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity };
var DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsCollectPathParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsCollectQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest };
var DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse.prototype, "googleApiHttpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse };
