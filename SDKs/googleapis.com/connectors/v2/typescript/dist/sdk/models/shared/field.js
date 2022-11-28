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
import { Reference } from "./reference";
export var FieldDataTypeEnum;
(function (FieldDataTypeEnum) {
    FieldDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    FieldDataTypeEnum["Int"] = "INT";
    FieldDataTypeEnum["Smallint"] = "SMALLINT";
    FieldDataTypeEnum["Double"] = "DOUBLE";
    FieldDataTypeEnum["Date"] = "DATE";
    FieldDataTypeEnum["Datetime"] = "DATETIME";
    FieldDataTypeEnum["Time"] = "TIME";
    FieldDataTypeEnum["String"] = "STRING";
    FieldDataTypeEnum["Long"] = "LONG";
    FieldDataTypeEnum["Boolean"] = "BOOLEAN";
    FieldDataTypeEnum["Decimal"] = "DECIMAL";
    FieldDataTypeEnum["Uuid"] = "UUID";
    FieldDataTypeEnum["Blob"] = "BLOB";
    FieldDataTypeEnum["Bit"] = "BIT";
    FieldDataTypeEnum["Tinyint"] = "TINYINT";
    FieldDataTypeEnum["Integer"] = "INTEGER";
    FieldDataTypeEnum["Bigint"] = "BIGINT";
    FieldDataTypeEnum["Float"] = "FLOAT";
    FieldDataTypeEnum["Real"] = "REAL";
    FieldDataTypeEnum["Numeric"] = "NUMERIC";
    FieldDataTypeEnum["Char"] = "CHAR";
    FieldDataTypeEnum["Varchar"] = "VARCHAR";
    FieldDataTypeEnum["Longvarchar"] = "LONGVARCHAR";
    FieldDataTypeEnum["Timestamp"] = "TIMESTAMP";
    FieldDataTypeEnum["Nchar"] = "NCHAR";
    FieldDataTypeEnum["Nvarchar"] = "NVARCHAR";
    FieldDataTypeEnum["Longnvarchar"] = "LONGNVARCHAR";
    FieldDataTypeEnum["Null"] = "NULL";
    FieldDataTypeEnum["Other"] = "OTHER";
    FieldDataTypeEnum["JavaObject"] = "JAVA_OBJECT";
    FieldDataTypeEnum["Distinct"] = "DISTINCT";
    FieldDataTypeEnum["Struct"] = "STRUCT";
    FieldDataTypeEnum["Array"] = "ARRAY";
    FieldDataTypeEnum["Clob"] = "CLOB";
    FieldDataTypeEnum["Ref"] = "REF";
    FieldDataTypeEnum["Datalink"] = "DATALINK";
    FieldDataTypeEnum["Rowid"] = "ROWID";
    FieldDataTypeEnum["Binary"] = "BINARY";
    FieldDataTypeEnum["Varbinary"] = "VARBINARY";
    FieldDataTypeEnum["Longvarbinary"] = "LONGVARBINARY";
    FieldDataTypeEnum["Nclob"] = "NCLOB";
    FieldDataTypeEnum["Sqlxml"] = "SQLXML";
    FieldDataTypeEnum["RefCursor"] = "REF_CURSOR";
    FieldDataTypeEnum["TimeWithTimezone"] = "TIME_WITH_TIMEZONE";
    FieldDataTypeEnum["TimestampWithTimezone"] = "TIMESTAMP_WITH_TIMEZONE";
})(FieldDataTypeEnum || (FieldDataTypeEnum = {}));
// Field
/**
 * Message contains EntityType's Field metadata.
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
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Field.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullable" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "nullable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", Reference)
    ], Field.prototype, "reference", void 0);
    return Field;
}(SpeakeasyBase));
export { Field };
