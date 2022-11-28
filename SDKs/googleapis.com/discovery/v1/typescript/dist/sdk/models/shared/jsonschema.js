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
// JsonSchemaAnnotations
/**
 * Additional information about this property.
**/
var JsonSchemaAnnotations = /** @class */ (function (_super) {
    __extends(JsonSchemaAnnotations, _super);
    function JsonSchemaAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Array)
    ], JsonSchemaAnnotations.prototype, "required", void 0);
    return JsonSchemaAnnotations;
}(SpeakeasyBase));
export { JsonSchemaAnnotations };
var JsonSchemaVariantMap = /** @class */ (function (_super) {
    __extends(JsonSchemaVariantMap, _super);
    function JsonSchemaVariantMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], JsonSchemaVariantMap.prototype, "dollarRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_value" }),
        __metadata("design:type", String)
    ], JsonSchemaVariantMap.prototype, "typeValue", void 0);
    return JsonSchemaVariantMap;
}(SpeakeasyBase));
export { JsonSchemaVariantMap };
// JsonSchemaVariant
/**
 * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
**/
var JsonSchemaVariant = /** @class */ (function (_super) {
    __extends(JsonSchemaVariant, _super);
    function JsonSchemaVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discriminant" }),
        __metadata("design:type", String)
    ], JsonSchemaVariant.prototype, "discriminant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=map", elemType: JsonSchemaVariantMap }),
        __metadata("design:type", Array)
    ], JsonSchemaVariant.prototype, "map", void 0);
    return JsonSchemaVariant;
}(SpeakeasyBase));
export { JsonSchemaVariant };
var JsonSchema = /** @class */ (function (_super) {
    __extends(JsonSchema, _super);
    function JsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=$ref" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "dollarRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalProperties" }),
        __metadata("design:type", JsonSchema)
    ], JsonSchema.prototype, "additionalProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", JsonSchemaAnnotations)
    ], JsonSchema.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enum" }),
        __metadata("design:type", Array)
    ], JsonSchema.prototype, "enum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumDescriptions" }),
        __metadata("design:type", Array)
    ], JsonSchema.prototype, "enumDescriptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items" }),
        __metadata("design:type", JsonSchema)
    ], JsonSchema.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "maximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimum" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "minimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pattern" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "pattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: JsonSchema }),
        __metadata("design:type", Map)
    ], JsonSchema.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readOnly" }),
        __metadata("design:type", Boolean)
    ], JsonSchema.prototype, "readOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeated" }),
        __metadata("design:type", Boolean)
    ], JsonSchema.prototype, "repeated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], JsonSchema.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], JsonSchema.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variant" }),
        __metadata("design:type", JsonSchemaVariant)
    ], JsonSchema.prototype, "variant", void 0);
    return JsonSchema;
}(SpeakeasyBase));
export { JsonSchema };
