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
export var GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
(function (GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum) {
    GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableOptionUnspecified"] = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableEnabled"] = "DYNAMIC_FACETABLE_ENABLED";
    GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableDisabled"] = "DYNAMIC_FACETABLE_DISABLED";
})(GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum || (GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = {}));
export var GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
(function (GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum) {
    GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum["ExactSearchableOptionUnspecified"] = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum["ExactSearchableEnabled"] = "EXACT_SEARCHABLE_ENABLED";
    GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum["ExactSearchableDisabled"] = "EXACT_SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum || (GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum = {}));
export var GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
(function (GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum) {
    GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum["IndexableOptionUnspecified"] = "INDEXABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum["IndexableEnabled"] = "INDEXABLE_ENABLED";
    GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum["IndexableDisabled"] = "INDEXABLE_DISABLED";
})(GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum || (GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = {}));
export var GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
(function (GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum) {
    GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum["RetrievableOptionUnspecified"] = "RETRIEVABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum["RetrievableEnabled"] = "RETRIEVABLE_ENABLED";
    GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum["RetrievableDisabled"] = "RETRIEVABLE_DISABLED";
})(GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum || (GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum = {}));
export var GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
(function (GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum) {
    GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum["SearchableOptionUnspecified"] = "SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum["SearchableEnabled"] = "SEARCHABLE_ENABLED";
    GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum["SearchableDisabled"] = "SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum || (GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = {}));
export var GoogleCloudRetailV2CatalogAttributeTypeEnum;
(function (GoogleCloudRetailV2CatalogAttributeTypeEnum) {
    GoogleCloudRetailV2CatalogAttributeTypeEnum["Unknown"] = "UNKNOWN";
    GoogleCloudRetailV2CatalogAttributeTypeEnum["Textual"] = "TEXTUAL";
    GoogleCloudRetailV2CatalogAttributeTypeEnum["Numerical"] = "NUMERICAL";
})(GoogleCloudRetailV2CatalogAttributeTypeEnum || (GoogleCloudRetailV2CatalogAttributeTypeEnum = {}));
// GoogleCloudRetailV2CatalogAttributeInput
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2CatalogAttributeInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2CatalogAttributeInput, _super);
    function GoogleCloudRetailV2CatalogAttributeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttributeInput.prototype, "searchableOption", void 0);
    return GoogleCloudRetailV2CatalogAttributeInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2CatalogAttributeInput };
// GoogleCloudRetailV2CatalogAttribute
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2CatalogAttribute = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2CatalogAttribute, _super);
    function GoogleCloudRetailV2CatalogAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inUse" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "inUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "searchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2CatalogAttribute.prototype, "type", void 0);
    return GoogleCloudRetailV2CatalogAttribute;
}(SpeakeasyBase));
export { GoogleCloudRetailV2CatalogAttribute };
