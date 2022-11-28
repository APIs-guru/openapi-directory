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
export var YoutubeAndPartnersBiddingStrategyTypeEnum;
(function (YoutubeAndPartnersBiddingStrategyTypeEnum) {
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeUnspecified"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeManualCpv"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeManualCpm"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeTargetCpa"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeTargetCpm"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeMaximizeLift"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT";
    YoutubeAndPartnersBiddingStrategyTypeEnum["YoutubeAndPartnersBiddingStrategyTypeMaximizeConversions"] = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS";
})(YoutubeAndPartnersBiddingStrategyTypeEnum || (YoutubeAndPartnersBiddingStrategyTypeEnum = {}));
// YoutubeAndPartnersBiddingStrategy
/**
 * Settings that control the bid strategy for YouTube and Partners resources.
**/
var YoutubeAndPartnersBiddingStrategy = /** @class */ (function (_super) {
    __extends(YoutubeAndPartnersBiddingStrategy, _super);
    function YoutubeAndPartnersBiddingStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], YoutubeAndPartnersBiddingStrategy.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], YoutubeAndPartnersBiddingStrategy.prototype, "value", void 0);
    return YoutubeAndPartnersBiddingStrategy;
}(SpeakeasyBase));
export { YoutubeAndPartnersBiddingStrategy };
