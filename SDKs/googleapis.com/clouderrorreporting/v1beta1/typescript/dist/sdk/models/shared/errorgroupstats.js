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
import { ServiceContext } from "./servicecontext";
import { ErrorGroup } from "./errorgroup";
import { ErrorEvent } from "./errorevent";
import { TimedCount } from "./timedcount";
// ErrorGroupStats
/**
 * Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.
**/
var ErrorGroupStats = /** @class */ (function (_super) {
    __extends(ErrorGroupStats, _super);
    function ErrorGroupStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedServices", elemType: ServiceContext }),
        __metadata("design:type", Array)
    ], ErrorGroupStats.prototype, "affectedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affectedUsersCount" }),
        __metadata("design:type", String)
    ], ErrorGroupStats.prototype, "affectedUsersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], ErrorGroupStats.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstSeenTime" }),
        __metadata("design:type", String)
    ], ErrorGroupStats.prototype, "firstSeenTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", ErrorGroup)
    ], ErrorGroupStats.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSeenTime" }),
        __metadata("design:type", String)
    ], ErrorGroupStats.prototype, "lastSeenTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numAffectedServices" }),
        __metadata("design:type", Number)
    ], ErrorGroupStats.prototype, "numAffectedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=representative" }),
        __metadata("design:type", ErrorEvent)
    ], ErrorGroupStats.prototype, "representative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timedCounts", elemType: TimedCount }),
        __metadata("design:type", Array)
    ], ErrorGroupStats.prototype, "timedCounts", void 0);
    return ErrorGroupStats;
}(SpeakeasyBase));
export { ErrorGroupStats };
