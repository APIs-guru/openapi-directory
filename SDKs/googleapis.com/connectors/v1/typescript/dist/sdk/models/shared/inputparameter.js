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
export var InputParameterDataTypeEnum;
(function (InputParameterDataTypeEnum) {
    InputParameterDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    InputParameterDataTypeEnum["DataTypeInt"] = "DATA_TYPE_INT";
    InputParameterDataTypeEnum["DataTypeSmallint"] = "DATA_TYPE_SMALLINT";
    InputParameterDataTypeEnum["DataTypeDouble"] = "DATA_TYPE_DOUBLE";
    InputParameterDataTypeEnum["DataTypeDate"] = "DATA_TYPE_DATE";
    InputParameterDataTypeEnum["DataTypeDatetime"] = "DATA_TYPE_DATETIME";
    InputParameterDataTypeEnum["DataTypeTime"] = "DATA_TYPE_TIME";
    InputParameterDataTypeEnum["DataTypeString"] = "DATA_TYPE_STRING";
    InputParameterDataTypeEnum["DataTypeLong"] = "DATA_TYPE_LONG";
    InputParameterDataTypeEnum["DataTypeBoolean"] = "DATA_TYPE_BOOLEAN";
    InputParameterDataTypeEnum["DataTypeDecimal"] = "DATA_TYPE_DECIMAL";
    InputParameterDataTypeEnum["DataTypeUuid"] = "DATA_TYPE_UUID";
    InputParameterDataTypeEnum["DataTypeBlob"] = "DATA_TYPE_BLOB";
    InputParameterDataTypeEnum["DataTypeBit"] = "DATA_TYPE_BIT";
    InputParameterDataTypeEnum["DataTypeTinyint"] = "DATA_TYPE_TINYINT";
    InputParameterDataTypeEnum["DataTypeInteger"] = "DATA_TYPE_INTEGER";
    InputParameterDataTypeEnum["DataTypeBigint"] = "DATA_TYPE_BIGINT";
    InputParameterDataTypeEnum["DataTypeFloat"] = "DATA_TYPE_FLOAT";
    InputParameterDataTypeEnum["DataTypeReal"] = "DATA_TYPE_REAL";
    InputParameterDataTypeEnum["DataTypeNumeric"] = "DATA_TYPE_NUMERIC";
    InputParameterDataTypeEnum["DataTypeChar"] = "DATA_TYPE_CHAR";
    InputParameterDataTypeEnum["DataTypeVarchar"] = "DATA_TYPE_VARCHAR";
    InputParameterDataTypeEnum["DataTypeLongvarchar"] = "DATA_TYPE_LONGVARCHAR";
    InputParameterDataTypeEnum["DataTypeTimestamp"] = "DATA_TYPE_TIMESTAMP";
    InputParameterDataTypeEnum["DataTypeNchar"] = "DATA_TYPE_NCHAR";
    InputParameterDataTypeEnum["DataTypeNvarchar"] = "DATA_TYPE_NVARCHAR";
    InputParameterDataTypeEnum["DataTypeLongnvarchar"] = "DATA_TYPE_LONGNVARCHAR";
    InputParameterDataTypeEnum["DataTypeNull"] = "DATA_TYPE_NULL";
    InputParameterDataTypeEnum["DataTypeOther"] = "DATA_TYPE_OTHER";
    InputParameterDataTypeEnum["DataTypeJavaObject"] = "DATA_TYPE_JAVA_OBJECT";
    InputParameterDataTypeEnum["DataTypeDistinct"] = "DATA_TYPE_DISTINCT";
    InputParameterDataTypeEnum["DataTypeStruct"] = "DATA_TYPE_STRUCT";
    InputParameterDataTypeEnum["DataTypeArray"] = "DATA_TYPE_ARRAY";
    InputParameterDataTypeEnum["DataTypeClob"] = "DATA_TYPE_CLOB";
    InputParameterDataTypeEnum["DataTypeRef"] = "DATA_TYPE_REF";
    InputParameterDataTypeEnum["DataTypeDatalink"] = "DATA_TYPE_DATALINK";
    InputParameterDataTypeEnum["DataTypeRowid"] = "DATA_TYPE_ROWID";
    InputParameterDataTypeEnum["DataTypeBinary"] = "DATA_TYPE_BINARY";
    InputParameterDataTypeEnum["DataTypeVarbinary"] = "DATA_TYPE_VARBINARY";
    InputParameterDataTypeEnum["DataTypeLongvarbinary"] = "DATA_TYPE_LONGVARBINARY";
    InputParameterDataTypeEnum["DataTypeNclob"] = "DATA_TYPE_NCLOB";
    InputParameterDataTypeEnum["DataTypeSqlxml"] = "DATA_TYPE_SQLXML";
    InputParameterDataTypeEnum["DataTypeRefCursor"] = "DATA_TYPE_REF_CURSOR";
    InputParameterDataTypeEnum["DataTypeTimeWithTimezone"] = "DATA_TYPE_TIME_WITH_TIMEZONE";
    InputParameterDataTypeEnum["DataTypeTimestampWithTimezone"] = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE";
})(InputParameterDataTypeEnum || (InputParameterDataTypeEnum = {}));
// InputParameter
/**
 * Metadata of an input parameter.
**/
var InputParameter = /** @class */ (function (_super) {
    __extends(InputParameter, _super);
    function InputParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], InputParameter.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullable" }),
        __metadata("design:type", Boolean)
    ], InputParameter.prototype, "nullable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "parameter", void 0);
    return InputParameter;
}(SpeakeasyBase));
export { InputParameter };
