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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams, _super);
    function NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams.prototype, "parent", void 0);
    return NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams };
var NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams, _super);
    function NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hubId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "hubId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams };
var NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity, _super);
    function NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity };
var NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, _super);
    function NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsGlobalHubsCreatePathParams)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsGlobalHubsCreateQueryParams)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Hub)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest };
var NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse, _super);
    function NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse };
