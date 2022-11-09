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
var NetworkconnectivityProjectsLocationsSpokesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesCreatePathParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreatePathParams.prototype, "parent", void 0);
    return NetworkconnectivityProjectsLocationsSpokesCreatePathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesCreatePathParams };
var NetworkconnectivityProjectsLocationsSpokesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesCreateQueryParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=spokeId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "spokeId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsSpokesCreateQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesCreateQueryParams };
var NetworkconnectivityProjectsLocationsSpokesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesCreateSecurity, _super);
    function NetworkconnectivityProjectsLocationsSpokesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsSpokesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsSpokesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsSpokesCreateSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesCreateSecurity };
var NetworkconnectivityProjectsLocationsSpokesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesCreateRequest, _super);
    function NetworkconnectivityProjectsLocationsSpokesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesCreatePathParams)
    ], NetworkconnectivityProjectsLocationsSpokesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesCreateQueryParams)
    ], NetworkconnectivityProjectsLocationsSpokesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Spoke)
    ], NetworkconnectivityProjectsLocationsSpokesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesCreateSecurity)
    ], NetworkconnectivityProjectsLocationsSpokesCreateRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsSpokesCreateRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesCreateRequest };
var NetworkconnectivityProjectsLocationsSpokesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesCreateResponse, _super);
    function NetworkconnectivityProjectsLocationsSpokesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], NetworkconnectivityProjectsLocationsSpokesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsSpokesCreateResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsSpokesCreateResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesCreateResponse };
