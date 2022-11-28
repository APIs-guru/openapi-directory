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
export var GoogleCloudRetailV2alphaCatalogAttributeTypeEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeTypeEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeTypeEnum["Unknown"] = "UNKNOWN";
    GoogleCloudRetailV2alphaCatalogAttributeTypeEnum["Textual"] = "TEXTUAL";
    GoogleCloudRetailV2alphaCatalogAttributeTypeEnum["Numerical"] = "NUMERICAL";
})(GoogleCloudRetailV2alphaCatalogAttributeTypeEnum || (GoogleCloudRetailV2alphaCatalogAttributeTypeEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableOptionUnspecified"] = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableEnabled"] = "DYNAMIC_FACETABLE_ENABLED";
    GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableDisabled"] = "DYNAMIC_FACETABLE_DISABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum["ExactSearchableOptionUnspecified"] = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum["ExactSearchableEnabled"] = "EXACT_SEARCHABLE_ENABLED";
    GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum["ExactSearchableDisabled"] = "EXACT_SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum["IndexableOptionUnspecified"] = "INDEXABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum["IndexableEnabled"] = "INDEXABLE_ENABLED";
    GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum["IndexableDisabled"] = "INDEXABLE_DISABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringOptionUnspecified"] = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringDisabled"] = "RECOMMENDATIONS_FILTERING_DISABLED";
    GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringEnabled"] = "RECOMMENDATIONS_FILTERING_ENABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum["RetrievableOptionUnspecified"] = "RETRIEVABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum["RetrievableEnabled"] = "RETRIEVABLE_ENABLED";
    GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum["RetrievableDisabled"] = "RETRIEVABLE_DISABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum = {}));
export var GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
(function (GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum) {
    GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum["SearchableOptionUnspecified"] = "SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum["SearchableEnabled"] = "SEARCHABLE_ENABLED";
    GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum["SearchableDisabled"] = "SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum || (GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum = {}));
// GoogleCloudRetailV2alphaCatalogAttribute
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2alphaCatalogAttribute = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaCatalogAttribute, _super);
    function GoogleCloudRetailV2alphaCatalogAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inUse" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "inUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "recommendationsFilteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "searchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttribute.prototype, "type", void 0);
    return GoogleCloudRetailV2alphaCatalogAttribute;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaCatalogAttribute };
// GoogleCloudRetailV2alphaCatalogAttributeInput
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2alphaCatalogAttributeInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaCatalogAttributeInput, _super);
    function GoogleCloudRetailV2alphaCatalogAttributeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "recommendationsFilteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaCatalogAttributeInput.prototype, "searchableOption", void 0);
    return GoogleCloudRetailV2alphaCatalogAttributeInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaCatalogAttributeInput };
