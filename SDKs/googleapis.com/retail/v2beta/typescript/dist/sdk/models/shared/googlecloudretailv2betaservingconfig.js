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
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
export var GoogleCloudRetailV2betaServingConfigDiversityTypeEnum;
(function (GoogleCloudRetailV2betaServingConfigDiversityTypeEnum) {
    GoogleCloudRetailV2betaServingConfigDiversityTypeEnum["DiversityTypeUnspecified"] = "DIVERSITY_TYPE_UNSPECIFIED";
    GoogleCloudRetailV2betaServingConfigDiversityTypeEnum["RuleBasedDiversity"] = "RULE_BASED_DIVERSITY";
    GoogleCloudRetailV2betaServingConfigDiversityTypeEnum["DataDrivenDiversity"] = "DATA_DRIVEN_DIVERSITY";
})(GoogleCloudRetailV2betaServingConfigDiversityTypeEnum || (GoogleCloudRetailV2betaServingConfigDiversityTypeEnum = {}));
export var GoogleCloudRetailV2betaServingConfigSolutionTypesEnum;
(function (GoogleCloudRetailV2betaServingConfigSolutionTypesEnum) {
    GoogleCloudRetailV2betaServingConfigSolutionTypesEnum["SolutionTypeUnspecified"] = "SOLUTION_TYPE_UNSPECIFIED";
    GoogleCloudRetailV2betaServingConfigSolutionTypesEnum["SolutionTypeRecommendation"] = "SOLUTION_TYPE_RECOMMENDATION";
    GoogleCloudRetailV2betaServingConfigSolutionTypesEnum["SolutionTypeSearch"] = "SOLUTION_TYPE_SEARCH";
})(GoogleCloudRetailV2betaServingConfigSolutionTypesEnum || (GoogleCloudRetailV2betaServingConfigSolutionTypesEnum = {}));
// GoogleCloudRetailV2betaServingConfig
/**
 * Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).
**/
var GoogleCloudRetailV2betaServingConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaServingConfig, _super);
    function GoogleCloudRetailV2betaServingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "boostControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diversityLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "diversityLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diversityType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "diversityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doNotAssociateControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "doNotAssociateControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicFacetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "dynamicFacetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableCategoryFilterLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "enableCategoryFilterLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "facetControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "filterControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "ignoreControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "modelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onewaySynonymsControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "onewaySynonymsControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalizationSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestPersonalizationSpec)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "personalizationSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceRerankingLevel" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "priceRerankingLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "redirectControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacementControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "replacementControlIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "solutionTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twowaySynonymsControlIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaServingConfig.prototype, "twowaySynonymsControlIds", void 0);
    return GoogleCloudRetailV2betaServingConfig;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaServingConfig };
