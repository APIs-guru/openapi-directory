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
import { GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions } from "./googleclouddataplexv1assetdiscoveryspeccsvoptions";
import { GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions } from "./googleclouddataplexv1assetdiscoveryspecjsonoptions";
// GoogleCloudDataplexV1AssetDiscoverySpec
/**
 * Settings to manage the metadata discovery and publishing for an asset.
**/
var GoogleCloudDataplexV1AssetDiscoverySpec = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1AssetDiscoverySpec, _super);
    function GoogleCloudDataplexV1AssetDiscoverySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvOptions" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "csvOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludePatterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "excludePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includePatterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "includePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonOptions" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "jsonOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1AssetDiscoverySpec.prototype, "schedule", void 0);
    return GoogleCloudDataplexV1AssetDiscoverySpec;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1AssetDiscoverySpec };
