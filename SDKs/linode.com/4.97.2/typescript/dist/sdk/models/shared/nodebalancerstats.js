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
// NodeBalancerStatsDataTraffic
/**
 * Traffic statistics for this NodeBalancer.
 *
**/
var NodeBalancerStatsDataTraffic = /** @class */ (function (_super) {
    __extends(NodeBalancerStatsDataTraffic, _super);
    function NodeBalancerStatsDataTraffic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", Array)
    ], NodeBalancerStatsDataTraffic.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", Array)
    ], NodeBalancerStatsDataTraffic.prototype, "out", void 0);
    return NodeBalancerStatsDataTraffic;
}(SpeakeasyBase));
export { NodeBalancerStatsDataTraffic };
// NodeBalancerStatsData
/**
 * The data returned about this NodeBalancers.
 *
**/
var NodeBalancerStatsData = /** @class */ (function (_super) {
    __extends(NodeBalancerStatsData, _super);
    function NodeBalancerStatsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", Array)
    ], NodeBalancerStatsData.prototype, "connections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic" }),
        __metadata("design:type", NodeBalancerStatsDataTraffic)
    ], NodeBalancerStatsData.prototype, "traffic", void 0);
    return NodeBalancerStatsData;
}(SpeakeasyBase));
export { NodeBalancerStatsData };
// NodeBalancerStats
/**
 * Stats for this NodeBalancer.
 *
**/
var NodeBalancerStats = /** @class */ (function (_super) {
    __extends(NodeBalancerStats, _super);
    function NodeBalancerStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", NodeBalancerStatsData)
    ], NodeBalancerStats.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], NodeBalancerStats.prototype, "title", void 0);
    return NodeBalancerStats;
}(SpeakeasyBase));
export { NodeBalancerStats };
