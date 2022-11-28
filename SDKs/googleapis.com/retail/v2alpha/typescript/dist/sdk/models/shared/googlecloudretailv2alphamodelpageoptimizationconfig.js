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
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel } from "./googlecloudretailv2alphamodelpageoptimizationconfigpanel";
export var GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum;
(function (GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum) {
    GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum["RestrictionUnspecified"] = "RESTRICTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum["NoRestriction"] = "NO_RESTRICTION";
    GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum["UniqueServingConfigRestriction"] = "UNIQUE_SERVING_CONFIG_RESTRICTION";
    GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum["UniqueModelRestriction"] = "UNIQUE_MODEL_RESTRICTION";
    GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum["UniqueModelTypeRestriction"] = "UNIQUE_MODEL_TYPE_RESTRICTION";
})(GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum || (GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnum = {}));
// GoogleCloudRetailV2alphaModelPageOptimizationConfig
/**
 * The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configurations to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.
**/
var GoogleCloudRetailV2alphaModelPageOptimizationConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaModelPageOptimizationConfig, _super);
    function GoogleCloudRetailV2alphaModelPageOptimizationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageOptimizationEventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfig.prototype, "pageOptimizationEventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panels", elemType: GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfig.prototype, "panels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restriction" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfig.prototype, "restriction", void 0);
    return GoogleCloudRetailV2alphaModelPageOptimizationConfig;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaModelPageOptimizationConfig };
