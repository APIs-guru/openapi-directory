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
export var QueryMetadataDataRangeEnum;
(function (QueryMetadataDataRangeEnum) {
    QueryMetadataDataRangeEnum["CustomDates"] = "CUSTOM_DATES";
    QueryMetadataDataRangeEnum["CurrentDay"] = "CURRENT_DAY";
    QueryMetadataDataRangeEnum["PreviousDay"] = "PREVIOUS_DAY";
    QueryMetadataDataRangeEnum["WeekToDate"] = "WEEK_TO_DATE";
    QueryMetadataDataRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    QueryMetadataDataRangeEnum["QuarterToDate"] = "QUARTER_TO_DATE";
    QueryMetadataDataRangeEnum["YearToDate"] = "YEAR_TO_DATE";
    QueryMetadataDataRangeEnum["PreviousWeek"] = "PREVIOUS_WEEK";
    QueryMetadataDataRangeEnum["PreviousHalfMonth"] = "PREVIOUS_HALF_MONTH";
    QueryMetadataDataRangeEnum["PreviousMonth"] = "PREVIOUS_MONTH";
    QueryMetadataDataRangeEnum["PreviousQuarter"] = "PREVIOUS_QUARTER";
    QueryMetadataDataRangeEnum["PreviousYear"] = "PREVIOUS_YEAR";
    QueryMetadataDataRangeEnum["Last7Days"] = "LAST_7_DAYS";
    QueryMetadataDataRangeEnum["Last30Days"] = "LAST_30_DAYS";
    QueryMetadataDataRangeEnum["Last90Days"] = "LAST_90_DAYS";
    QueryMetadataDataRangeEnum["Last365Days"] = "LAST_365_DAYS";
    QueryMetadataDataRangeEnum["AllTime"] = "ALL_TIME";
    QueryMetadataDataRangeEnum["Last14Days"] = "LAST_14_DAYS";
    QueryMetadataDataRangeEnum["TypeNotSupported"] = "TYPE_NOT_SUPPORTED";
    QueryMetadataDataRangeEnum["Last60Days"] = "LAST_60_DAYS";
})(QueryMetadataDataRangeEnum || (QueryMetadataDataRangeEnum = {}));
export var QueryMetadataFormatEnum;
(function (QueryMetadataFormatEnum) {
    QueryMetadataFormatEnum["Csv"] = "CSV";
    QueryMetadataFormatEnum["ExcelCsv"] = "EXCEL_CSV";
    QueryMetadataFormatEnum["Xlsx"] = "XLSX";
})(QueryMetadataFormatEnum || (QueryMetadataFormatEnum = {}));
// QueryMetadata
/**
 * Query metadata.
**/
var QueryMetadata = /** @class */ (function (_super) {
    __extends(QueryMetadata, _super);
    function QueryMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRange" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "dataRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleCloudStoragePathForLatestReport" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "googleCloudStoragePathForLatestReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleDrivePathForLatestReport" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "googleDrivePathForLatestReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReportRunTimeMs" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "latestReportRunTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportCount" }),
        __metadata("design:type", Number)
    ], QueryMetadata.prototype, "reportCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=running" }),
        __metadata("design:type", Boolean)
    ], QueryMetadata.prototype, "running", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendNotification" }),
        __metadata("design:type", Boolean)
    ], QueryMetadata.prototype, "sendNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareEmailAddress" }),
        __metadata("design:type", Array)
    ], QueryMetadata.prototype, "shareEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], QueryMetadata.prototype, "title", void 0);
    return QueryMetadata;
}(SpeakeasyBase));
export { QueryMetadata };
