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
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
export var EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["StringValue"] = "STRING_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["IntValue"] = "INT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["ProtoValue"] = "PROTO_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["SerializedObjectValue"] = "SERIALIZED_OBJECT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["StringArray"] = "STRING_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["IntArray"] = "INT_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["ProtoArray"] = "PROTO_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["ProtoEnum"] = "PROTO_ENUM";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["ProtoEnumArray"] = "PROTO_ENUM_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["Bytes"] = "BYTES";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["BytesArray"] = "BYTES_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["NonSerializableObject"] = "NON_SERIALIZABLE_OBJECT";
    EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum["JsonValue"] = "JSON_VALUE";
})(EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum || (EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoParameterEntry
/**
 * Key-value pair of EventBus parameters.
**/
var EnterpriseCrmFrontendsEventbusProtoParameterEntry = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoParameterEntry, _super);
    function EnterpriseCrmFrontendsEventbusProtoParameterEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParameterEntry.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoParameterEntry.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoParameterValueType)
    ], EnterpriseCrmFrontendsEventbusProtoParameterEntry.prototype, "value", void 0);
    return EnterpriseCrmFrontendsEventbusProtoParameterEntry;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoParameterEntry };
