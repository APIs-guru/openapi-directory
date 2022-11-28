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
import { AccessUrls } from "./accessurls";
import { CertificateDescription } from "./certificatedescription";
import { CertificateAuthorityPolicy } from "./certificateauthoritypolicy";
import { CertificateConfig } from "./certificateconfig";
import { IssuingOptions } from "./issuingoptions";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";
export var CertificateAuthorityStateEnum;
(function (CertificateAuthorityStateEnum) {
    CertificateAuthorityStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CertificateAuthorityStateEnum["Enabled"] = "ENABLED";
    CertificateAuthorityStateEnum["Disabled"] = "DISABLED";
    CertificateAuthorityStateEnum["PendingActivation"] = "PENDING_ACTIVATION";
    CertificateAuthorityStateEnum["PendingDeletion"] = "PENDING_DELETION";
})(CertificateAuthorityStateEnum || (CertificateAuthorityStateEnum = {}));
export var CertificateAuthorityTierEnum;
(function (CertificateAuthorityTierEnum) {
    CertificateAuthorityTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    CertificateAuthorityTierEnum["Enterprise"] = "ENTERPRISE";
    CertificateAuthorityTierEnum["Devops"] = "DEVOPS";
})(CertificateAuthorityTierEnum || (CertificateAuthorityTierEnum = {}));
export var CertificateAuthorityTypeEnum;
(function (CertificateAuthorityTypeEnum) {
    CertificateAuthorityTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    CertificateAuthorityTypeEnum["SelfSigned"] = "SELF_SIGNED";
    CertificateAuthorityTypeEnum["Subordinate"] = "SUBORDINATE";
})(CertificateAuthorityTypeEnum || (CertificateAuthorityTypeEnum = {}));
// CertificateAuthority
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
var CertificateAuthority = /** @class */ (function (_super) {
    __extends(CertificateAuthority, _super);
    function CertificateAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessUrls" }),
        __metadata("design:type", AccessUrls)
    ], CertificateAuthority.prototype, "accessUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caCertificateDescriptions", elemType: CertificateDescription }),
        __metadata("design:type", Array)
    ], CertificateAuthority.prototype, "caCertificateDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePolicy" }),
        __metadata("design:type", CertificateAuthorityPolicy)
    ], CertificateAuthority.prototype, "certificatePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", CertificateConfig)
    ], CertificateAuthority.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "gcsBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuingOptions" }),
        __metadata("design:type", IssuingOptions)
    ], CertificateAuthority.prototype, "issuingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keySpec" }),
        __metadata("design:type", KeyVersionSpec)
    ], CertificateAuthority.prototype, "keySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateAuthority.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pemCaCertificates" }),
        __metadata("design:type", Array)
    ], CertificateAuthority.prototype, "pemCaCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinateConfig" }),
        __metadata("design:type", SubordinateConfig)
    ], CertificateAuthority.prototype, "subordinateConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CertificateAuthority.prototype, "updateTime", void 0);
    return CertificateAuthority;
}(SpeakeasyBase));
export { CertificateAuthority };
// CertificateAuthorityInput
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
**/
var CertificateAuthorityInput = /** @class */ (function (_super) {
    __extends(CertificateAuthorityInput, _super);
    function CertificateAuthorityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessUrls" }),
        __metadata("design:type", AccessUrls)
    ], CertificateAuthorityInput.prototype, "accessUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificatePolicy" }),
        __metadata("design:type", CertificateAuthorityPolicy)
    ], CertificateAuthorityInput.prototype, "certificatePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", CertificateConfig)
    ], CertificateAuthorityInput.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsBucket" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "gcsBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuingOptions" }),
        __metadata("design:type", IssuingOptions)
    ], CertificateAuthorityInput.prototype, "issuingOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keySpec" }),
        __metadata("design:type", KeyVersionSpec)
    ], CertificateAuthorityInput.prototype, "keySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateAuthorityInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifetime" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "lifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subordinateConfig" }),
        __metadata("design:type", SubordinateConfig)
    ], CertificateAuthorityInput.prototype, "subordinateConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CertificateAuthorityInput.prototype, "type", void 0);
    return CertificateAuthorityInput;
}(SpeakeasyBase));
export { CertificateAuthorityInput };
