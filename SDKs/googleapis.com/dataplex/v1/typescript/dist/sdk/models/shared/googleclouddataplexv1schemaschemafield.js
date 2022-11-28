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
export var GoogleCloudDataplexV1SchemaSchemaFieldModeEnum;
(function (GoogleCloudDataplexV1SchemaSchemaFieldModeEnum) {
    GoogleCloudDataplexV1SchemaSchemaFieldModeEnum["ModeUnspecified"] = "MODE_UNSPECIFIED";
    GoogleCloudDataplexV1SchemaSchemaFieldModeEnum["Required"] = "REQUIRED";
    GoogleCloudDataplexV1SchemaSchemaFieldModeEnum["Nullable"] = "NULLABLE";
    GoogleCloudDataplexV1SchemaSchemaFieldModeEnum["Repeated"] = "REPEATED";
})(GoogleCloudDataplexV1SchemaSchemaFieldModeEnum || (GoogleCloudDataplexV1SchemaSchemaFieldModeEnum = {}));
export var GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum;
(function (GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum) {
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Boolean"] = "BOOLEAN";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Byte"] = "BYTE";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Int16"] = "INT16";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Int32"] = "INT32";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Int64"] = "INT64";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Float"] = "FLOAT";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Double"] = "DOUBLE";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Decimal"] = "DECIMAL";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["String"] = "STRING";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Binary"] = "BINARY";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Timestamp"] = "TIMESTAMP";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Date"] = "DATE";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Time"] = "TIME";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Record"] = "RECORD";
    GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum["Null"] = "NULL";
})(GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum || (GoogleCloudDataplexV1SchemaSchemaFieldTypeEnum = {}));
// GoogleCloudDataplexV1SchemaSchemaField
/**
 * Represents a column field within a table schema.
**/
var GoogleCloudDataplexV1SchemaSchemaField = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1SchemaSchemaField, _super);
    function GoogleCloudDataplexV1SchemaSchemaField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaSchemaField.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDataplexV1SchemaSchemaField }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1SchemaSchemaField.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaSchemaField.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaSchemaField.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaSchemaField.prototype, "type", void 0);
    return GoogleCloudDataplexV1SchemaSchemaField;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1SchemaSchemaField };
