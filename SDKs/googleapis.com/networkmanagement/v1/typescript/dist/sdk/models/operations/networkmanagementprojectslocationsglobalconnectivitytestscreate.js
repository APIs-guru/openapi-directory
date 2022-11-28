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
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams.prototype, "parent", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testId" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "testId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectivityTestInput)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest.prototype, "security", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest };
var NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse, _super);
    function NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse.prototype, "statusCode", void 0);
    return NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse;
}(SpeakeasyBase));
export { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse };
