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
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";
// GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel
/**
 * An individual panel with a list of ServingConfigs to consider for it.
**/
var GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel, _super);
    function GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidates", elemType: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.prototype, "candidates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCandidate" }),
        __metadata("design:type", GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.prototype, "defaultCandidate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel.prototype, "displayName", void 0);
    return GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel };
