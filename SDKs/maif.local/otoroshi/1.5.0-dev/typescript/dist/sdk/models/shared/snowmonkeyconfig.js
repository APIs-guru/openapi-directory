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
import { ChaosConfig } from "./chaosconfig";
import { OutageStrategyEnum } from "./outagestrategyenum";
// SnowMonkeyConfig
/**
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
**/
var SnowMonkeyConfig = /** @class */ (function (_super) {
    __extends(SnowMonkeyConfig, _super);
    function SnowMonkeyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chaosConfig" }),
        __metadata("design:type", ChaosConfig)
    ], SnowMonkeyConfig.prototype, "chaosConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], SnowMonkeyConfig.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], SnowMonkeyConfig.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUserFacingDescriptors" }),
        __metadata("design:type", Boolean)
    ], SnowMonkeyConfig.prototype, "includeUserFacingDescriptors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outageDurationFrom" }),
        __metadata("design:type", Number)
    ], SnowMonkeyConfig.prototype, "outageDurationFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outageDurationTo" }),
        __metadata("design:type", Number)
    ], SnowMonkeyConfig.prototype, "outageDurationTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outageStrategy" }),
        __metadata("design:type", String)
    ], SnowMonkeyConfig.prototype, "outageStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], SnowMonkeyConfig.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopTime" }),
        __metadata("design:type", String)
    ], SnowMonkeyConfig.prototype, "stopTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetGroups" }),
        __metadata("design:type", Array)
    ], SnowMonkeyConfig.prototype, "targetGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timesPerDay" }),
        __metadata("design:type", Number)
    ], SnowMonkeyConfig.prototype, "timesPerDay", void 0);
    return SnowMonkeyConfig;
}(SpeakeasyBase));
export { SnowMonkeyConfig };
