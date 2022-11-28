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
var CertificatemanagerProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsCancelPathParams, _super);
    function CertificatemanagerProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return CertificatemanagerProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsCancelPathParams };
var CertificatemanagerProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsCancelQueryParams, _super);
    function CertificatemanagerProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsCancelQueryParams };
var CertificatemanagerProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsCancelSecurity, _super);
    function CertificatemanagerProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsCancelSecurity };
var CertificatemanagerProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsCancelRequest, _super);
    function CertificatemanagerProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsCancelPathParams)
    ], CertificatemanagerProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsCancelQueryParams)
    ], CertificatemanagerProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CertificatemanagerProjectsLocationsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsOperationsCancelSecurity)
    ], CertificatemanagerProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsCancelRequest };
var CertificatemanagerProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsOperationsCancelResponse, _super);
    function CertificatemanagerProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CertificatemanagerProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsOperationsCancelResponse };
