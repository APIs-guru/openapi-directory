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
var PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=caPool" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams.prototype, "caPool", void 0);
    return PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams };
var PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams };
var PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity };
var PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FetchCaCertsRequest)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest };
var PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FetchCaCertsResponse)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse.prototype, "fetchCaCertsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse };
