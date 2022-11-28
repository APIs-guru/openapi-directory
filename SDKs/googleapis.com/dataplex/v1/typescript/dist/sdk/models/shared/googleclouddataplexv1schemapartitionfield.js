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
export var GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum;
(function (GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum) {
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Boolean"] = "BOOLEAN";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Byte"] = "BYTE";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Int16"] = "INT16";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Int32"] = "INT32";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Int64"] = "INT64";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Float"] = "FLOAT";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Double"] = "DOUBLE";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Decimal"] = "DECIMAL";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["String"] = "STRING";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Binary"] = "BINARY";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Timestamp"] = "TIMESTAMP";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Date"] = "DATE";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Time"] = "TIME";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Record"] = "RECORD";
    GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum["Null"] = "NULL";
})(GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum || (GoogleCloudDataplexV1SchemaPartitionFieldTypeEnum = {}));
// GoogleCloudDataplexV1SchemaPartitionField
/**
 * Represents a key field within the entity's partition structure. You could have up to 20 partition fields, but only the first 10 partitions have the filtering ability due to performance consideration. Note: Partition fields are immutable.
**/
var GoogleCloudDataplexV1SchemaPartitionField = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1SchemaPartitionField, _super);
    function GoogleCloudDataplexV1SchemaPartitionField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaPartitionField.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1SchemaPartitionField.prototype, "type", void 0);
    return GoogleCloudDataplexV1SchemaPartitionField;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1SchemaPartitionField };
