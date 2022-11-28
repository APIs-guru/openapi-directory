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
export var PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
(function (PerformanceGoalBidStrategyPerformanceGoalTypeEnum) {
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeUnspecified"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeCpa"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeCpc"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeViewableCpm"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeCustomAlgo"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeCiva"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeIvoTen"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN";
    PerformanceGoalBidStrategyPerformanceGoalTypeEnum["BiddingStrategyPerformanceGoalTypeAvViewed"] = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED";
})(PerformanceGoalBidStrategyPerformanceGoalTypeEnum || (PerformanceGoalBidStrategyPerformanceGoalTypeEnum = {}));
// PerformanceGoalBidStrategy
/**
 * A strategy that automatically adjusts the bid to meet or beat a specified performance goal.
**/
var PerformanceGoalBidStrategy = /** @class */ (function (_super) {
    __extends(PerformanceGoalBidStrategy, _super);
    function PerformanceGoalBidStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" }),
        __metadata("design:type", String)
    ], PerformanceGoalBidStrategy.prototype, "customBiddingAlgorithmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAverageCpmBidAmountMicros" }),
        __metadata("design:type", String)
    ], PerformanceGoalBidStrategy.prototype, "maxAverageCpmBidAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalAmountMicros" }),
        __metadata("design:type", String)
    ], PerformanceGoalBidStrategy.prototype, "performanceGoalAmountMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoalType" }),
        __metadata("design:type", String)
    ], PerformanceGoalBidStrategy.prototype, "performanceGoalType", void 0);
    return PerformanceGoalBidStrategy;
}(SpeakeasyBase));
export { PerformanceGoalBidStrategy };
