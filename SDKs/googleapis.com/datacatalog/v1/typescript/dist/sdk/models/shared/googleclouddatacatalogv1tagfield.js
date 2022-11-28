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
import { GoogleCloudDatacatalogV1TagFieldEnumValue } from "./googleclouddatacatalogv1tagfieldenumvalue";
// GoogleCloudDatacatalogV1TagField
/**
 * Contains the value and additional information on a field within a Tag.
**/
var GoogleCloudDatacatalogV1TagField = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagField, _super);
    function GoogleCloudDatacatalogV1TagField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolValue" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagField.prototype, "boolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagField.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1TagField.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumValue" }),
        __metadata("design:type", GoogleCloudDatacatalogV1TagFieldEnumValue)
    ], GoogleCloudDatacatalogV1TagField.prototype, "enumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1TagField.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richtextValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagField.prototype, "richtextValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagField.prototype, "stringValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagField.prototype, "timestampValue", void 0);
    return GoogleCloudDatacatalogV1TagField;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagField };
// GoogleCloudDatacatalogV1TagFieldInput
/**
 * Contains the value and additional information on a field within a Tag.
**/
var GoogleCloudDatacatalogV1TagFieldInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1TagFieldInput, _super);
    function GoogleCloudDatacatalogV1TagFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolValue" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "boolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleValue" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "doubleValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumValue" }),
        __metadata("design:type", GoogleCloudDatacatalogV1TagFieldEnumValue)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "enumValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richtextValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "richtextValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "stringValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestampValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1TagFieldInput.prototype, "timestampValue", void 0);
    return GoogleCloudDatacatalogV1TagFieldInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1TagFieldInput };
