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
import { GooglePrivacyDlpV2CategoricalStatsConfig } from "./googleprivacydlpv2categoricalstatsconfig";
import { GooglePrivacyDlpV2DeltaPresenceEstimationConfig } from "./googleprivacydlpv2deltapresenceestimationconfig";
import { GooglePrivacyDlpV2KAnonymityConfig } from "./googleprivacydlpv2kanonymityconfig";
import { GooglePrivacyDlpV2KMapEstimationConfig } from "./googleprivacydlpv2kmapestimationconfig";
import { GooglePrivacyDlpV2LDiversityConfig } from "./googleprivacydlpv2ldiversityconfig";
import { GooglePrivacyDlpV2NumericalStatsConfig } from "./googleprivacydlpv2numericalstatsconfig";
// GooglePrivacyDlpV2PrivacyMetric
/**
 * Privacy metric to compute for reidentification risk analysis.
**/
var GooglePrivacyDlpV2PrivacyMetric = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2PrivacyMetric, _super);
    function GooglePrivacyDlpV2PrivacyMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoricalStatsConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2CategoricalStatsConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "categoricalStatsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deltaPresenceEstimationConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2DeltaPresenceEstimationConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "deltaPresenceEstimationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kAnonymityConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2KAnonymityConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "kAnonymityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kMapEstimationConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2KMapEstimationConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "kMapEstimationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lDiversityConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2LDiversityConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "lDiversityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericalStatsConfig" }),
        __metadata("design:type", GooglePrivacyDlpV2NumericalStatsConfig)
    ], GooglePrivacyDlpV2PrivacyMetric.prototype, "numericalStatsConfig", void 0);
    return GooglePrivacyDlpV2PrivacyMetric;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2PrivacyMetric };
