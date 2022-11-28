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
import { RevokedCertificate } from "./revokedcertificate";
export var CertificateRevocationListStateEnum;
(function (CertificateRevocationListStateEnum) {
    CertificateRevocationListStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CertificateRevocationListStateEnum["Active"] = "ACTIVE";
    CertificateRevocationListStateEnum["Superseded"] = "SUPERSEDED";
})(CertificateRevocationListStateEnum || (CertificateRevocationListStateEnum = {}));
// CertificateRevocationList
/**
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
**/
var CertificateRevocationList = /** @class */ (function (_super) {
    __extends(CertificateRevocationList, _super);
    function CertificateRevocationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessUrl" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "accessUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CertificateRevocationList.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pemCrl" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "pemCrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revokedCertificates", elemType: RevokedCertificate }),
        __metadata("design:type", Array)
    ], CertificateRevocationList.prototype, "revokedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequenceNumber" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "sequenceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CertificateRevocationList.prototype, "updateTime", void 0);
    return CertificateRevocationList;
}(SpeakeasyBase));
export { CertificateRevocationList };
