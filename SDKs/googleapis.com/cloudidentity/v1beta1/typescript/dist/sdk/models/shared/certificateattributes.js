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
import { CertificateTemplate } from "./certificatetemplate";
export var CertificateAttributesValidationStateEnum;
(function (CertificateAttributesValidationStateEnum) {
    CertificateAttributesValidationStateEnum["CertificateValidationStateUnspecified"] = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED";
    CertificateAttributesValidationStateEnum["ValidationSuccessful"] = "VALIDATION_SUCCESSFUL";
    CertificateAttributesValidationStateEnum["ValidationFailed"] = "VALIDATION_FAILED";
})(CertificateAttributesValidationStateEnum || (CertificateAttributesValidationStateEnum = {}));
// CertificateAttributes
/**
 * Stores information about a certificate.
**/
var CertificateAttributes = /** @class */ (function (_super) {
    __extends(CertificateAttributes, _super);
    function CertificateAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificateTemplate" }),
        __metadata("design:type", CertificateTemplate)
    ], CertificateAttributes.prototype, "certificateTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "subject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbprint" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "thumbprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationState" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "validationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validityExpirationTime" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "validityExpirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validityStartTime" }),
        __metadata("design:type", String)
    ], CertificateAttributes.prototype, "validityStartTime", void 0);
    return CertificateAttributes;
}(SpeakeasyBase));
export { CertificateAttributes };
