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
import { DataSourceRefreshDailySchedule } from "./datasourcerefreshdailyschedule";
import { DataSourceRefreshMonthlySchedule } from "./datasourcerefreshmonthlyschedule";
import { Interval } from "./interval";
import { DataSourceRefreshWeeklySchedule } from "./datasourcerefreshweeklyschedule";
export var DataSourceRefreshScheduleRefreshScopeEnum;
(function (DataSourceRefreshScheduleRefreshScopeEnum) {
    DataSourceRefreshScheduleRefreshScopeEnum["DataSourceRefreshScopeUnspecified"] = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED";
    DataSourceRefreshScheduleRefreshScopeEnum["AllDataSources"] = "ALL_DATA_SOURCES";
})(DataSourceRefreshScheduleRefreshScopeEnum || (DataSourceRefreshScheduleRefreshScopeEnum = {}));
// DataSourceRefreshSchedule
/**
 * Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
**/
var DataSourceRefreshSchedule = /** @class */ (function (_super) {
    __extends(DataSourceRefreshSchedule, _super);
    function DataSourceRefreshSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailySchedule" }),
        __metadata("design:type", DataSourceRefreshDailySchedule)
    ], DataSourceRefreshSchedule.prototype, "dailySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], DataSourceRefreshSchedule.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthlySchedule" }),
        __metadata("design:type", DataSourceRefreshMonthlySchedule)
    ], DataSourceRefreshSchedule.prototype, "monthlySchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextRun" }),
        __metadata("design:type", Interval)
    ], DataSourceRefreshSchedule.prototype, "nextRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshScope" }),
        __metadata("design:type", String)
    ], DataSourceRefreshSchedule.prototype, "refreshScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weeklySchedule" }),
        __metadata("design:type", DataSourceRefreshWeeklySchedule)
    ], DataSourceRefreshSchedule.prototype, "weeklySchedule", void 0);
    return DataSourceRefreshSchedule;
}(SpeakeasyBase));
export { DataSourceRefreshSchedule };
