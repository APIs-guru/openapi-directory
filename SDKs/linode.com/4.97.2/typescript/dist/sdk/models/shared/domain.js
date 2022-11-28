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
export var DomainStatusEnum;
(function (DomainStatusEnum) {
    DomainStatusEnum["Disabled"] = "disabled";
    DomainStatusEnum["Active"] = "active";
})(DomainStatusEnum || (DomainStatusEnum = {}));
export var DomainTypeEnum;
(function (DomainTypeEnum) {
    DomainTypeEnum["Master"] = "master";
    DomainTypeEnum["Slave"] = "slave";
})(DomainTypeEnum || (DomainTypeEnum = {}));
// DomainInput
/**
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 *
**/
var DomainInput = /** @class */ (function (_super) {
    __extends(DomainInput, _super);
    function DomainInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=axfr_ips" }),
        __metadata("design:type", Array)
    ], DomainInput.prototype, "axfrIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_sec" }),
        __metadata("design:type", Number)
    ], DomainInput.prototype, "expireSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_ips" }),
        __metadata("design:type", Array)
    ], DomainInput.prototype, "masterIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_sec" }),
        __metadata("design:type", Number)
    ], DomainInput.prototype, "refreshSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retry_sec" }),
        __metadata("design:type", Number)
    ], DomainInput.prototype, "retrySec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=soa_email" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "soaEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], DomainInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl_sec" }),
        __metadata("design:type", Number)
    ], DomainInput.prototype, "ttlSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "type", void 0);
    return DomainInput;
}(SpeakeasyBase));
export { DomainInput };
// Domain
/**
 * A domain zonefile in our DNS system.  You must own the domain name and tell your registrar to use Linode's nameservers in order for a domain in our system to be treated as authoritative.
 *
**/
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=axfr_ips" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "axfrIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Domain.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_sec" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "expireSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], Domain.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=master_ips" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "masterIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refresh_sec" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "refreshSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retry_sec" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "retrySec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=soa_email" }),
        __metadata("design:type", String)
    ], Domain.prototype, "soaEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Domain.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl_sec" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "ttlSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Domain.prototype, "type", void 0);
    return Domain;
}(SpeakeasyBase));
export { Domain };
