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
// LinodeStatsIo
/**
 * Input/Output statistics.
**/
var LinodeStatsIo = /** @class */ (function (_super) {
    __extends(LinodeStatsIo, _super);
    function LinodeStatsIo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=io" }),
        __metadata("design:type", Array)
    ], LinodeStatsIo.prototype, "io", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=swap" }),
        __metadata("design:type", Array)
    ], LinodeStatsIo.prototype, "swap", void 0);
    return LinodeStatsIo;
}(SpeakeasyBase));
export { LinodeStatsIo };
// LinodeStatsNetv4
/**
 * IPv4 statistics.
**/
var LinodeStatsNetv4 = /** @class */ (function (_super) {
    __extends(LinodeStatsNetv4, _super);
    function LinodeStatsNetv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv4.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv4.prototype, "out", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_in" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv4.prototype, "privateIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_out" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv4.prototype, "privateOut", void 0);
    return LinodeStatsNetv4;
}(SpeakeasyBase));
export { LinodeStatsNetv4 };
// LinodeStatsNetv6
/**
 * IPv6 statistics.
**/
var LinodeStatsNetv6 = /** @class */ (function (_super) {
    __extends(LinodeStatsNetv6, _super);
    function LinodeStatsNetv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv6.prototype, "in", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=out" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv6.prototype, "out", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_in" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv6.prototype, "privateIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_out" }),
        __metadata("design:type", Array)
    ], LinodeStatsNetv6.prototype, "privateOut", void 0);
    return LinodeStatsNetv6;
}(SpeakeasyBase));
export { LinodeStatsNetv6 };
// LinodeStats
/**
 * CPU, IO, IPv4, and IPv6 statistics. Graph data, if available, is in "[timestamp, reading]" array format. Timestamp is a UNIX timestamp in EST.
 *
**/
var LinodeStats = /** @class */ (function (_super) {
    __extends(LinodeStats, _super);
    function LinodeStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", Array)
    ], LinodeStats.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=io" }),
        __metadata("design:type", LinodeStatsIo)
    ], LinodeStats.prototype, "io", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netv4" }),
        __metadata("design:type", LinodeStatsNetv4)
    ], LinodeStats.prototype, "netv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netv6" }),
        __metadata("design:type", LinodeStatsNetv6)
    ], LinodeStats.prototype, "netv6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], LinodeStats.prototype, "title", void 0);
    return LinodeStats;
}(SpeakeasyBase));
export { LinodeStats };
