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
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams.prototype, "name", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.passphrase" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "clientCertificatePassphrase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.sslCertificate" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "clientCertificateSslCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest };
var IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse, _super);
    function IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaSfdcChannel)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse.prototype, "googleCloudIntegrationsV1alphaSfdcChannel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse };
