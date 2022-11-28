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
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaRule } from "./googlecloudretailv2betarule";
export var GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum;
(function (GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum) {
    GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseUnspecified"] = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED";
    GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseSearch"] = "SEARCH_SOLUTION_USE_CASE_SEARCH";
    GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseBrowse"] = "SEARCH_SOLUTION_USE_CASE_BROWSE";
})(GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum || (GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum = {}));
export var GoogleCloudRetailV2betaControlSolutionTypesEnum;
(function (GoogleCloudRetailV2betaControlSolutionTypesEnum) {
    GoogleCloudRetailV2betaControlSolutionTypesEnum["SolutionTypeUnspecified"] = "SOLUTION_TYPE_UNSPECIFIED";
    GoogleCloudRetailV2betaControlSolutionTypesEnum["SolutionTypeRecommendation"] = "SOLUTION_TYPE_RECOMMENDATION";
    GoogleCloudRetailV2betaControlSolutionTypesEnum["SolutionTypeSearch"] = "SOLUTION_TYPE_SEARCH";
})(GoogleCloudRetailV2betaControlSolutionTypesEnum || (GoogleCloudRetailV2betaControlSolutionTypesEnum = {}));
// GoogleCloudRetailV2betaControlInput
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2betaControlInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaControlInput, _super);
    function GoogleCloudRetailV2betaControlInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaControlInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestFacetSpec)
    ], GoogleCloudRetailV2betaControlInput.prototype, "facetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaControlInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2betaRule)
    ], GoogleCloudRetailV2betaControlInput.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaControlInput.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaControlInput.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2betaControlInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaControlInput };
// GoogleCloudRetailV2betaControl
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2betaControl = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaControl, _super);
    function GoogleCloudRetailV2betaControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaControl.prototype, "associatedServingConfigIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaControl.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2betaSearchRequestFacetSpec)
    ], GoogleCloudRetailV2betaControl.prototype, "facetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaControl.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2betaRule)
    ], GoogleCloudRetailV2betaControl.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaControl.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaControl.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2betaControl;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaControl };
