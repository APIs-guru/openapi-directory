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
import { DnsKeySpec } from "./dnskeyspec";
// Quota
/**
 * Limits associated with a Project.
**/
var Quota = /** @class */ (function (_super) {
    __extends(Quota, _super);
    function Quota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsKeysPerManagedZone" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "dnsKeysPerManagedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeClustersPerManagedZone" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "gkeClustersPerManagedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeClustersPerPolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "gkeClustersPerPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeClustersPerResponsePolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "gkeClustersPerResponsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsPerRoutingPolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "itemsPerRoutingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Quota.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedZones" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "managedZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedZonesPerGkeCluster" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "managedZonesPerGkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedZonesPerNetwork" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "managedZonesPerNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networksPerManagedZone" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "networksPerManagedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networksPerPolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "networksPerPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networksPerResponsePolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "networksPerResponsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeringZonesPerTargetNetwork" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "peeringZonesPerTargetNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceRecordsPerRrset" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "resourceRecordsPerRrset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsePolicies" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "responsePolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responsePolicyRulesPerResponsePolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "responsePolicyRulesPerResponsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrsetAdditionsPerChange" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "rrsetAdditionsPerChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrsetDeletionsPerChange" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "rrsetDeletionsPerChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rrsetsPerManagedZone" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "rrsetsPerManagedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetNameServersPerManagedZone" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "targetNameServersPerManagedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetNameServersPerPolicy" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "targetNameServersPerPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRrdataSizePerChange" }),
        __metadata("design:type", Number)
    ], Quota.prototype, "totalRrdataSizePerChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=whitelistedKeySpecs", elemType: DnsKeySpec }),
        __metadata("design:type", Array)
    ], Quota.prototype, "whitelistedKeySpecs", void 0);
    return Quota;
}(SpeakeasyBase));
export { Quota };
