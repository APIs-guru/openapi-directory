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
// StatsResponse
/**
 * A third party stats resource.
**/
var StatsResponse = /** @class */ (function (_super) {
    __extends(StatsResponse, _super);
    function StatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avg_session_length_minutes" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "avgSessionLengthMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=churn_probability" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "churnProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=days_since_last_played" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "daysSinceLastPlayed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=high_spender_probability" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "highSpenderProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], StatsResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_purchases" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "numPurchases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_sessions" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "numSessions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_sessions_percentile" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "numSessionsPercentile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spend_percentile" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "spendPercentile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spend_probability" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "spendProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_spend_next_28_days" }),
        __metadata("design:type", Number)
    ], StatsResponse.prototype, "totalSpendNext28Days", void 0);
    return StatsResponse;
}(SpeakeasyBase));
export { StatsResponse };
