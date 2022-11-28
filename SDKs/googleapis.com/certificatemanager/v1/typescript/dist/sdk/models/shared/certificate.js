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
import { ManagedCertificateInput } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";
import { ManagedCertificate } from "./managedcertificate";
export var CertificateScopeEnum;
(function (CertificateScopeEnum) {
    CertificateScopeEnum["Default"] = "DEFAULT";
    CertificateScopeEnum["EdgeCache"] = "EDGE_CACHE";
})(CertificateScopeEnum || (CertificateScopeEnum = {}));
// CertificateInput
/**
 * Defines TLS certificate.
**/
var CertificateInput = /** @class */ (function (_super) {
    __extends(CertificateInput, _super);
    function CertificateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CertificateInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managed" }),
        __metadata("design:type", ManagedCertificateInput)
    ], CertificateInput.prototype, "managed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], CertificateInput.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfManaged" }),
        __metadata("design:type", SelfManagedCertificate)
    ], CertificateInput.prototype, "selfManaged", void 0);
    return CertificateInput;
}(SpeakeasyBase));
export { CertificateInput };
// Certificate
/**
 * Defines TLS certificate.
**/
var Certificate = /** @class */ (function (_super) {
    __extends(Certificate, _super);
    function Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Certificate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managed" }),
        __metadata("design:type", ManagedCertificate)
    ], Certificate.prototype, "managed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pemCertificate" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "pemCertificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sanDnsnames" }),
        __metadata("design:type", Array)
    ], Certificate.prototype, "sanDnsnames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfManaged" }),
        __metadata("design:type", SelfManagedCertificate)
    ], Certificate.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "updateTime", void 0);
    return Certificate;
}(SpeakeasyBase));
export { Certificate };
