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
export var KeyVersionSpecAlgorithmEnum;
(function (KeyVersionSpecAlgorithmEnum) {
    KeyVersionSpecAlgorithmEnum["SignHashAlgorithmUnspecified"] = "SIGN_HASH_ALGORITHM_UNSPECIFIED";
    KeyVersionSpecAlgorithmEnum["RsaPss2048Sha256"] = "RSA_PSS_2048_SHA256";
    KeyVersionSpecAlgorithmEnum["RsaPss3072Sha256"] = "RSA_PSS_3072_SHA256";
    KeyVersionSpecAlgorithmEnum["RsaPss4096Sha256"] = "RSA_PSS_4096_SHA256";
    KeyVersionSpecAlgorithmEnum["RsaPkcs12048Sha256"] = "RSA_PKCS1_2048_SHA256";
    KeyVersionSpecAlgorithmEnum["RsaPkcs13072Sha256"] = "RSA_PKCS1_3072_SHA256";
    KeyVersionSpecAlgorithmEnum["RsaPkcs14096Sha256"] = "RSA_PKCS1_4096_SHA256";
    KeyVersionSpecAlgorithmEnum["EcP256Sha256"] = "EC_P256_SHA256";
    KeyVersionSpecAlgorithmEnum["EcP384Sha384"] = "EC_P384_SHA384";
})(KeyVersionSpecAlgorithmEnum || (KeyVersionSpecAlgorithmEnum = {}));
// KeyVersionSpec
/**
 * A Cloud KMS key configuration that a CertificateAuthority will use.
**/
var KeyVersionSpec = /** @class */ (function (_super) {
    __extends(KeyVersionSpec, _super);
    function KeyVersionSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], KeyVersionSpec.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudKmsKeyVersion" }),
        __metadata("design:type", String)
    ], KeyVersionSpec.prototype, "cloudKmsKeyVersion", void 0);
    return KeyVersionSpec;
}(SpeakeasyBase));
export { KeyVersionSpec };
