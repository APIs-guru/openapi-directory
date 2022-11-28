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
export var PacingPacingPeriodEnum;
(function (PacingPacingPeriodEnum) {
    PacingPacingPeriodEnum["PacingPeriodUnspecified"] = "PACING_PERIOD_UNSPECIFIED";
    PacingPacingPeriodEnum["PacingPeriodDaily"] = "PACING_PERIOD_DAILY";
    PacingPacingPeriodEnum["PacingPeriodFlight"] = "PACING_PERIOD_FLIGHT";
})(PacingPacingPeriodEnum || (PacingPacingPeriodEnum = {}));
export var PacingPacingTypeEnum;
(function (PacingPacingTypeEnum) {
    PacingPacingTypeEnum["PacingTypeUnspecified"] = "PACING_TYPE_UNSPECIFIED";
    PacingPacingTypeEnum["PacingTypeAhead"] = "PACING_TYPE_AHEAD";
    PacingPacingTypeEnum["PacingTypeAsap"] = "PACING_TYPE_ASAP";
    PacingPacingTypeEnum["PacingTypeEven"] = "PACING_TYPE_EVEN";
})(PacingPacingTypeEnum || (PacingPacingTypeEnum = {}));
// Pacing
/**
 * Settings that control the rate at which a budget is spent.
**/
var Pacing = /** @class */ (function (_super) {
    __extends(Pacing, _super);
    function Pacing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyMaxImpressions" }),
        __metadata("design:type", String)
    ], Pacing.prototype, "dailyMaxImpressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyMaxMicros" }),
        __metadata("design:type", String)
    ], Pacing.prototype, "dailyMaxMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacingPeriod" }),
        __metadata("design:type", String)
    ], Pacing.prototype, "pacingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacingType" }),
        __metadata("design:type", String)
    ], Pacing.prototype, "pacingType", void 0);
    return Pacing;
}(SpeakeasyBase));
export { Pacing };
