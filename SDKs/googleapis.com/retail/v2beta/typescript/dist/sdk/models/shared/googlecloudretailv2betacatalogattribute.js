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
export var GoogleCloudRetailV2betaCatalogAttributeTypeEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeTypeEnum) {
    GoogleCloudRetailV2betaCatalogAttributeTypeEnum["Unknown"] = "UNKNOWN";
    GoogleCloudRetailV2betaCatalogAttributeTypeEnum["Textual"] = "TEXTUAL";
    GoogleCloudRetailV2betaCatalogAttributeTypeEnum["Numerical"] = "NUMERICAL";
})(GoogleCloudRetailV2betaCatalogAttributeTypeEnum || (GoogleCloudRetailV2betaCatalogAttributeTypeEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableOptionUnspecified"] = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableEnabled"] = "DYNAMIC_FACETABLE_ENABLED";
    GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum["DynamicFacetableDisabled"] = "DYNAMIC_FACETABLE_DISABLED";
})(GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum["ExactSearchableOptionUnspecified"] = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum["ExactSearchableEnabled"] = "EXACT_SEARCHABLE_ENABLED";
    GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum["ExactSearchableDisabled"] = "EXACT_SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum["IndexableOptionUnspecified"] = "INDEXABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum["IndexableEnabled"] = "INDEXABLE_ENABLED";
    GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum["IndexableDisabled"] = "INDEXABLE_DISABLED";
})(GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringOptionUnspecified"] = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringDisabled"] = "RECOMMENDATIONS_FILTERING_DISABLED";
    GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum["RecommendationsFilteringEnabled"] = "RECOMMENDATIONS_FILTERING_ENABLED";
})(GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum["RetrievableOptionUnspecified"] = "RETRIEVABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum["RetrievableEnabled"] = "RETRIEVABLE_ENABLED";
    GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum["RetrievableDisabled"] = "RETRIEVABLE_DISABLED";
})(GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum = {}));
export var GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
(function (GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum) {
    GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum["SearchableOptionUnspecified"] = "SEARCHABLE_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum["SearchableEnabled"] = "SEARCHABLE_ENABLED";
    GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum["SearchableDisabled"] = "SEARCHABLE_DISABLED";
})(GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum || (GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum = {}));
// GoogleCloudRetailV2betaCatalogAttribute
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2betaCatalogAttribute = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaCatalogAttribute, _super);
    function GoogleCloudRetailV2betaCatalogAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inUse" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "inUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "recommendationsFilteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "searchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttribute.prototype, "type", void 0);
    return GoogleCloudRetailV2betaCatalogAttribute;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaCatalogAttribute };
// GoogleCloudRetailV2betaCatalogAttributeInput
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
var GoogleCloudRetailV2betaCatalogAttributeInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaCatalogAttributeInput, _super);
    function GoogleCloudRetailV2betaCatalogAttributeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "dynamicFacetableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactSearchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "exactSearchableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "indexableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "recommendationsFilteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "retrievableOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchableOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaCatalogAttributeInput.prototype, "searchableOption", void 0);
    return GoogleCloudRetailV2betaCatalogAttributeInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaCatalogAttributeInput };
