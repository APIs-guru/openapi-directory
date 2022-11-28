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
var NetworkservicesProjectsLocationsTlsRoutesGetPathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesGetPathParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetPathParams.prototype, "name", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesGetPathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesGetPathParams };
var NetworkservicesProjectsLocationsTlsRoutesGetQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesGetQueryParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesGetQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesGetQueryParams };
var NetworkservicesProjectsLocationsTlsRoutesGetSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesGetSecurity, _super);
    function NetworkservicesProjectsLocationsTlsRoutesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsTlsRoutesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsTlsRoutesGetSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesGetSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesGetSecurity };
var NetworkservicesProjectsLocationsTlsRoutesGetRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesGetRequest, _super);
    function NetworkservicesProjectsLocationsTlsRoutesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesGetPathParams)
    ], NetworkservicesProjectsLocationsTlsRoutesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesGetQueryParams)
    ], NetworkservicesProjectsLocationsTlsRoutesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesGetSecurity)
    ], NetworkservicesProjectsLocationsTlsRoutesGetRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesGetRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesGetRequest };
var NetworkservicesProjectsLocationsTlsRoutesGetResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesGetResponse, _super);
    function NetworkservicesProjectsLocationsTlsRoutesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsTlsRoutesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TlsRoute)
    ], NetworkservicesProjectsLocationsTlsRoutesGetResponse.prototype, "tlsRoute", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesGetResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesGetResponse };
