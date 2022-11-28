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
export var DsRecordAlgorithmEnum;
(function (DsRecordAlgorithmEnum) {
    DsRecordAlgorithmEnum["AlgorithmUnspecified"] = "ALGORITHM_UNSPECIFIED";
    DsRecordAlgorithmEnum["Rsamd5"] = "RSAMD5";
    DsRecordAlgorithmEnum["Dh"] = "DH";
    DsRecordAlgorithmEnum["Dsa"] = "DSA";
    DsRecordAlgorithmEnum["Ecc"] = "ECC";
    DsRecordAlgorithmEnum["Rsasha1"] = "RSASHA1";
    DsRecordAlgorithmEnum["Dsansec3Sha1"] = "DSANSEC3SHA1";
    DsRecordAlgorithmEnum["Rsasha1Nsec3Sha1"] = "RSASHA1NSEC3SHA1";
    DsRecordAlgorithmEnum["Rsasha256"] = "RSASHA256";
    DsRecordAlgorithmEnum["Rsasha512"] = "RSASHA512";
    DsRecordAlgorithmEnum["Eccgost"] = "ECCGOST";
    DsRecordAlgorithmEnum["Ecdsap256Sha256"] = "ECDSAP256SHA256";
    DsRecordAlgorithmEnum["Ecdsap384Sha384"] = "ECDSAP384SHA384";
    DsRecordAlgorithmEnum["Ed25519"] = "ED25519";
    DsRecordAlgorithmEnum["Ed448"] = "ED448";
    DsRecordAlgorithmEnum["Indirect"] = "INDIRECT";
    DsRecordAlgorithmEnum["Privatedns"] = "PRIVATEDNS";
    DsRecordAlgorithmEnum["Privateoid"] = "PRIVATEOID";
})(DsRecordAlgorithmEnum || (DsRecordAlgorithmEnum = {}));
export var DsRecordDigestTypeEnum;
(function (DsRecordDigestTypeEnum) {
    DsRecordDigestTypeEnum["DigestTypeUnspecified"] = "DIGEST_TYPE_UNSPECIFIED";
    DsRecordDigestTypeEnum["Sha1"] = "SHA1";
    DsRecordDigestTypeEnum["Sha256"] = "SHA256";
    DsRecordDigestTypeEnum["Gost3411"] = "GOST3411";
    DsRecordDigestTypeEnum["Sha384"] = "SHA384";
})(DsRecordDigestTypeEnum || (DsRecordDigestTypeEnum = {}));
// DsRecord
/**
 * Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.
**/
var DsRecord = /** @class */ (function (_super) {
    __extends(DsRecord, _super);
    function DsRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], DsRecord.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest" }),
        __metadata("design:type", String)
    ], DsRecord.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digestType" }),
        __metadata("design:type", String)
    ], DsRecord.prototype, "digestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyTag" }),
        __metadata("design:type", Number)
    ], DsRecord.prototype, "keyTag", void 0);
    return DsRecord;
}(SpeakeasyBase));
export { DsRecord };
