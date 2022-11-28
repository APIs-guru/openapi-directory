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
var NetworkconnectivityProjectsLocationsSpokesPatchPathParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesPatchPathParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchPathParams.prototype, "name", void 0);
    return NetworkconnectivityProjectsLocationsSpokesPatchPathParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesPatchPathParams };
var NetworkconnectivityProjectsLocationsSpokesPatchQueryParams = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesPatchQueryParams, _super);
    function NetworkconnectivityProjectsLocationsSpokesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkconnectivityProjectsLocationsSpokesPatchQueryParams;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesPatchQueryParams };
var NetworkconnectivityProjectsLocationsSpokesPatchSecurity = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesPatchSecurity, _super);
    function NetworkconnectivityProjectsLocationsSpokesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkconnectivityProjectsLocationsSpokesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkconnectivityProjectsLocationsSpokesPatchSecurity.prototype, "oauth2c", void 0);
    return NetworkconnectivityProjectsLocationsSpokesPatchSecurity;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesPatchSecurity };
var NetworkconnectivityProjectsLocationsSpokesPatchRequest = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesPatchRequest, _super);
    function NetworkconnectivityProjectsLocationsSpokesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesPatchPathParams)
    ], NetworkconnectivityProjectsLocationsSpokesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesPatchQueryParams)
    ], NetworkconnectivityProjectsLocationsSpokesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SpokeInput)
    ], NetworkconnectivityProjectsLocationsSpokesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkconnectivityProjectsLocationsSpokesPatchSecurity)
    ], NetworkconnectivityProjectsLocationsSpokesPatchRequest.prototype, "security", void 0);
    return NetworkconnectivityProjectsLocationsSpokesPatchRequest;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesPatchRequest };
var NetworkconnectivityProjectsLocationsSpokesPatchResponse = /** @class */ (function (_super) {
    __extends(NetworkconnectivityProjectsLocationsSpokesPatchResponse, _super);
    function NetworkconnectivityProjectsLocationsSpokesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkconnectivityProjectsLocationsSpokesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], NetworkconnectivityProjectsLocationsSpokesPatchResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkconnectivityProjectsLocationsSpokesPatchResponse.prototype, "statusCode", void 0);
    return NetworkconnectivityProjectsLocationsSpokesPatchResponse;
}(SpeakeasyBase));
export { NetworkconnectivityProjectsLocationsSpokesPatchResponse };
