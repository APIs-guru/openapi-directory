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
import { GoogleCloudDatacatalogV1FieldType } from "./googleclouddatacatalogv1fieldtype";
// GoogleCloudDatacatalogV1TagTemplateField
/**
 * The template for an individual field within a tag template.
**/
var GoogleCloudDatacatalogV1TagTemplateField = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagTemplateField, _super);
    function GoogleCloudDatacatalogV1TagTemplateField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRequired" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "isRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", GoogleCloudDatacatalogV1FieldType)
    ], GoogleCloudDatacatalogV1TagTemplateField.prototype, "type", void 0);
    return GoogleCloudDatacatalogV1TagTemplateField;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagTemplateField };
// GoogleCloudDatacatalogV1TagTemplateFieldInput
/**
 * The template for an individual field within a tag template.
**/
var GoogleCloudDatacatalogV1TagTemplateFieldInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagTemplateFieldInput, _super);
    function GoogleCloudDatacatalogV1TagTemplateFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateFieldInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagTemplateFieldInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isRequired" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagTemplateFieldInput.prototype, "isRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1TagTemplateFieldInput.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", GoogleCloudDatacatalogV1FieldType)
    ], GoogleCloudDatacatalogV1TagTemplateFieldInput.prototype, "type", void 0);
    return GoogleCloudDatacatalogV1TagTemplateFieldInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagTemplateFieldInput };
