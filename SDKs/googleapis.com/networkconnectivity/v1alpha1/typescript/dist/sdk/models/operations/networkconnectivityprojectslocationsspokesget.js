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
var NetworkconnectivityProjectsLocationsSpokesGetPathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesGetPathParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetPathParams.prototype, "name", void 0);
    return NetworkconnectivityProjectsLocationsSpokesGetPathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesGetPathParams };
var NetworkconnectivityProjectsLocationsSpokesGetQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesGetQueryParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsSpokesGetQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesGetQueryParams };
var NetworkconnectivityProjectsLocationsSpokesGetSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesGetSecurity, _super);
    function NetworkconnectivityProjectsLocationsSpokesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsSpokesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsSpokesGetSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsSpokesGetSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesGetSecurity };
var NetworkconnectivityProjectsLocationsSpokesGetRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesGetRequest, _super);
    function NetworkconnectivityProjectsLocationsSpokesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesGetPathParams)
    ], NetworkconnectivityProjectsLocationsSpokesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesGetQueryParams)
    ], NetworkconnectivityProjectsLocationsSpokesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesGetSecurity)
    ], NetworkconnectivityProjectsLocationsSpokesGetRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsSpokesGetRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesGetRequest };
var NetworkconnectivityProjectsLocationsSpokesGetResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesGetResponse, _super);
    function NetworkconnectivityProjectsLocationsSpokesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Spoke)
    ], NetworkconnectivityProjectsLocationsSpokesGetResponse.prototype, "spoke", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsSpokesGetResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsSpokesGetResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesGetResponse };
