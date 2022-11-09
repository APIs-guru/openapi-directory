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
var NetworkconnectivityProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsCancelPathParams, _super);
    function NetworkconnectivityProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return NetworkconnectivityProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsCancelPathParams };
var NetworkconnectivityProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsCancelQueryParams, _super);
    function NetworkconnectivityProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsCancelQueryParams };
var NetworkconnectivityProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsCancelSecurity, _super);
    function NetworkconnectivityProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsCancelSecurity };
var NetworkconnectivityProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsCancelRequest, _super);
    function NetworkconnectivityProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsCancelPathParams)
    ], NetworkconnectivityProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsCancelQueryParams)
    ], NetworkconnectivityProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], NetworkconnectivityProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsCancelSecurity)
    ], NetworkconnectivityProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsCancelRequest };
var NetworkconnectivityProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsCancelResponse, _super);
    function NetworkconnectivityProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], NetworkconnectivityProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsCancelResponse };
