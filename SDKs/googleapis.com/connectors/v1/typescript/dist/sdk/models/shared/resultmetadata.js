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
export var ResultMetadataDataTypeEnum;
(function (ResultMetadataDataTypeEnum) {
    ResultMetadataDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    ResultMetadataDataTypeEnum["DataTypeInt"] = "DATA_TYPE_INT";
    ResultMetadataDataTypeEnum["DataTypeSmallint"] = "DATA_TYPE_SMALLINT";
    ResultMetadataDataTypeEnum["DataTypeDouble"] = "DATA_TYPE_DOUBLE";
    ResultMetadataDataTypeEnum["DataTypeDate"] = "DATA_TYPE_DATE";
    ResultMetadataDataTypeEnum["DataTypeDatetime"] = "DATA_TYPE_DATETIME";
    ResultMetadataDataTypeEnum["DataTypeTime"] = "DATA_TYPE_TIME";
    ResultMetadataDataTypeEnum["DataTypeString"] = "DATA_TYPE_STRING";
    ResultMetadataDataTypeEnum["DataTypeLong"] = "DATA_TYPE_LONG";
    ResultMetadataDataTypeEnum["DataTypeBoolean"] = "DATA_TYPE_BOOLEAN";
    ResultMetadataDataTypeEnum["DataTypeDecimal"] = "DATA_TYPE_DECIMAL";
    ResultMetadataDataTypeEnum["DataTypeUuid"] = "DATA_TYPE_UUID";
    ResultMetadataDataTypeEnum["DataTypeBlob"] = "DATA_TYPE_BLOB";
    ResultMetadataDataTypeEnum["DataTypeBit"] = "DATA_TYPE_BIT";
    ResultMetadataDataTypeEnum["DataTypeTinyint"] = "DATA_TYPE_TINYINT";
    ResultMetadataDataTypeEnum["DataTypeInteger"] = "DATA_TYPE_INTEGER";
    ResultMetadataDataTypeEnum["DataTypeBigint"] = "DATA_TYPE_BIGINT";
    ResultMetadataDataTypeEnum["DataTypeFloat"] = "DATA_TYPE_FLOAT";
    ResultMetadataDataTypeEnum["DataTypeReal"] = "DATA_TYPE_REAL";
    ResultMetadataDataTypeEnum["DataTypeNumeric"] = "DATA_TYPE_NUMERIC";
    ResultMetadataDataTypeEnum["DataTypeChar"] = "DATA_TYPE_CHAR";
    ResultMetadataDataTypeEnum["DataTypeVarchar"] = "DATA_TYPE_VARCHAR";
    ResultMetadataDataTypeEnum["DataTypeLongvarchar"] = "DATA_TYPE_LONGVARCHAR";
    ResultMetadataDataTypeEnum["DataTypeTimestamp"] = "DATA_TYPE_TIMESTAMP";
    ResultMetadataDataTypeEnum["DataTypeNchar"] = "DATA_TYPE_NCHAR";
    ResultMetadataDataTypeEnum["DataTypeNvarchar"] = "DATA_TYPE_NVARCHAR";
    ResultMetadataDataTypeEnum["DataTypeLongnvarchar"] = "DATA_TYPE_LONGNVARCHAR";
    ResultMetadataDataTypeEnum["DataTypeNull"] = "DATA_TYPE_NULL";
    ResultMetadataDataTypeEnum["DataTypeOther"] = "DATA_TYPE_OTHER";
    ResultMetadataDataTypeEnum["DataTypeJavaObject"] = "DATA_TYPE_JAVA_OBJECT";
    ResultMetadataDataTypeEnum["DataTypeDistinct"] = "DATA_TYPE_DISTINCT";
    ResultMetadataDataTypeEnum["DataTypeStruct"] = "DATA_TYPE_STRUCT";
    ResultMetadataDataTypeEnum["DataTypeArray"] = "DATA_TYPE_ARRAY";
    ResultMetadataDataTypeEnum["DataTypeClob"] = "DATA_TYPE_CLOB";
    ResultMetadataDataTypeEnum["DataTypeRef"] = "DATA_TYPE_REF";
    ResultMetadataDataTypeEnum["DataTypeDatalink"] = "DATA_TYPE_DATALINK";
    ResultMetadataDataTypeEnum["DataTypeRowid"] = "DATA_TYPE_ROWID";
    ResultMetadataDataTypeEnum["DataTypeBinary"] = "DATA_TYPE_BINARY";
    ResultMetadataDataTypeEnum["DataTypeVarbinary"] = "DATA_TYPE_VARBINARY";
    ResultMetadataDataTypeEnum["DataTypeLongvarbinary"] = "DATA_TYPE_LONGVARBINARY";
    ResultMetadataDataTypeEnum["DataTypeNclob"] = "DATA_TYPE_NCLOB";
    ResultMetadataDataTypeEnum["DataTypeSqlxml"] = "DATA_TYPE_SQLXML";
    ResultMetadataDataTypeEnum["DataTypeRefCursor"] = "DATA_TYPE_REF_CURSOR";
    ResultMetadataDataTypeEnum["DataTypeTimeWithTimezone"] = "DATA_TYPE_TIME_WITH_TIMEZONE";
    ResultMetadataDataTypeEnum["DataTypeTimestampWithTimezone"] = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE";
})(ResultMetadataDataTypeEnum || (ResultMetadataDataTypeEnum = {}));
// ResultMetadata
/**
 * Metadata of result field.
**/
var ResultMetadata = /** @class */ (function (_super) {
    __extends(ResultMetadata, _super);
    function ResultMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], ResultMetadata.prototype, "field", void 0);
    return ResultMetadata;
}(SpeakeasyBase));
export { ResultMetadata };
