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
import { ClustersConfigDump } from "./clustersconfigdump";
import { ListenersConfigDump } from "./listenersconfigdump";
import { RoutesConfigDump } from "./routesconfigdump";
import { ScopedRoutesConfigDump } from "./scopedroutesconfigdump";
export var PerXdsConfigStatusEnum;
(function (PerXdsConfigStatusEnum) {
    PerXdsConfigStatusEnum["Unknown"] = "UNKNOWN";
    PerXdsConfigStatusEnum["Synced"] = "SYNCED";
    PerXdsConfigStatusEnum["NotSent"] = "NOT_SENT";
    PerXdsConfigStatusEnum["Stale"] = "STALE";
    PerXdsConfigStatusEnum["Error"] = "ERROR";
})(PerXdsConfigStatusEnum || (PerXdsConfigStatusEnum = {}));
// PerXdsConfig
/**
 * Detailed config (per xDS) with status. [#next-free-field: 6]
**/
var PerXdsConfig = /** @class */ (function (_super) {
    __extends(PerXdsConfig, _super);
    function PerXdsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterConfig" }),
        __metadata("design:type", ClustersConfigDump)
    ], PerXdsConfig.prototype, "clusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listenerConfig" }),
        __metadata("design:type", ListenersConfigDump)
    ], PerXdsConfig.prototype, "listenerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routeConfig" }),
        __metadata("design:type", RoutesConfigDump)
    ], PerXdsConfig.prototype, "routeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopedRouteConfig" }),
        __metadata("design:type", ScopedRoutesConfigDump)
    ], PerXdsConfig.prototype, "scopedRouteConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PerXdsConfig.prototype, "status", void 0);
    return PerXdsConfig;
}(SpeakeasyBase));
export { PerXdsConfig };
