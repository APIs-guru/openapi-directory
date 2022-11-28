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
import { ReportApiColumnSpec } from "./reportapicolumnspec";
var ReportRequestFilters = /** @class */ (function (_super) {
    __extends(ReportRequestFilters, _super);
    function ReportRequestFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column" }),
        __metadata("design:type", ReportApiColumnSpec)
    ], ReportRequestFilters.prototype, "column", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], ReportRequestFilters.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], ReportRequestFilters.prototype, "values", void 0);
    return ReportRequestFilters;
}(SpeakeasyBase));
export { ReportRequestFilters };
var ReportRequestOrderBy = /** @class */ (function (_super) {
    __extends(ReportRequestOrderBy, _super);
    function ReportRequestOrderBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=column" }),
        __metadata("design:type", ReportApiColumnSpec)
    ], ReportRequestOrderBy.prototype, "column", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], ReportRequestOrderBy.prototype, "sortOrder", void 0);
    return ReportRequestOrderBy;
}(SpeakeasyBase));
export { ReportRequestOrderBy };
// ReportRequestReportScope
/**
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
**/
var ReportRequestReportScope = /** @class */ (function (_super) {
    __extends(ReportRequestReportScope, _super);
    function ReportRequestReportScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adGroupId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "adGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "adId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agencyId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "agencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engineAccountId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "engineAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordId" }),
        __metadata("design:type", String)
    ], ReportRequestReportScope.prototype, "keywordId", void 0);
    return ReportRequestReportScope;
}(SpeakeasyBase));
export { ReportRequestReportScope };
// ReportRequestTimeRange
/**
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
**/
var ReportRequestTimeRange = /** @class */ (function (_super) {
    __extends(ReportRequestTimeRange, _super);
    function ReportRequestTimeRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changedAttributesSinceTimestamp" }),
        __metadata("design:type", String)
    ], ReportRequestTimeRange.prototype, "changedAttributesSinceTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changedMetricsSinceTimestamp" }),
        __metadata("design:type", String)
    ], ReportRequestTimeRange.prototype, "changedMetricsSinceTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], ReportRequestTimeRange.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], ReportRequestTimeRange.prototype, "startDate", void 0);
    return ReportRequestTimeRange;
}(SpeakeasyBase));
export { ReportRequestTimeRange };
// ReportRequest
/**
 * A request object used to create a DoubleClick Search report.
**/
var ReportRequest = /** @class */ (function (_super) {
    __extends(ReportRequest, _super);
    function ReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns", elemType: ReportApiColumnSpec }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadFormat" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "downloadFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters", elemType: ReportRequestFilters }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeDeletedEntities" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "includeDeletedEntities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeRemovedEntities" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "includeRemovedEntities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRowsPerFile" }),
        __metadata("design:type", Number)
    ], ReportRequest.prototype, "maxRowsPerFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy", elemType: ReportRequestOrderBy }),
        __metadata("design:type", Array)
    ], ReportRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportScope" }),
        __metadata("design:type", ReportRequestReportScope)
    ], ReportRequest.prototype, "reportScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportType" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", Number)
    ], ReportRequest.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startRow" }),
        __metadata("design:type", Number)
    ], ReportRequest.prototype, "startRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statisticsCurrency" }),
        __metadata("design:type", String)
    ], ReportRequest.prototype, "statisticsCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeRange" }),
        __metadata("design:type", ReportRequestTimeRange)
    ], ReportRequest.prototype, "timeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifySingleTimeZone" }),
        __metadata("design:type", Boolean)
    ], ReportRequest.prototype, "verifySingleTimeZone", void 0);
    return ReportRequest;
}(SpeakeasyBase));
export { ReportRequest };
