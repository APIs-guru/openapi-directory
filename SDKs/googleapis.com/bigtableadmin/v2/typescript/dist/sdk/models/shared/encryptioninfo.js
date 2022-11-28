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
import { Status } from "./status";
export var EncryptionInfoEncryptionTypeEnum;
(function (EncryptionInfoEncryptionTypeEnum) {
    EncryptionInfoEncryptionTypeEnum["EncryptionTypeUnspecified"] = "ENCRYPTION_TYPE_UNSPECIFIED";
    EncryptionInfoEncryptionTypeEnum["GoogleDefaultEncryption"] = "GOOGLE_DEFAULT_ENCRYPTION";
    EncryptionInfoEncryptionTypeEnum["CustomerManagedEncryption"] = "CUSTOMER_MANAGED_ENCRYPTION";
})(EncryptionInfoEncryptionTypeEnum || (EncryptionInfoEncryptionTypeEnum = {}));
// EncryptionInfoInput
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
**/
var EncryptionInfoInput = /** @class */ (function (_super) {
    __extends(EncryptionInfoInput, _super);
    function EncryptionInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionStatus" }),
        __metadata("design:type", Status)
    ], EncryptionInfoInput.prototype, "encryptionStatus", void 0);
    return EncryptionInfoInput;
}(SpeakeasyBase));
export { EncryptionInfoInput };
// EncryptionInfo
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
**/
var EncryptionInfo = /** @class */ (function (_super) {
    __extends(EncryptionInfo, _super);
    function EncryptionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionStatus" }),
        __metadata("design:type", Status)
    ], EncryptionInfo.prototype, "encryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionType" }),
        __metadata("design:type", String)
    ], EncryptionInfo.prototype, "encryptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyVersion" }),
        __metadata("design:type", String)
    ], EncryptionInfo.prototype, "kmsKeyVersion", void 0);
    return EncryptionInfo;
}(SpeakeasyBase));
export { EncryptionInfo };
