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
import { CertDnsChallenge } from "./certdnschallenge";
import { CertHttpChallenge } from "./certhttpchallenge";
export var DomainProvisioningCertStatusEnum;
(function (DomainProvisioningCertStatusEnum) {
    DomainProvisioningCertStatusEnum["CertStatusUnspecified"] = "CERT_STATUS_UNSPECIFIED";
    DomainProvisioningCertStatusEnum["CertPending"] = "CERT_PENDING";
    DomainProvisioningCertStatusEnum["CertMissing"] = "CERT_MISSING";
    DomainProvisioningCertStatusEnum["CertProcessing"] = "CERT_PROCESSING";
    DomainProvisioningCertStatusEnum["CertPropagating"] = "CERT_PROPAGATING";
    DomainProvisioningCertStatusEnum["CertActive"] = "CERT_ACTIVE";
    DomainProvisioningCertStatusEnum["CertError"] = "CERT_ERROR";
})(DomainProvisioningCertStatusEnum || (DomainProvisioningCertStatusEnum = {}));
export var DomainProvisioningDnsStatusEnum;
(function (DomainProvisioningDnsStatusEnum) {
    DomainProvisioningDnsStatusEnum["DnsStatusUnspecified"] = "DNS_STATUS_UNSPECIFIED";
    DomainProvisioningDnsStatusEnum["DnsPending"] = "DNS_PENDING";
    DomainProvisioningDnsStatusEnum["DnsMissing"] = "DNS_MISSING";
    DomainProvisioningDnsStatusEnum["DnsPartialMatch"] = "DNS_PARTIAL_MATCH";
    DomainProvisioningDnsStatusEnum["DnsMatch"] = "DNS_MATCH";
    DomainProvisioningDnsStatusEnum["DnsExtraneousMatch"] = "DNS_EXTRANEOUS_MATCH";
})(DomainProvisioningDnsStatusEnum || (DomainProvisioningDnsStatusEnum = {}));
// DomainProvisioning
/**
 * The current certificate provisioning status information for a domain.
**/
var DomainProvisioning = /** @class */ (function (_super) {
    __extends(DomainProvisioning, _super);
    function DomainProvisioning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certChallengeDiscoveredTxt" }),
        __metadata("design:type", Array)
    ], DomainProvisioning.prototype, "certChallengeDiscoveredTxt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certChallengeDns" }),
        __metadata("design:type", CertDnsChallenge)
    ], DomainProvisioning.prototype, "certChallengeDns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certChallengeHttp" }),
        __metadata("design:type", CertHttpChallenge)
    ], DomainProvisioning.prototype, "certChallengeHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certStatus" }),
        __metadata("design:type", String)
    ], DomainProvisioning.prototype, "certStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discoveredIps" }),
        __metadata("design:type", Array)
    ], DomainProvisioning.prototype, "discoveredIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsFetchTime" }),
        __metadata("design:type", String)
    ], DomainProvisioning.prototype, "dnsFetchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsStatus" }),
        __metadata("design:type", String)
    ], DomainProvisioning.prototype, "dnsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedIps" }),
        __metadata("design:type", Array)
    ], DomainProvisioning.prototype, "expectedIps", void 0);
    return DomainProvisioning;
}(SpeakeasyBase));
export { DomainProvisioning };
