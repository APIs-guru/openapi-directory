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
// Certificate
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
var Certificate = /** @class */ (function (_super) {
    __extends(Certificate, _super);
    function Certificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notAfterTime" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "notAfterTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBeforeTime" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "notBeforeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parsed" }),
        __metadata("design:type", Boolean)
    ], Certificate.prototype, "parsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawDer" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "rawDer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Fingerprint" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "sha256Fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], Certificate.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectAlternativeDnsNames" }),
        __metadata("design:type", Array)
    ], Certificate.prototype, "subjectAlternativeDnsNames", void 0);
    return Certificate;
}(SpeakeasyBase));
export { Certificate };
// CertificateInput
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
var CertificateInput = /** @class */ (function (_super) {
    __extends(CertificateInput, _super);
    function CertificateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawDer" }),
        __metadata("design:type", String)
    ], CertificateInput.prototype, "rawDer", void 0);
    return CertificateInput;
}(SpeakeasyBase));
export { CertificateInput };
