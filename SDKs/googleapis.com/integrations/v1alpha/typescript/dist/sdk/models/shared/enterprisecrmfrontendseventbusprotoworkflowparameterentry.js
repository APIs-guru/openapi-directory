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
import { EnterpriseCrmEventbusProtoAttributes } from "./enterprisecrmeventbusprotoattributes";
import { EnterpriseCrmFrontendsEventbusProtoParameterValueType } from "./enterprisecrmfrontendseventbusprotoparametervaluetype";
import { EnterpriseCrmEventbusProtoNodeIdentifier } from "./enterprisecrmeventbusprotonodeidentifier";
export var EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["DataTypeUnspecified"] = "DATA_TYPE_UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["StringValue"] = "STRING_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["IntValue"] = "INT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["DoubleValue"] = "DOUBLE_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["BooleanValue"] = "BOOLEAN_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["ProtoValue"] = "PROTO_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["SerializedObjectValue"] = "SERIALIZED_OBJECT_VALUE";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["StringArray"] = "STRING_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["IntArray"] = "INT_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["DoubleArray"] = "DOUBLE_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["ProtoArray"] = "PROTO_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["ProtoEnum"] = "PROTO_ENUM";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["BooleanArray"] = "BOOLEAN_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["ProtoEnumArray"] = "PROTO_ENUM_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["Bytes"] = "BYTES";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["BytesArray"] = "BYTES_ARRAY";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["NonSerializableObject"] = "NON_SERIALIZABLE_OBJECT";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum["JsonValue"] = "JSON_VALUE";
})(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum || (EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum["InOutTypeUnspecified"] = "IN_OUT_TYPE_UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum["In"] = "IN";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum["Out"] = "OUT";
    EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum["InOut"] = "IN_OUT";
})(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum || (EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum = {}));
var EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry, _super);
    function EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoAttributes)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children", elemType: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "dataType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoParameterValueType)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inOutType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "inOutType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTransient" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "isTransient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonSchema" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "jsonSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producedBy" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoNodeIdentifier)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "producedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producer" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "producer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoDefName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "protoDefName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protoDefPath" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.prototype, "protoDefPath", void 0);
    return EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry };
