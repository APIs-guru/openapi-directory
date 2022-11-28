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
import { EnterpriseCrmEventbusProtoParamSpecEntryConfig } from "./enterprisecrmeventbusprotoparamspecentryconfig";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition } from "./enterprisecrmeventbusprotoparamspecentryprotodefinition";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRule } from "./enterprisecrmeventbusprotoparamspecentryvalidationrule";
export var EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["StringValue"] = "STRING_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["IntValue"] = "INT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["ProtoValue"] = "PROTO_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["SerializedObjectValue"] = "SERIALIZED_OBJECT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["StringArray"] = "STRING_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["IntArray"] = "INT_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["ProtoArray"] = "PROTO_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["ProtoEnum"] = "PROTO_ENUM";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["ProtoEnumArray"] = "PROTO_ENUM_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["Bytes"] = "BYTES";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["BytesArray"] = "BYTES_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["NonSerializableObject"] = "NON_SERIALIZABLE_OBJECT";
    EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum["JsonValue"] = "JSON_VALUE";
})(EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum || (EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoParamSpecEntry
/**
 * Key-value pair of EventBus task parameters. Next id: 13
**/
var EnterpriseCrmFrontendsEventbusProtoParamSpecEntry = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoParamSpecEntry, _super);
    function EnterpriseCrmFrontendsEventbusProtoParamSpecEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=className" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "className", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionElementClassName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "collectionElementClassName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoParamSpecEntryConfig)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoParameterValueType)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeprecated" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "isDeprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isOutput" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "isOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonSchema" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "jsonSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoDef" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "protoDef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationRule" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoParamSpecEntryValidationRule)
    ], EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.prototype, "validationRule", void 0);
    return EnterpriseCrmFrontendsEventbusProtoParamSpecEntry;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoParamSpecEntry };
