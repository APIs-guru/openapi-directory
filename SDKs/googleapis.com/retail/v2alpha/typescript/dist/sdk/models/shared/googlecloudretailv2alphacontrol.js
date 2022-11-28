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
import { GoogleCloudRetailV2alphaSearchRequestFacetSpec } from "./googlecloudretailv2alphasearchrequestfacetspec";
import { GoogleCloudRetailV2alphaRule } from "./googlecloudretailv2alpharule";
export var GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum;
(function (GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum) {
    GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseUnspecified"] = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED";
    GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseSearch"] = "SEARCH_SOLUTION_USE_CASE_SEARCH";
    GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseBrowse"] = "SEARCH_SOLUTION_USE_CASE_BROWSE";
})(GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum || (GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum = {}));
export var GoogleCloudRetailV2alphaControlSolutionTypesEnum;
(function (GoogleCloudRetailV2alphaControlSolutionTypesEnum) {
    GoogleCloudRetailV2alphaControlSolutionTypesEnum["SolutionTypeUnspecified"] = "SOLUTION_TYPE_UNSPECIFIED";
    GoogleCloudRetailV2alphaControlSolutionTypesEnum["SolutionTypeRecommendation"] = "SOLUTION_TYPE_RECOMMENDATION";
    GoogleCloudRetailV2alphaControlSolutionTypesEnum["SolutionTypeSearch"] = "SOLUTION_TYPE_SEARCH";
})(GoogleCloudRetailV2alphaControlSolutionTypesEnum || (GoogleCloudRetailV2alphaControlSolutionTypesEnum = {}));
// GoogleCloudRetailV2alphaControl
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2alphaControl = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaControl, _super);
    function GoogleCloudRetailV2alphaControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaControl.prototype, "associatedServingConfigIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaControl.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestFacetSpec)
    ], GoogleCloudRetailV2alphaControl.prototype, "facetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaControl.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2alphaRule)
    ], GoogleCloudRetailV2alphaControl.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaControl.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaControl.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2alphaControl;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaControl };
// GoogleCloudRetailV2alphaControlInput
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2alphaControlInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaControlInput, _super);
    function GoogleCloudRetailV2alphaControlInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=facetSpec" }),
        __metadata("design:type", GoogleCloudRetailV2alphaSearchRequestFacetSpec)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "facetSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2alphaRule)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaControlInput.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2alphaControlInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaControlInput };
