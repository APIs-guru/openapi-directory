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
import { IssuancePolicy } from "./issuancepolicy";
import { PublishingOptions } from "./publishingoptions";
export var CaPoolTierEnum;
(function (CaPoolTierEnum) {
    CaPoolTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    CaPoolTierEnum["Enterprise"] = "ENTERPRISE";
    CaPoolTierEnum["Devops"] = "DEVOPS";
})(CaPoolTierEnum || (CaPoolTierEnum = {}));
// CaPoolInput
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
var CaPoolInput = /** @class */ (function (_super) {
    __extends(CaPoolInput, _super);
    function CaPoolInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuancePolicy" }),
        __metadata("design:type", IssuancePolicy)
    ], CaPoolInput.prototype, "issuancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CaPoolInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishingOptions" }),
        __metadata("design:type", PublishingOptions)
    ], CaPoolInput.prototype, "publishingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CaPoolInput.prototype, "tier", void 0);
    return CaPoolInput;
}(SpeakeasyBase));
export { CaPoolInput };
// CaPool
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
**/
var CaPool = /** @class */ (function (_super) {
    __extends(CaPool, _super);
    function CaPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuancePolicy" }),
        __metadata("design:type", IssuancePolicy)
    ], CaPool.prototype, "issuancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CaPool.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CaPool.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishingOptions" }),
        __metadata("design:type", PublishingOptions)
    ], CaPool.prototype, "publishingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CaPool.prototype, "tier", void 0);
    return CaPool;
}(SpeakeasyBase));
export { CaPool };
