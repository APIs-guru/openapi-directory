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
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams.prototype, "name", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity.prototype, "oauth2c", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunPathParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunQueryParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunSecurity)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest.prototype, "security", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunRequest };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse.prototype, "statusCode", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerunResponse };
