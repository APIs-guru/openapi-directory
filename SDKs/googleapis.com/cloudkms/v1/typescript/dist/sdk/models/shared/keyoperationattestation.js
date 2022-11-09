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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateChains } from "./certificatechains";
export var KeyOperationAttestationFormatEnum;
(function (KeyOperationAttestationFormatEnum) {
    KeyOperationAttestationFormatEnum["AttestationFormatUnspecified"] = "ATTESTATION_FORMAT_UNSPECIFIED";
    KeyOperationAttestationFormatEnum["CaviumV1Compressed"] = "CAVIUM_V1_COMPRESSED";
    KeyOperationAttestationFormatEnum["CaviumV2Compressed"] = "CAVIUM_V2_COMPRESSED";
})(KeyOperationAttestationFormatEnum || (KeyOperationAttestationFormatEnum = {}));
// KeyOperationAttestation
/**
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
var KeyOperationAttestation = /** @class */ (function (_super) {
    __extends(KeyOperationAttestation, _super);
    function KeyOperationAttestation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=certChains" }),
        __metadata("design:type", CertificateChains)
    ], KeyOperationAttestation.prototype, "certChains", void 0);
    __decorate([
        Metadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], KeyOperationAttestation.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], KeyOperationAttestation.prototype, "format", void 0);
    return KeyOperationAttestation;
}(SpeakeasyBase));
export { KeyOperationAttestation };
