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
import { GoogleCloudDataplexV1DataQualityDimensionResult } from "./googleclouddataplexv1dataqualitydimensionresult";
import { GoogleCloudDataplexV1DataQualityRuleResult } from "./googleclouddataplexv1dataqualityruleresult";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";
// GoogleCloudDataplexV1DataQualityResult
/**
 * The output of a DataQualityScan.
**/
var GoogleCloudDataplexV1DataQualityResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1DataQualityResult, _super);
    function GoogleCloudDataplexV1DataQualityResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GoogleCloudDataplexV1DataQualityDimensionResult }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1DataQualityResult.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passed" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1DataQualityResult.prototype, "passed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityResult.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudDataplexV1DataQualityRuleResult }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1DataQualityResult.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scannedData" }),
        __metadata("design:type", GoogleCloudDataplexV1ScannedData)
    ], GoogleCloudDataplexV1DataQualityResult.prototype, "scannedData", void 0);
    return GoogleCloudDataplexV1DataQualityResult;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1DataQualityResult };
