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
export var EncryptResponseProtectionLevelEnum;
(function (EncryptResponseProtectionLevelEnum) {
    EncryptResponseProtectionLevelEnum["ProtectionLevelUnspecified"] = "PROTECTION_LEVEL_UNSPECIFIED";
    EncryptResponseProtectionLevelEnum["Software"] = "SOFTWARE";
    EncryptResponseProtectionLevelEnum["Hsm"] = "HSM";
    EncryptResponseProtectionLevelEnum["External"] = "EXTERNAL";
    EncryptResponseProtectionLevelEnum["ExternalVpc"] = "EXTERNAL_VPC";
})(EncryptResponseProtectionLevelEnum || (EncryptResponseProtectionLevelEnum = {}));
// EncryptResponse
/**
 * Response message for KeyManagementService.Encrypt.
**/
var EncryptResponse = /** @class */ (function (_super) {
    __extends(EncryptResponse, _super);
    function EncryptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ciphertext" }),
        __metadata("design:type", String)
    ], EncryptResponse.prototype, "ciphertext", void 0);
    __decorate([
        Metadata({ data: "json, name=ciphertextCrc32c" }),
        __metadata("design:type", String)
    ], EncryptResponse.prototype, "ciphertextCrc32c", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EncryptResponse.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=protectionLevel" }),
        __metadata("design:type", String)
    ], EncryptResponse.prototype, "protectionLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=verifiedAdditionalAuthenticatedDataCrc32c" }),
        __metadata("design:type", Boolean)
    ], EncryptResponse.prototype, "verifiedAdditionalAuthenticatedDataCrc32c", void 0);
    __decorate([
        Metadata({ data: "json, name=verifiedPlaintextCrc32c" }),
        __metadata("design:type", Boolean)
    ], EncryptResponse.prototype, "verifiedPlaintextCrc32c", void 0);
    return EncryptResponse;
}(SpeakeasyBase));
export { EncryptResponse };
