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
import { UsageRateTimelineEntry } from "./usageratetimelineentry";
// UsageRateTimeline
/**
 * A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.
**/
var UsageRateTimeline = /** @class */ (function (_super) {
    __extends(UsageRateTimeline, _super);
    function UsageRateTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], UsageRateTimeline.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageRateTimelineEntries", elemType: UsageRateTimelineEntry }),
        __metadata("design:type", Array)
    ], UsageRateTimeline.prototype, "usageRateTimelineEntries", void 0);
    return UsageRateTimeline;
}(SpeakeasyBase));
export { UsageRateTimeline };
