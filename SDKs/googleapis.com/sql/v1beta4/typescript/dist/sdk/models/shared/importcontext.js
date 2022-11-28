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
var ImportContextBakImportOptionsEncryptionOptions = /** @class */ (function (_super) {
    __extends(ImportContextBakImportOptionsEncryptionOptions, _super);
    function ImportContextBakImportOptionsEncryptionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certPath" }),
        __metadata("design:type", String)
    ], ImportContextBakImportOptionsEncryptionOptions.prototype, "certPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvkPassword" }),
        __metadata("design:type", String)
    ], ImportContextBakImportOptionsEncryptionOptions.prototype, "pvkPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pvkPath" }),
        __metadata("design:type", String)
    ], ImportContextBakImportOptionsEncryptionOptions.prototype, "pvkPath", void 0);
    return ImportContextBakImportOptionsEncryptionOptions;
}(SpeakeasyBase));
export { ImportContextBakImportOptionsEncryptionOptions };
// ImportContextBakImportOptions
/**
 * Import parameters specific to SQL Server .BAK files
**/
var ImportContextBakImportOptions = /** @class */ (function (_super) {
    __extends(ImportContextBakImportOptions, _super);
    function ImportContextBakImportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionOptions" }),
        __metadata("design:type", ImportContextBakImportOptionsEncryptionOptions)
    ], ImportContextBakImportOptions.prototype, "encryptionOptions", void 0);
    return ImportContextBakImportOptions;
}(SpeakeasyBase));
export { ImportContextBakImportOptions };
// ImportContextCsvImportOptions
/**
 * Options for importing data as CSV.
**/
var ImportContextCsvImportOptions = /** @class */ (function (_super) {
    __extends(ImportContextCsvImportOptions, _super);
    function ImportContextCsvImportOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columns" }),
        __metadata("design:type", Array)
    ], ImportContextCsvImportOptions.prototype, "columns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=escapeCharacter" }),
        __metadata("design:type", String)
    ], ImportContextCsvImportOptions.prototype, "escapeCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldsTerminatedBy" }),
        __metadata("design:type", String)
    ], ImportContextCsvImportOptions.prototype, "fieldsTerminatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linesTerminatedBy" }),
        __metadata("design:type", String)
    ], ImportContextCsvImportOptions.prototype, "linesTerminatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteCharacter" }),
        __metadata("design:type", String)
    ], ImportContextCsvImportOptions.prototype, "quoteCharacter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", String)
    ], ImportContextCsvImportOptions.prototype, "table", void 0);
    return ImportContextCsvImportOptions;
}(SpeakeasyBase));
export { ImportContextCsvImportOptions };
export var ImportContextFileTypeEnum;
(function (ImportContextFileTypeEnum) {
    ImportContextFileTypeEnum["SqlFileTypeUnspecified"] = "SQL_FILE_TYPE_UNSPECIFIED";
    ImportContextFileTypeEnum["Sql"] = "SQL";
    ImportContextFileTypeEnum["Csv"] = "CSV";
    ImportContextFileTypeEnum["Bak"] = "BAK";
})(ImportContextFileTypeEnum || (ImportContextFileTypeEnum = {}));
// ImportContext
/**
 * Database instance import context.
**/
var ImportContext = /** @class */ (function (_super) {
    __extends(ImportContext, _super);
    function ImportContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bakImportOptions" }),
        __metadata("design:type", ImportContextBakImportOptions)
    ], ImportContext.prototype, "bakImportOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvImportOptions" }),
        __metadata("design:type", ImportContextCsvImportOptions)
    ], ImportContext.prototype, "csvImportOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], ImportContext.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], ImportContext.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importUser" }),
        __metadata("design:type", String)
    ], ImportContext.prototype, "importUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ImportContext.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ImportContext.prototype, "uri", void 0);
    return ImportContext;
}(SpeakeasyBase));
export { ImportContext };
