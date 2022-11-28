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
var NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams, _super);
    function NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams.prototype, "parent", void 0);
    return NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams };
var NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams, _super);
    function NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=internalRangeId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "internalRangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams };
var NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity, _super);
    function NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity };
var NetworkconnectivityProjectsLocationsInternalRangesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsInternalRangesCreateRequest, _super);
    function NetworkconnectivityProjectsLocationsInternalRangesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsInternalRangesCreatePathParams)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsInternalRangesCreateQueryParams)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InternalRangeInput)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsInternalRangesCreateRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsInternalRangesCreateRequest };
var NetworkconnectivityProjectsLocationsInternalRangesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsInternalRangesCreateResponse, _super);
    function NetworkconnectivityProjectsLocationsInternalRangesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsInternalRangesCreateResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsInternalRangesCreateResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsInternalRangesCreateResponse };
