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
var NetworkconnectivityProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsListPathParams, _super);
    function NetworkconnectivityProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return NetworkconnectivityProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsListPathParams };
var NetworkconnectivityProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsListQueryParams, _super);
    function NetworkconnectivityProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsListQueryParams };
var NetworkconnectivityProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsListSecurity, _super);
    function NetworkconnectivityProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsOperationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsOperationsListSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsListSecurity };
var NetworkconnectivityProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsListRequest, _super);
    function NetworkconnectivityProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsListPathParams)
    ], NetworkconnectivityProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsListQueryParams)
    ], NetworkconnectivityProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsOperationsListSecurity)
    ], NetworkconnectivityProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsListRequest };
var NetworkconnectivityProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsOperationsListResponse, _super);
    function NetworkconnectivityProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningListOperationsResponse)
    ], NetworkconnectivityProjectsLocationsOperationsListResponse.prototype, "googleLongrunningListOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsOperationsListResponse };
