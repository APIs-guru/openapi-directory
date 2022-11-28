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
export var RouteInfoNextHopTypeEnum;
(function (RouteInfoNextHopTypeEnum) {
    RouteInfoNextHopTypeEnum["NextHopTypeUnspecified"] = "NEXT_HOP_TYPE_UNSPECIFIED";
    RouteInfoNextHopTypeEnum["NextHopIp"] = "NEXT_HOP_IP";
    RouteInfoNextHopTypeEnum["NextHopInstance"] = "NEXT_HOP_INSTANCE";
    RouteInfoNextHopTypeEnum["NextHopNetwork"] = "NEXT_HOP_NETWORK";
    RouteInfoNextHopTypeEnum["NextHopPeering"] = "NEXT_HOP_PEERING";
    RouteInfoNextHopTypeEnum["NextHopInterconnect"] = "NEXT_HOP_INTERCONNECT";
    RouteInfoNextHopTypeEnum["NextHopVpnTunnel"] = "NEXT_HOP_VPN_TUNNEL";
    RouteInfoNextHopTypeEnum["NextHopVpnGateway"] = "NEXT_HOP_VPN_GATEWAY";
    RouteInfoNextHopTypeEnum["NextHopInternetGateway"] = "NEXT_HOP_INTERNET_GATEWAY";
    RouteInfoNextHopTypeEnum["NextHopBlackhole"] = "NEXT_HOP_BLACKHOLE";
    RouteInfoNextHopTypeEnum["NextHopIlb"] = "NEXT_HOP_ILB";
    RouteInfoNextHopTypeEnum["NextHopRouterAppliance"] = "NEXT_HOP_ROUTER_APPLIANCE";
})(RouteInfoNextHopTypeEnum || (RouteInfoNextHopTypeEnum = {}));
export var RouteInfoRouteTypeEnum;
(function (RouteInfoRouteTypeEnum) {
    RouteInfoRouteTypeEnum["RouteTypeUnspecified"] = "ROUTE_TYPE_UNSPECIFIED";
    RouteInfoRouteTypeEnum["Subnet"] = "SUBNET";
    RouteInfoRouteTypeEnum["Static"] = "STATIC";
    RouteInfoRouteTypeEnum["Dynamic"] = "DYNAMIC";
    RouteInfoRouteTypeEnum["PeeringSubnet"] = "PEERING_SUBNET";
    RouteInfoRouteTypeEnum["PeeringStatic"] = "PEERING_STATIC";
    RouteInfoRouteTypeEnum["PeeringDynamic"] = "PEERING_DYNAMIC";
    RouteInfoRouteTypeEnum["PolicyBased"] = "POLICY_BASED";
})(RouteInfoRouteTypeEnum || (RouteInfoRouteTypeEnum = {}));
// RouteInfo
/**
 * For display only. Metadata associated with a Compute Engine route.
**/
var RouteInfo = /** @class */ (function (_super) {
    __extends(RouteInfo, _super);
    function RouteInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destIpRange" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "destIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destPortRanges" }),
        __metadata("design:type", Array)
    ], RouteInfo.prototype, "destPortRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceTags" }),
        __metadata("design:type", Array)
    ], RouteInfo.prototype, "instanceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkUri" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "networkUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHop" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "nextHop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHopType" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "nextHopType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], RouteInfo.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], RouteInfo.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeType" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "routeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcIpRange" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "srcIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcPortRanges" }),
        __metadata("design:type", Array)
    ], RouteInfo.prototype, "srcPortRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], RouteInfo.prototype, "uri", void 0);
    return RouteInfo;
}(SpeakeasyBase));
export { RouteInfo };
