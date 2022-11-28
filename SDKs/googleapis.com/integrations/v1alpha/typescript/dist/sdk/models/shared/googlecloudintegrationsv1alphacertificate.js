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
import { GoogleCloudIntegrationsV1alphaClientCertificate } from "./googlecloudintegrationsv1alphaclientcertificate";
export var GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
(function (GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum) {
    GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum["Active"] = "ACTIVE";
    GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum["Expired"] = "EXPIRED";
})(GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum || (GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum = {}));
// GoogleCloudIntegrationsV1alphaCertificate
/**
 * The certificate definition
**/
var GoogleCloudIntegrationsV1alphaCertificate = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaCertificate, _super);
    function GoogleCloudIntegrationsV1alphaCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateStatus" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "certificateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "credentialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawCertificate" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaClientCertificate)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "rawCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestorId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "requestorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validEndTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "validEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validStartTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificate.prototype, "validStartTime", void 0);
    return GoogleCloudIntegrationsV1alphaCertificate;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaCertificate };
// GoogleCloudIntegrationsV1alphaCertificateInput
/**
 * The certificate definition
**/
var GoogleCloudIntegrationsV1alphaCertificateInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaCertificateInput, _super);
    function GoogleCloudIntegrationsV1alphaCertificateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateStatus" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "certificateStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentialId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "credentialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawCertificate" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaClientCertificate)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "rawCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestorId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaCertificateInput.prototype, "requestorId", void 0);
    return GoogleCloudIntegrationsV1alphaCertificateInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaCertificateInput };
