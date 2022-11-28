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
import { GoogleCloudRetailV2Rule } from "./googlecloudretailv2rule";
export var GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum;
(function (GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum) {
    GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseUnspecified"] = "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED";
    GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseSearch"] = "SEARCH_SOLUTION_USE_CASE_SEARCH";
    GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum["SearchSolutionUseCaseBrowse"] = "SEARCH_SOLUTION_USE_CASE_BROWSE";
})(GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum || (GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum = {}));
export var GoogleCloudRetailV2ControlSolutionTypesEnum;
(function (GoogleCloudRetailV2ControlSolutionTypesEnum) {
    GoogleCloudRetailV2ControlSolutionTypesEnum["SolutionTypeUnspecified"] = "SOLUTION_TYPE_UNSPECIFIED";
    GoogleCloudRetailV2ControlSolutionTypesEnum["SolutionTypeRecommendation"] = "SOLUTION_TYPE_RECOMMENDATION";
    GoogleCloudRetailV2ControlSolutionTypesEnum["SolutionTypeSearch"] = "SOLUTION_TYPE_SEARCH";
})(GoogleCloudRetailV2ControlSolutionTypesEnum || (GoogleCloudRetailV2ControlSolutionTypesEnum = {}));
// GoogleCloudRetailV2Control
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2Control = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2Control, _super);
    function GoogleCloudRetailV2Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedServingConfigIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Control.prototype, "associatedServingConfigIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Control.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Control.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2Rule)
    ], GoogleCloudRetailV2Control.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Control.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Control.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2Control;
}(SpeakeasyBase));
export { GoogleCloudRetailV2Control };
// GoogleCloudRetailV2ControlInput
/**
 * Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.
**/
var GoogleCloudRetailV2ControlInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2ControlInput, _super);
    function GoogleCloudRetailV2ControlInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ControlInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ControlInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudRetailV2Rule)
    ], GoogleCloudRetailV2ControlInput.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchSolutionUseCase" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ControlInput.prototype, "searchSolutionUseCase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ControlInput.prototype, "solutionTypes", void 0);
    return GoogleCloudRetailV2ControlInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2ControlInput };
