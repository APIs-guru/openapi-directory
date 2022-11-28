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
import { GoogleCloudDatacatalogV1FieldTypeEnumType } from "./googleclouddatacatalogv1fieldtypeenumtype";
export var GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum;
(function (GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum) {
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["PrimitiveTypeUnspecified"] = "PRIMITIVE_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["Double"] = "DOUBLE";
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["String"] = "STRING";
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["Bool"] = "BOOL";
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["Timestamp"] = "TIMESTAMP";
    GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum["Richtext"] = "RICHTEXT";
})(GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum || (GoogleCloudDatacatalogV1FieldTypePrimitiveTypeEnum = {}));
var GoogleCloudDatacatalogV1FieldType = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1FieldType, _super);
    function GoogleCloudDatacatalogV1FieldType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumType" }),
        __metadata("design:type", GoogleCloudDatacatalogV1FieldTypeEnumType)
    ], GoogleCloudDatacatalogV1FieldType.prototype, "enumType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primitiveType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1FieldType.prototype, "primitiveType", void 0);
    return GoogleCloudDatacatalogV1FieldType;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1FieldType };
