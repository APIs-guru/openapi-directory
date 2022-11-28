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
// ExportContextCsvExportOptions
/**
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
**/
var ExportContextCsvExportOptions = /** @class */ (function (_super) {
    __extends(ExportContextCsvExportOptions, _super);
    function ExportContextCsvExportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escapeCharacter" }),
        __metadata("design:type", String)
    ], ExportContextCsvExportOptions.prototype, "escapeCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldsTerminatedBy" }),
        __metadata("design:type", String)
    ], ExportContextCsvExportOptions.prototype, "fieldsTerminatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linesTerminatedBy" }),
        __metadata("design:type", String)
    ], ExportContextCsvExportOptions.prototype, "linesTerminatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteCharacter" }),
        __metadata("design:type", String)
    ], ExportContextCsvExportOptions.prototype, "quoteCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectQuery" }),
        __metadata("design:type", String)
    ], ExportContextCsvExportOptions.prototype, "selectQuery", void 0);
    return ExportContextCsvExportOptions;
}(SpeakeasyBase));
export { ExportContextCsvExportOptions };
export var ExportContextFileTypeEnum;
(function (ExportContextFileTypeEnum) {
    ExportContextFileTypeEnum["SqlFileTypeUnspecified"] = "SQL_FILE_TYPE_UNSPECIFIED";
    ExportContextFileTypeEnum["Sql"] = "SQL";
    ExportContextFileTypeEnum["Csv"] = "CSV";
    ExportContextFileTypeEnum["Bak"] = "BAK";
})(ExportContextFileTypeEnum || (ExportContextFileTypeEnum = {}));
// ExportContextSqlExportOptionsMysqlExportOptions
/**
 * Options for exporting from MySQL.
**/
var ExportContextSqlExportOptionsMysqlExportOptions = /** @class */ (function (_super) {
    __extends(ExportContextSqlExportOptionsMysqlExportOptions, _super);
    function ExportContextSqlExportOptionsMysqlExportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterData" }),
        __metadata("design:type", Number)
    ], ExportContextSqlExportOptionsMysqlExportOptions.prototype, "masterData", void 0);
    return ExportContextSqlExportOptionsMysqlExportOptions;
}(SpeakeasyBase));
export { ExportContextSqlExportOptionsMysqlExportOptions };
// ExportContextSqlExportOptions
/**
 * Options for exporting data as SQL statements.
**/
var ExportContextSqlExportOptions = /** @class */ (function (_super) {
    __extends(ExportContextSqlExportOptions, _super);
    function ExportContextSqlExportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysqlExportOptions" }),
        __metadata("design:type", ExportContextSqlExportOptionsMysqlExportOptions)
    ], ExportContextSqlExportOptions.prototype, "mysqlExportOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaOnly" }),
        __metadata("design:type", Boolean)
    ], ExportContextSqlExportOptions.prototype, "schemaOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tables" }),
        __metadata("design:type", Array)
    ], ExportContextSqlExportOptions.prototype, "tables", void 0);
    return ExportContextSqlExportOptions;
}(SpeakeasyBase));
export { ExportContextSqlExportOptions };
// ExportContext
/**
 * Database instance export context.
**/
var ExportContext = /** @class */ (function (_super) {
    __extends(ExportContext, _super);
    function ExportContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvExportOptions" }),
        __metadata("design:type", ExportContextCsvExportOptions)
    ], ExportContext.prototype, "csvExportOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databases" }),
        __metadata("design:type", Array)
    ], ExportContext.prototype, "databases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], ExportContext.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ExportContext.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offload" }),
        __metadata("design:type", Boolean)
    ], ExportContext.prototype, "offload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlExportOptions" }),
        __metadata("design:type", ExportContextSqlExportOptions)
    ], ExportContext.prototype, "sqlExportOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ExportContext.prototype, "uri", void 0);
    return ExportContext;
}(SpeakeasyBase));
export { ExportContext };
