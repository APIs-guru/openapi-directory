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
export var ServiceAccountKeyKeyAlgorithmEnum;
(function (ServiceAccountKeyKeyAlgorithmEnum) {
    ServiceAccountKeyKeyAlgorithmEnum["KeyAlgUnspecified"] = "KEY_ALG_UNSPECIFIED";
    ServiceAccountKeyKeyAlgorithmEnum["KeyAlgRsa1024"] = "KEY_ALG_RSA_1024";
    ServiceAccountKeyKeyAlgorithmEnum["KeyAlgRsa2048"] = "KEY_ALG_RSA_2048";
})(ServiceAccountKeyKeyAlgorithmEnum || (ServiceAccountKeyKeyAlgorithmEnum = {}));
export var ServiceAccountKeyKeyOriginEnum;
(function (ServiceAccountKeyKeyOriginEnum) {
    ServiceAccountKeyKeyOriginEnum["OriginUnspecified"] = "ORIGIN_UNSPECIFIED";
    ServiceAccountKeyKeyOriginEnum["UserProvided"] = "USER_PROVIDED";
    ServiceAccountKeyKeyOriginEnum["GoogleProvided"] = "GOOGLE_PROVIDED";
})(ServiceAccountKeyKeyOriginEnum || (ServiceAccountKeyKeyOriginEnum = {}));
export var ServiceAccountKeyKeyTypeEnum;
(function (ServiceAccountKeyKeyTypeEnum) {
    ServiceAccountKeyKeyTypeEnum["KeyTypeUnspecified"] = "KEY_TYPE_UNSPECIFIED";
    ServiceAccountKeyKeyTypeEnum["UserManaged"] = "USER_MANAGED";
    ServiceAccountKeyKeyTypeEnum["SystemManaged"] = "SYSTEM_MANAGED";
})(ServiceAccountKeyKeyTypeEnum || (ServiceAccountKeyKeyTypeEnum = {}));
export var ServiceAccountKeyPrivateKeyTypeEnum;
(function (ServiceAccountKeyPrivateKeyTypeEnum) {
    ServiceAccountKeyPrivateKeyTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ServiceAccountKeyPrivateKeyTypeEnum["TypePkcs12File"] = "TYPE_PKCS12_FILE";
    ServiceAccountKeyPrivateKeyTypeEnum["TypeGoogleCredentialsFile"] = "TYPE_GOOGLE_CREDENTIALS_FILE";
})(ServiceAccountKeyPrivateKeyTypeEnum || (ServiceAccountKeyPrivateKeyTypeEnum = {}));
// ServiceAccountKey
/**
 * Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
**/
var ServiceAccountKey = /** @class */ (function (_super) {
    __extends(ServiceAccountKey, _super);
    function ServiceAccountKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], ServiceAccountKey.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=keyAlgorithm" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "keyAlgorithm", void 0);
    __decorate([
        Metadata({ data: "json, name=keyOrigin" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "keyOrigin", void 0);
    __decorate([
        Metadata({ data: "json, name=keyType" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "keyType", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=privateKeyData" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "privateKeyData", void 0);
    __decorate([
        Metadata({ data: "json, name=privateKeyType" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "privateKeyType", void 0);
    __decorate([
        Metadata({ data: "json, name=publicKeyData" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "publicKeyData", void 0);
    __decorate([
        Metadata({ data: "json, name=validAfterTime" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "validAfterTime", void 0);
    __decorate([
        Metadata({ data: "json, name=validBeforeTime" }),
        __metadata("design:type", String)
    ], ServiceAccountKey.prototype, "validBeforeTime", void 0);
    return ServiceAccountKey;
}(SpeakeasyBase));
export { ServiceAccountKey };
