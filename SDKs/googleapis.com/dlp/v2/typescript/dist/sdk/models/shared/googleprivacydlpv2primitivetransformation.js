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
import { GooglePrivacyDlpV2BucketingConfig } from "./googleprivacydlpv2bucketingconfig";
import { GooglePrivacyDlpV2CharacterMaskConfig } from "./googleprivacydlpv2charactermaskconfig";
import { GooglePrivacyDlpV2CryptoDeterministicConfig } from "./googleprivacydlpv2cryptodeterministicconfig";
import { GooglePrivacyDlpV2CryptoHashConfig } from "./googleprivacydlpv2cryptohashconfig";
import { GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig } from "./googleprivacydlpv2cryptoreplaceffxfpeconfig";
import { GooglePrivacyDlpV2DateShiftConfig } from "./googleprivacydlpv2dateshiftconfig";
import { GooglePrivacyDlpV2FixedSizeBucketingConfig } from "./googleprivacydlpv2fixedsizebucketingconfig";
import { GooglePrivacyDlpV2ReplaceValueConfig } from "./googleprivacydlpv2replacevalueconfig";
import { GooglePrivacyDlpV2ReplaceDictionaryConfig } from "./googleprivacydlpv2replacedictionaryconfig";
import { GooglePrivacyDlpV2TimePartConfig } from "./googleprivacydlpv2timepartconfig";
// GooglePrivacyDlpV2PrimitiveTransformation
/**
 * A rule for transforming a value.
**/
var GooglePrivacyDlpV2PrimitiveTransformation = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2PrimitiveTransformation, _super);
    function GooglePrivacyDlpV2PrimitiveTransformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketingConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2BucketingConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "bucketingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=characterMaskConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2CharacterMaskConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "characterMaskConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoDeterministicConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2CryptoDeterministicConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoDeterministicConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoHashConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2CryptoHashConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoHashConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cryptoReplaceFfxFpeConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "cryptoReplaceFfxFpeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateShiftConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2DateShiftConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "dateShiftConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedSizeBucketingConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2FixedSizeBucketingConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "fixedSizeBucketingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redactConfig" }),
        __metadata("design:type", Map)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "redactConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2ReplaceValueConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceDictionaryConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2ReplaceDictionaryConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceDictionaryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceWithInfoTypeConfig" }),
        __metadata("design:type", Map)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "replaceWithInfoTypeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timePartConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2TimePartConfig)
    ], GooglePrivacyDlpV2PrimitiveTransformation.prototype, "timePartConfig", void 0);
    return GooglePrivacyDlpV2PrimitiveTransformation;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2PrimitiveTransformation };
