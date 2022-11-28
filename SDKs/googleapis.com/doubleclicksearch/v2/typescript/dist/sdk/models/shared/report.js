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
import { ReportRequest } from "./reportrequest";
var ReportFiles = /** @class */ (function (_super) {
    __extends(ReportFiles, _super);
    function ReportFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byteCount" }),
        __metadata("design:type", String)
    ], ReportFiles.prototype, "byteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReportFiles.prototype, "url", void 0);
    return ReportFiles;
}(SpeakeasyBase));
export { ReportFiles };
// Report
/**
 * A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.
**/
var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: ReportFiles }),
        __metadata("design:type", Array)
    ], Report.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Report.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReportReady" }),
        __metadata("design:type", Boolean)
    ], Report.prototype, "isReportReady", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Report.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request" }),
        __metadata("design:type", ReportRequest)
    ], Report.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", Number)
    ], Report.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows" }),
        __metadata("design:type", Array)
    ], Report.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statisticsCurrencyCode" }),
        __metadata("design:type", String)
    ], Report.prototype, "statisticsCurrencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statisticsTimeZone" }),
        __metadata("design:type", String)
    ], Report.prototype, "statisticsTimeZone", void 0);
    return Report;
}(SpeakeasyBase));
export { Report };
