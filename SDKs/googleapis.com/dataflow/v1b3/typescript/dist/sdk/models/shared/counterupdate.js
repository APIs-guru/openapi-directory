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
import { DistributionUpdate } from "./distributionupdate";
import { FloatingPointList } from "./floatingpointlist";
import { FloatingPointMean } from "./floatingpointmean";
import { SplitInt64 } from "./splitint64";
import { IntegerGauge } from "./integergauge";
import { IntegerList } from "./integerlist";
import { IntegerMean } from "./integermean";
import { NameAndKind } from "./nameandkind";
import { StringList } from "./stringlist";
import { CounterStructuredNameAndMetadata } from "./counterstructurednameandmetadata";
// CounterUpdate
/**
 * An update to a Counter sent from a worker.
**/
var CounterUpdate = /** @class */ (function (_super) {
    __extends(CounterUpdate, _super);
    function CounterUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolean" }),
        __metadata("design:type", Boolean)
    ], CounterUpdate.prototype, "boolean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulative" }),
        __metadata("design:type", Boolean)
    ], CounterUpdate.prototype, "cumulative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distribution" }),
        __metadata("design:type", DistributionUpdate)
    ], CounterUpdate.prototype, "distribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floatingPoint" }),
        __metadata("design:type", Number)
    ], CounterUpdate.prototype, "floatingPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floatingPointList" }),
        __metadata("design:type", FloatingPointList)
    ], CounterUpdate.prototype, "floatingPointList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floatingPointMean" }),
        __metadata("design:type", FloatingPointMean)
    ], CounterUpdate.prototype, "floatingPointMean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integer" }),
        __metadata("design:type", SplitInt64)
    ], CounterUpdate.prototype, "integer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerGauge" }),
        __metadata("design:type", IntegerGauge)
    ], CounterUpdate.prototype, "integerGauge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerList" }),
        __metadata("design:type", IntegerList)
    ], CounterUpdate.prototype, "integerList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerMean" }),
        __metadata("design:type", IntegerMean)
    ], CounterUpdate.prototype, "integerMean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internal" }),
        __metadata("design:type", Object)
    ], CounterUpdate.prototype, "internal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nameAndKind" }),
        __metadata("design:type", NameAndKind)
    ], CounterUpdate.prototype, "nameAndKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortId" }),
        __metadata("design:type", String)
    ], CounterUpdate.prototype, "shortId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringList" }),
        __metadata("design:type", StringList)
    ], CounterUpdate.prototype, "stringList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structuredNameAndMetadata" }),
        __metadata("design:type", CounterStructuredNameAndMetadata)
    ], CounterUpdate.prototype, "structuredNameAndMetadata", void 0);
    return CounterUpdate;
}(SpeakeasyBase));
export { CounterUpdate };
