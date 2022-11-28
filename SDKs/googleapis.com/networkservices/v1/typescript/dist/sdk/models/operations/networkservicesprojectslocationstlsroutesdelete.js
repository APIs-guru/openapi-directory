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
var NetworkservicesProjectsLocationsTlsRoutesDeletePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesDeletePathParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeletePathParams.prototype, "name", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesDeletePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesDeletePathParams };
var NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams, _super);
    function NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams };
var NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity, _super);
    function NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity };
var NetworkservicesProjectsLocationsTlsRoutesDeleteRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesDeleteRequest, _super);
    function NetworkservicesProjectsLocationsTlsRoutesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesDeletePathParams)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesDeleteQueryParams)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesDeleteRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesDeleteRequest };
var NetworkservicesProjectsLocationsTlsRoutesDeleteResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsTlsRoutesDeleteResponse, _super);
    function NetworkservicesProjectsLocationsTlsRoutesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsTlsRoutesDeleteResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsTlsRoutesDeleteResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsTlsRoutesDeleteResponse };
