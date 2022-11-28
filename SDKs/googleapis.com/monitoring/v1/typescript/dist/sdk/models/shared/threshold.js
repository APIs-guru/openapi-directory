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
export var ThresholdColorEnum;
(function (ThresholdColorEnum) {
    ThresholdColorEnum["ColorUnspecified"] = "COLOR_UNSPECIFIED";
    ThresholdColorEnum["Yellow"] = "YELLOW";
    ThresholdColorEnum["Red"] = "RED";
})(ThresholdColorEnum || (ThresholdColorEnum = {}));
export var ThresholdDirectionEnum;
(function (ThresholdDirectionEnum) {
    ThresholdDirectionEnum["DirectionUnspecified"] = "DIRECTION_UNSPECIFIED";
    ThresholdDirectionEnum["Above"] = "ABOVE";
    ThresholdDirectionEnum["Below"] = "BELOW";
})(ThresholdDirectionEnum || (ThresholdDirectionEnum = {}));
export var ThresholdTargetAxisEnum;
(function (ThresholdTargetAxisEnum) {
    ThresholdTargetAxisEnum["TargetAxisUnspecified"] = "TARGET_AXIS_UNSPECIFIED";
    ThresholdTargetAxisEnum["Y1"] = "Y1";
    ThresholdTargetAxisEnum["Y2"] = "Y2";
})(ThresholdTargetAxisEnum || (ThresholdTargetAxisEnum = {}));
// Threshold
/**
 * Defines a threshold for categorizing time series values.
**/
var Threshold = /** @class */ (function (_super) {
    __extends(Threshold, _super);
    function Threshold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Threshold.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], Threshold.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Threshold.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetAxis" }),
        __metadata("design:type", String)
    ], Threshold.prototype, "targetAxis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], Threshold.prototype, "value", void 0);
    return Threshold;
}(SpeakeasyBase));
export { Threshold };
