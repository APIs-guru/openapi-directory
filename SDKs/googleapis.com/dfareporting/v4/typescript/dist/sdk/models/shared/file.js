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
import { DateRange } from "./daterange";
export var FileFormatEnum;
(function (FileFormatEnum) {
    FileFormatEnum["Csv"] = "CSV";
    FileFormatEnum["Excel"] = "EXCEL";
})(FileFormatEnum || (FileFormatEnum = {}));
export var FileStatusEnum;
(function (FileStatusEnum) {
    FileStatusEnum["Processing"] = "PROCESSING";
    FileStatusEnum["ReportAvailable"] = "REPORT_AVAILABLE";
    FileStatusEnum["Failed"] = "FAILED";
    FileStatusEnum["Cancelled"] = "CANCELLED";
    FileStatusEnum["Queued"] = "QUEUED";
})(FileStatusEnum || (FileStatusEnum = {}));
// FileUrls
/**
 * The URLs where the completed report file can be downloaded.
**/
var FileUrls = /** @class */ (function (_super) {
    __extends(FileUrls, _super);
    function FileUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiUrl" }),
        __metadata("design:type", String)
    ], FileUrls.prototype, "apiUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserUrl" }),
        __metadata("design:type", String)
    ], FileUrls.prototype, "browserUrl", void 0);
    return FileUrls;
}(SpeakeasyBase));
export { FileUrls };
// File
/**
 * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
**/
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], File.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], File.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileName" }),
        __metadata("design:type", String)
    ], File.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], File.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], File.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], File.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], File.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportId" }),
        __metadata("design:type", String)
    ], File.prototype, "reportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], File.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls" }),
        __metadata("design:type", FileUrls)
    ], File.prototype, "urls", void 0);
    return File;
}(SpeakeasyBase));
export { File };
