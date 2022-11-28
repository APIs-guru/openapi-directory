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
var NetworkservicesProjectsLocationsTlsRoutesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesCreatePathParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesCreatePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesCreatePathParams };
var NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tlsRouteId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "tlsRouteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams };
var NetworkservicesProjectsLocationsTlsRoutesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesCreateSecurity, _super);
    function NetworkservicesProjectsLocationsTlsRoutesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesCreateSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesCreateSecurity };
var NetworkservicesProjectsLocationsTlsRoutesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesCreateRequest, _super);
    function NetworkservicesProjectsLocationsTlsRoutesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesCreatePathParams)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesCreateQueryParams)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TlsRouteInput)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesCreateSecurity)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesCreateRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesCreateRequest };
var NetworkservicesProjectsLocationsTlsRoutesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesCreateResponse, _super);
    function NetworkservicesProjectsLocationsTlsRoutesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsTlsRoutesCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesCreateResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesCreateResponse };
