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
import { GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions } from "./googleclouddataplexv1zonediscoveryspeccsvoptions";
import { GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions } from "./googleclouddataplexv1zonediscoveryspecjsonoptions";
// GoogleCloudDataplexV1ZoneDiscoverySpec
/**
 * Settings to manage the metadata discovery and publishing in a zone.
**/
var GoogleCloudDataplexV1ZoneDiscoverySpec = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1ZoneDiscoverySpec, _super);
    function GoogleCloudDataplexV1ZoneDiscoverySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=csvOptions" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "csvOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludePatterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "excludePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includePatterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "includePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonOptions" }),
        __metadata("design:type", GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "jsonOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ZoneDiscoverySpec.prototype, "schedule", void 0);
    return GoogleCloudDataplexV1ZoneDiscoverySpec;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1ZoneDiscoverySpec };
