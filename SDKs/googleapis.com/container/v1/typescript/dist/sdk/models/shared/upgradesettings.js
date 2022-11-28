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
import { BlueGreenSettings } from "./bluegreensettings";
export var UpgradeSettingsStrategyEnum;
(function (UpgradeSettingsStrategyEnum) {
    UpgradeSettingsStrategyEnum["NodePoolUpdateStrategyUnspecified"] = "NODE_POOL_UPDATE_STRATEGY_UNSPECIFIED";
    UpgradeSettingsStrategyEnum["BlueGreen"] = "BLUE_GREEN";
    UpgradeSettingsStrategyEnum["Surge"] = "SURGE";
})(UpgradeSettingsStrategyEnum || (UpgradeSettingsStrategyEnum = {}));
// UpgradeSettings
/**
 * These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available. These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is ROLLING, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
**/
var UpgradeSettings = /** @class */ (function (_super) {
    __extends(UpgradeSettings, _super);
    function UpgradeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueGreenSettings" }),
        __metadata("design:type", BlueGreenSettings)
    ], UpgradeSettings.prototype, "blueGreenSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSurge" }),
        __metadata("design:type", Number)
    ], UpgradeSettings.prototype, "maxSurge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxUnavailable" }),
        __metadata("design:type", Number)
    ], UpgradeSettings.prototype, "maxUnavailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strategy" }),
        __metadata("design:type", String)
    ], UpgradeSettings.prototype, "strategy", void 0);
    return UpgradeSettings;
}(SpeakeasyBase));
export { UpgradeSettings };
