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
export var Proto2FieldDescriptorProtoLabelEnum;
(function (Proto2FieldDescriptorProtoLabelEnum) {
    Proto2FieldDescriptorProtoLabelEnum["LabelOptional"] = "LABEL_OPTIONAL";
    Proto2FieldDescriptorProtoLabelEnum["LabelRequired"] = "LABEL_REQUIRED";
    Proto2FieldDescriptorProtoLabelEnum["LabelRepeated"] = "LABEL_REPEATED";
})(Proto2FieldDescriptorProtoLabelEnum || (Proto2FieldDescriptorProtoLabelEnum = {}));
export var Proto2FieldDescriptorProtoTypeEnum;
(function (Proto2FieldDescriptorProtoTypeEnum) {
    Proto2FieldDescriptorProtoTypeEnum["TypeDouble"] = "TYPE_DOUBLE";
    Proto2FieldDescriptorProtoTypeEnum["TypeFloat"] = "TYPE_FLOAT";
    Proto2FieldDescriptorProtoTypeEnum["TypeInt64"] = "TYPE_INT64";
    Proto2FieldDescriptorProtoTypeEnum["TypeUint64"] = "TYPE_UINT64";
    Proto2FieldDescriptorProtoTypeEnum["TypeInt32"] = "TYPE_INT32";
    Proto2FieldDescriptorProtoTypeEnum["TypeFixed64"] = "TYPE_FIXED64";
    Proto2FieldDescriptorProtoTypeEnum["TypeFixed32"] = "TYPE_FIXED32";
    Proto2FieldDescriptorProtoTypeEnum["TypeBool"] = "TYPE_BOOL";
    Proto2FieldDescriptorProtoTypeEnum["TypeString"] = "TYPE_STRING";
    Proto2FieldDescriptorProtoTypeEnum["TypeGroup"] = "TYPE_GROUP";
    Proto2FieldDescriptorProtoTypeEnum["TypeMessage"] = "TYPE_MESSAGE";
    Proto2FieldDescriptorProtoTypeEnum["TypeBytes"] = "TYPE_BYTES";
    Proto2FieldDescriptorProtoTypeEnum["TypeUint32"] = "TYPE_UINT32";
    Proto2FieldDescriptorProtoTypeEnum["TypeEnum"] = "TYPE_ENUM";
    Proto2FieldDescriptorProtoTypeEnum["TypeSfixed32"] = "TYPE_SFIXED32";
    Proto2FieldDescriptorProtoTypeEnum["TypeSfixed64"] = "TYPE_SFIXED64";
    Proto2FieldDescriptorProtoTypeEnum["TypeSint32"] = "TYPE_SINT32";
    Proto2FieldDescriptorProtoTypeEnum["TypeSint64"] = "TYPE_SINT64";
})(Proto2FieldDescriptorProtoTypeEnum || (Proto2FieldDescriptorProtoTypeEnum = {}));
// Proto2FieldDescriptorProto
/**
 * Describes a field within a message.
**/
var Proto2FieldDescriptorProto = /** @class */ (function (_super) {
    __extends(Proto2FieldDescriptorProto, _super);
    function Proto2FieldDescriptorProto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonName" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "jsonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], Proto2FieldDescriptorProto.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneofIndex" }),
        __metadata("design:type", Number)
    ], Proto2FieldDescriptorProto.prototype, "oneofIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proto3Optional" }),
        __metadata("design:type", Boolean)
    ], Proto2FieldDescriptorProto.prototype, "proto3Optional", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeName" }),
        __metadata("design:type", String)
    ], Proto2FieldDescriptorProto.prototype, "typeName", void 0);
    return Proto2FieldDescriptorProto;
}(SpeakeasyBase));
export { Proto2FieldDescriptorProto };
