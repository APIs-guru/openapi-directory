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
import { GooglePrivacyDlpV2KmsWrappedCryptoKey } from "./googleprivacydlpv2kmswrappedcryptokey";
import { GooglePrivacyDlpV2TransientCryptoKey } from "./googleprivacydlpv2transientcryptokey";
import { GooglePrivacyDlpV2UnwrappedCryptoKey } from "./googleprivacydlpv2unwrappedcryptokey";
// GooglePrivacyDlpV2CryptoKey
/**
 * This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.
**/
var GooglePrivacyDlpV2CryptoKey = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CryptoKey, _super);
    function GooglePrivacyDlpV2CryptoKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsWrapped" }),
        __metadata("design:type", GooglePrivacyDlpV2KmsWrappedCryptoKey)
    ], GooglePrivacyDlpV2CryptoKey.prototype, "kmsWrapped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transient" }),
        __metadata("design:type", GooglePrivacyDlpV2TransientCryptoKey)
    ], GooglePrivacyDlpV2CryptoKey.prototype, "transient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unwrapped" }),
        __metadata("design:type", GooglePrivacyDlpV2UnwrappedCryptoKey)
    ], GooglePrivacyDlpV2CryptoKey.prototype, "unwrapped", void 0);
    return GooglePrivacyDlpV2CryptoKey;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CryptoKey };
