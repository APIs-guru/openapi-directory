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
export var RoutingCurbsideStrictnessEnum;
(function (RoutingCurbsideStrictnessEnum) {
    RoutingCurbsideStrictnessEnum["Ignore"] = "ignore";
    RoutingCurbsideStrictnessEnum["Soft"] = "soft";
    RoutingCurbsideStrictnessEnum["Strict"] = "strict";
})(RoutingCurbsideStrictnessEnum || (RoutingCurbsideStrictnessEnum = {}));
export var RoutingNetworkDataProviderEnum;
(function (RoutingNetworkDataProviderEnum) {
    RoutingNetworkDataProviderEnum["Openstreetmap"] = "openstreetmap";
    RoutingNetworkDataProviderEnum["Tomtom"] = "tomtom";
})(RoutingNetworkDataProviderEnum || (RoutingNetworkDataProviderEnum = {}));
export var RoutingSnapPreventionsEnum;
(function (RoutingSnapPreventionsEnum) {
    RoutingSnapPreventionsEnum["Motorway"] = "motorway";
    RoutingSnapPreventionsEnum["Trunk"] = "trunk";
    RoutingSnapPreventionsEnum["Bridge"] = "bridge";
    RoutingSnapPreventionsEnum["Ford"] = "ford";
    RoutingSnapPreventionsEnum["Tunnel"] = "tunnel";
    RoutingSnapPreventionsEnum["Ferry"] = "ferry";
})(RoutingSnapPreventionsEnum || (RoutingSnapPreventionsEnum = {}));
// Routing
/**
 * This contains all routing specific configurations.
**/
var Routing = /** @class */ (function (_super) {
    __extends(Routing, _super);
    function Routing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calc_points" }),
        __metadata("design:type", Boolean)
    ], Routing.prototype, "calcPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consider_traffic" }),
        __metadata("design:type", Boolean)
    ], Routing.prototype, "considerTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbside_strictness" }),
        __metadata("design:type", String)
    ], Routing.prototype, "curbsideStrictness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fail_fast" }),
        __metadata("design:type", Boolean)
    ], Routing.prototype, "failFast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_data_provider" }),
        __metadata("design:type", String)
    ], Routing.prototype, "networkDataProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=return_snapped_waypoints" }),
        __metadata("design:type", Boolean)
    ], Routing.prototype, "returnSnappedWaypoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snap_preventions" }),
        __metadata("design:type", Array)
    ], Routing.prototype, "snapPreventions", void 0);
    return Routing;
}(SpeakeasyBase));
export { Routing };
