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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var ResultMetadataDataTypeEnum;
(function (ResultMetadataDataTypeEnum) {
    ResultMetadataDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    ResultMetadataDataTypeEnum["Int"] = "INT";
    ResultMetadataDataTypeEnum["Smallint"] = "SMALLINT";
    ResultMetadataDataTypeEnum["Double"] = "DOUBLE";
    ResultMetadataDataTypeEnum["Date"] = "DATE";
    ResultMetadataDataTypeEnum["Datetime"] = "DATETIME";
    ResultMetadataDataTypeEnum["Time"] = "TIME";
    ResultMetadataDataTypeEnum["String"] = "STRING";
    ResultMetadataDataTypeEnum["Long"] = "LONG";
    ResultMetadataDataTypeEnum["Boolean"] = "BOOLEAN";
    ResultMetadataDataTypeEnum["Decimal"] = "DECIMAL";
    ResultMetadataDataTypeEnum["Uuid"] = "UUID";
    ResultMetadataDataTypeEnum["Blob"] = "BLOB";
    ResultMetadataDataTypeEnum["Bit"] = "BIT";
    ResultMetadataDataTypeEnum["Tinyint"] = "TINYINT";
    ResultMetadataDataTypeEnum["Integer"] = "INTEGER";
    ResultMetadataDataTypeEnum["Bigint"] = "BIGINT";
    ResultMetadataDataTypeEnum["Float"] = "FLOAT";
    ResultMetadataDataTypeEnum["Real"] = "REAL";
    ResultMetadataDataTypeEnum["Numeric"] = "NUMERIC";
    ResultMetadataDataTypeEnum["Char"] = "CHAR";
    ResultMetadataDataTypeEnum["Varchar"] = "VARCHAR";
    ResultMetadataDataTypeEnum["Longvarchar"] = "LONGVARCHAR";
    ResultMetadataDataTypeEnum["Timestamp"] = "TIMESTAMP";
    ResultMetadataDataTypeEnum["Nchar"] = "NCHAR";
    ResultMetadataDataTypeEnum["Nvarchar"] = "NVARCHAR";
    ResultMetadataDataTypeEnum["Longnvarchar"] = "LONGNVARCHAR";
    ResultMetadataDataTypeEnum["Null"] = "NULL";
    ResultMetadataDataTypeEnum["Other"] = "OTHER";
    ResultMetadataDataTypeEnum["JavaObject"] = "JAVA_OBJECT";
    ResultMetadataDataTypeEnum["Distinct"] = "DISTINCT";
    ResultMetadataDataTypeEnum["Struct"] = "STRUCT";
    ResultMetadataDataTypeEnum["Array"] = "ARRAY";
    ResultMetadataDataTypeEnum["Clob"] = "CLOB";
    ResultMetadataDataTypeEnum["Ref"] = "REF";
    ResultMetadataDataTypeEnum["Datalink"] = "DATALINK";
    ResultMetadataDataTypeEnum["Rowid"] = "ROWID";
    ResultMetadataDataTypeEnum["Binary"] = "BINARY";
    ResultMetadataDataTypeEnum["Varbinary"] = "VARBINARY";
    ResultMetadataDataTypeEnum["Longvarbinary"] = "LONGVARBINARY";
    ResultMetadataDataTypeEnum["Nclob"] = "NCLOB";
    ResultMetadataDataTypeEnum["Sqlxml"] = "SQLXML";
    ResultMetadataDataTypeEnum["RefCursor"] = "REF_CURSOR";
    ResultMetadataDataTypeEnum["TimeWithTimezone"] = "TIME_WITH_TIMEZONE";
    ResultMetadataDataTypeEnum["TimestampWithTimezone"] = "TIMESTAMP_WITH_TIMEZONE";
})(ResultMetadataDataTypeEnum || (ResultMetadataDataTypeEnum = {}));
// ResultMetadata
/**
 * Result Metadata message contains metadata about the result returned after executing an Action.
**/
var ResultMetadata = /** @class */ (function (_super) {
    __extends(ResultMetadata, _super);
    function ResultMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "dataType", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "name", void 0);
    return ResultMetadata;
}(SpeakeasyBase));
export { ResultMetadata };
