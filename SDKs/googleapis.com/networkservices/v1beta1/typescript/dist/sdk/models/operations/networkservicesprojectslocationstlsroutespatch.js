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
var NetworkservicesProjectsLocationsTlsRoutesPatchPathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesPatchPathParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchPathParams.prototype, "name", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesPatchPathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesPatchPathParams };
var NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams };
var NetworkservicesProjectsLocationsTlsRoutesPatchSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesPatchSecurity, _super);
    function NetworkservicesProjectsLocationsTlsRoutesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesPatchSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesPatchSecurity };
var NetworkservicesProjectsLocationsTlsRoutesPatchRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesPatchRequest, _super);
    function NetworkservicesProjectsLocationsTlsRoutesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesPatchPathParams)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesPatchQueryParams)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TlsRouteInput)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesPatchSecurity)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesPatchRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesPatchRequest };
var NetworkservicesProjectsLocationsTlsRoutesPatchResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesPatchResponse, _super);
    function NetworkservicesProjectsLocationsTlsRoutesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsTlsRoutesPatchResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesPatchResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesPatchResponse };
