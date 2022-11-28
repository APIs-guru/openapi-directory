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
import { Option } from "./option";
export var FieldCardinalityEnum;
(function (FieldCardinalityEnum) {
    FieldCardinalityEnum["CardinalityUnknown"] = "CARDINALITY_UNKNOWN";
    FieldCardinalityEnum["CardinalityOptional"] = "CARDINALITY_OPTIONAL";
    FieldCardinalityEnum["CardinalityRequired"] = "CARDINALITY_REQUIRED";
    FieldCardinalityEnum["CardinalityRepeated"] = "CARDINALITY_REPEATED";
})(FieldCardinalityEnum || (FieldCardinalityEnum = {}));
export var FieldKindEnum;
(function (FieldKindEnum) {
    FieldKindEnum["TypeUnknown"] = "TYPE_UNKNOWN";
    FieldKindEnum["TypeDouble"] = "TYPE_DOUBLE";
    FieldKindEnum["TypeFloat"] = "TYPE_FLOAT";
    FieldKindEnum["TypeInt64"] = "TYPE_INT64";
    FieldKindEnum["TypeUint64"] = "TYPE_UINT64";
    FieldKindEnum["TypeInt32"] = "TYPE_INT32";
    FieldKindEnum["TypeFixed64"] = "TYPE_FIXED64";
    FieldKindEnum["TypeFixed32"] = "TYPE_FIXED32";
    FieldKindEnum["TypeBool"] = "TYPE_BOOL";
    FieldKindEnum["TypeString"] = "TYPE_STRING";
    FieldKindEnum["TypeGroup"] = "TYPE_GROUP";
    FieldKindEnum["TypeMessage"] = "TYPE_MESSAGE";
    FieldKindEnum["TypeBytes"] = "TYPE_BYTES";
    FieldKindEnum["TypeUint32"] = "TYPE_UINT32";
    FieldKindEnum["TypeEnum"] = "TYPE_ENUM";
    FieldKindEnum["TypeSfixed32"] = "TYPE_SFIXED32";
    FieldKindEnum["TypeSfixed64"] = "TYPE_SFIXED64";
    FieldKindEnum["TypeSint32"] = "TYPE_SINT32";
    FieldKindEnum["TypeSint64"] = "TYPE_SINT64";
})(FieldKindEnum || (FieldKindEnum = {}));
// Field
/**
 * A single field of a message type.
**/
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cardinality" }),
        __metadata("design:type", String)
    ], Field.prototype, "cardinality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", String)
    ], Field.prototype, "defaultValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonName" }),
        __metadata("design:type", String)
    ], Field.prototype, "jsonName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Field.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Field.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", Number)
    ], Field.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneofIndex" }),
        __metadata("design:type", Number)
    ], Field.prototype, "oneofIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: Option }),
        __metadata("design:type", Array)
    ], Field.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packed" }),
        __metadata("design:type", Boolean)
    ], Field.prototype, "packed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeUrl" }),
        __metadata("design:type", String)
    ], Field.prototype, "typeUrl", void 0);
    return Field;
}(SpeakeasyBase));
export { Field };
