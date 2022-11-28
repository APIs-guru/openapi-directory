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
// TrafficPercentStrategy
/**
 * Strategy that specifies how clients of Google Service Controller want to send traffic to use different config versions. This is generally used by API proxy to split traffic based on your configured percentage for each config version. One example of how to gradually rollout a new service configuration using this strategy: Day 1 Rollout { id: "example.googleapis.com/rollout_20160206" traffic_percent_strategy { percentages: { "example.googleapis.com/20160201": 70.00 "example.googleapis.com/20160206": 30.00 } } } Day 2 Rollout { id: "example.googleapis.com/rollout_20160207" traffic_percent_strategy: { percentages: { "example.googleapis.com/20160206": 100.00 } } }
**/
var TrafficPercentStrategy = /** @class */ (function (_super) {
    __extends(TrafficPercentStrategy, _super);
    function TrafficPercentStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentages" }),
        __metadata("design:type", Map)
    ], TrafficPercentStrategy.prototype, "percentages", void 0);
    return TrafficPercentStrategy;
}(SpeakeasyBase));
export { TrafficPercentStrategy };
