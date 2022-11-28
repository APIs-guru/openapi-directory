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
export var FieldDataTypeEnum;
(function (FieldDataTypeEnum) {
    FieldDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    FieldDataTypeEnum["DataTypeInt"] = "DATA_TYPE_INT";
    FieldDataTypeEnum["DataTypeSmallint"] = "DATA_TYPE_SMALLINT";
    FieldDataTypeEnum["DataTypeDouble"] = "DATA_TYPE_DOUBLE";
    FieldDataTypeEnum["DataTypeDate"] = "DATA_TYPE_DATE";
    FieldDataTypeEnum["DataTypeDatetime"] = "DATA_TYPE_DATETIME";
    FieldDataTypeEnum["DataTypeTime"] = "DATA_TYPE_TIME";
    FieldDataTypeEnum["DataTypeString"] = "DATA_TYPE_STRING";
    FieldDataTypeEnum["DataTypeLong"] = "DATA_TYPE_LONG";
    FieldDataTypeEnum["DataTypeBoolean"] = "DATA_TYPE_BOOLEAN";
    FieldDataTypeEnum["DataTypeDecimal"] = "DATA_TYPE_DECIMAL";
    FieldDataTypeEnum["DataTypeUuid"] = "DATA_TYPE_UUID";
    FieldDataTypeEnum["DataTypeBlob"] = "DATA_TYPE_BLOB";
    FieldDataTypeEnum["DataTypeBit"] = "DATA_TYPE_BIT";
    FieldDataTypeEnum["DataTypeTinyint"] = "DATA_TYPE_TINYINT";
    FieldDataTypeEnum["DataTypeInteger"] = "DATA_TYPE_INTEGER";
    FieldDataTypeEnum["DataTypeBigint"] = "DATA_TYPE_BIGINT";
    FieldDataTypeEnum["DataTypeFloat"] = "DATA_TYPE_FLOAT";
    FieldDataTypeEnum["DataTypeReal"] = "DATA_TYPE_REAL";
    FieldDataTypeEnum["DataTypeNumeric"] = "DATA_TYPE_NUMERIC";
    FieldDataTypeEnum["DataTypeChar"] = "DATA_TYPE_CHAR";
    FieldDataTypeEnum["DataTypeVarchar"] = "DATA_TYPE_VARCHAR";
    FieldDataTypeEnum["DataTypeLongvarchar"] = "DATA_TYPE_LONGVARCHAR";
    FieldDataTypeEnum["DataTypeTimestamp"] = "DATA_TYPE_TIMESTAMP";
    FieldDataTypeEnum["DataTypeNchar"] = "DATA_TYPE_NCHAR";
    FieldDataTypeEnum["DataTypeNvarchar"] = "DATA_TYPE_NVARCHAR";
    FieldDataTypeEnum["DataTypeLongnvarchar"] = "DATA_TYPE_LONGNVARCHAR";
    FieldDataTypeEnum["DataTypeNull"] = "DATA_TYPE_NULL";
    FieldDataTypeEnum["DataTypeOther"] = "DATA_TYPE_OTHER";
    FieldDataTypeEnum["DataTypeJavaObject"] = "DATA_TYPE_JAVA_OBJECT";
    FieldDataTypeEnum["DataTypeDistinct"] = "DATA_TYPE_DISTINCT";
    FieldDataTypeEnum["DataTypeStruct"] = "DATA_TYPE_STRUCT";
    FieldDataTypeEnum["DataTypeArray"] = "DATA_TYPE_ARRAY";
    FieldDataTypeEnum["DataTypeClob"] = "DATA_TYPE_CLOB";
    FieldDataTypeEnum["DataTypeRef"] = "DATA_TYPE_REF";
    FieldDataTypeEnum["DataTypeDatalink"] = "DATA_TYPE_DATALINK";
    FieldDataTypeEnum["DataTypeRowid"] = "DATA_TYPE_ROWID";
    FieldDataTypeEnum["DataTypeBinary"] = "DATA_TYPE_BINARY";
    FieldDataTypeEnum["DataTypeVarbinary"] = "DATA_TYPE_VARBINARY";
    FieldDataTypeEnum["DataTypeLongvarbinary"] = "DATA_TYPE_LONGVARBINARY";
    FieldDataTypeEnum["DataTypeNclob"] = "DATA_TYPE_NCLOB";
    FieldDataTypeEnum["DataTypeSqlxml"] = "DATA_TYPE_SQLXML";
    FieldDataTypeEnum["DataTypeRefCursor"] = "DATA_TYPE_REF_CURSOR";
    FieldDataTypeEnum["DataTypeTimeWithTimezone"] = "DATA_TYPE_TIME_WITH_TIMEZONE";
    FieldDataTypeEnum["DataTypeTimestampWithTimezone"] = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE";
})(FieldDataTypeEnum || (FieldDataTypeEnum = {}));
// Field
/**
 * Metadata of an entity field.
**/
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDetails" }),
        __metadata("design:type", Map)
    ], Field.prototype, "additionalDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], Field.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], Field.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Field.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], Field.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullable" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "nullable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readonly" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "readonly", void 0);
    return Field;
}(SpeakeasyBase));
export { Field };
