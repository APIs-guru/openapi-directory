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
export var IpAllocationPolicyIpv6AccessTypeEnum;
(function (IpAllocationPolicyIpv6AccessTypeEnum) {
    IpAllocationPolicyIpv6AccessTypeEnum["Ipv6AccessTypeUnspecified"] = "IPV6_ACCESS_TYPE_UNSPECIFIED";
    IpAllocationPolicyIpv6AccessTypeEnum["Internal"] = "INTERNAL";
    IpAllocationPolicyIpv6AccessTypeEnum["External"] = "EXTERNAL";
})(IpAllocationPolicyIpv6AccessTypeEnum || (IpAllocationPolicyIpv6AccessTypeEnum = {}));
export var IpAllocationPolicyStackTypeEnum;
(function (IpAllocationPolicyStackTypeEnum) {
    IpAllocationPolicyStackTypeEnum["StackTypeUnspecified"] = "STACK_TYPE_UNSPECIFIED";
    IpAllocationPolicyStackTypeEnum["Ipv4"] = "IPV4";
    IpAllocationPolicyStackTypeEnum["Ipv4Ipv6"] = "IPV4_IPV6";
})(IpAllocationPolicyStackTypeEnum || (IpAllocationPolicyStackTypeEnum = {}));
// IpAllocationPolicy
/**
 * Configuration for controlling how IPs are allocated in the cluster.
**/
var IpAllocationPolicy = /** @class */ (function (_super) {
    __extends(IpAllocationPolicy, _super);
    function IpAllocationPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "clusterIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "clusterIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterSecondaryRangeName" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "clusterSecondaryRangeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSubnetwork" }),
        __metadata("design:type", Boolean)
    ], IpAllocationPolicy.prototype, "createSubnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6AccessType" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "ipv6AccessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIpv4Cidr" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "nodeIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "nodeIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "servicesIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "servicesIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesSecondaryRangeName" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "servicesSecondaryRangeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackType" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "stackType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetworkName" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "subnetworkName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], IpAllocationPolicy.prototype, "tpuIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useIpAliases" }),
        __metadata("design:type", Boolean)
    ], IpAllocationPolicy.prototype, "useIpAliases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useRoutes" }),
        __metadata("design:type", Boolean)
    ], IpAllocationPolicy.prototype, "useRoutes", void 0);
    return IpAllocationPolicy;
}(SpeakeasyBase));
export { IpAllocationPolicy };
