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
export var InputParameterDataTypeEnum;
(function (InputParameterDataTypeEnum) {
    InputParameterDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    InputParameterDataTypeEnum["Int"] = "INT";
    InputParameterDataTypeEnum["Smallint"] = "SMALLINT";
    InputParameterDataTypeEnum["Double"] = "DOUBLE";
    InputParameterDataTypeEnum["Date"] = "DATE";
    InputParameterDataTypeEnum["Datetime"] = "DATETIME";
    InputParameterDataTypeEnum["Time"] = "TIME";
    InputParameterDataTypeEnum["String"] = "STRING";
    InputParameterDataTypeEnum["Long"] = "LONG";
    InputParameterDataTypeEnum["Boolean"] = "BOOLEAN";
    InputParameterDataTypeEnum["Decimal"] = "DECIMAL";
    InputParameterDataTypeEnum["Uuid"] = "UUID";
    InputParameterDataTypeEnum["Blob"] = "BLOB";
    InputParameterDataTypeEnum["Bit"] = "BIT";
    InputParameterDataTypeEnum["Tinyint"] = "TINYINT";
    InputParameterDataTypeEnum["Integer"] = "INTEGER";
    InputParameterDataTypeEnum["Bigint"] = "BIGINT";
    InputParameterDataTypeEnum["Float"] = "FLOAT";
    InputParameterDataTypeEnum["Real"] = "REAL";
    InputParameterDataTypeEnum["Numeric"] = "NUMERIC";
    InputParameterDataTypeEnum["Char"] = "CHAR";
    InputParameterDataTypeEnum["Varchar"] = "VARCHAR";
    InputParameterDataTypeEnum["Longvarchar"] = "LONGVARCHAR";
    InputParameterDataTypeEnum["Timestamp"] = "TIMESTAMP";
    InputParameterDataTypeEnum["Nchar"] = "NCHAR";
    InputParameterDataTypeEnum["Nvarchar"] = "NVARCHAR";
    InputParameterDataTypeEnum["Longnvarchar"] = "LONGNVARCHAR";
    InputParameterDataTypeEnum["Null"] = "NULL";
    InputParameterDataTypeEnum["Other"] = "OTHER";
    InputParameterDataTypeEnum["JavaObject"] = "JAVA_OBJECT";
    InputParameterDataTypeEnum["Distinct"] = "DISTINCT";
    InputParameterDataTypeEnum["Struct"] = "STRUCT";
    InputParameterDataTypeEnum["Array"] = "ARRAY";
    InputParameterDataTypeEnum["Clob"] = "CLOB";
    InputParameterDataTypeEnum["Ref"] = "REF";
    InputParameterDataTypeEnum["Datalink"] = "DATALINK";
    InputParameterDataTypeEnum["Rowid"] = "ROWID";
    InputParameterDataTypeEnum["Binary"] = "BINARY";
    InputParameterDataTypeEnum["Varbinary"] = "VARBINARY";
    InputParameterDataTypeEnum["Longvarbinary"] = "LONGVARBINARY";
    InputParameterDataTypeEnum["Nclob"] = "NCLOB";
    InputParameterDataTypeEnum["Sqlxml"] = "SQLXML";
    InputParameterDataTypeEnum["RefCursor"] = "REF_CURSOR";
    InputParameterDataTypeEnum["TimeWithTimezone"] = "TIME_WITH_TIMEZONE";
    InputParameterDataTypeEnum["TimestampWithTimezone"] = "TIMESTAMP_WITH_TIMEZONE";
})(InputParameterDataTypeEnum || (InputParameterDataTypeEnum = {}));
// InputParameter
/**
 * Input Parameter message contains metadata about the parameters required for executing an Action.
**/
var InputParameter = /** @class */ (function (_super) {
    __extends(InputParameter, _super);
    function InputParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "dataType", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", Object)
    ], InputParameter.prototype, "defaultValue", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InputParameter.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nullable" }),
        __metadata("design:type", Boolean)
    ], InputParameter.prototype, "nullable", void 0);
    return InputParameter;
}(SpeakeasyBase));
export { InputParameter };
