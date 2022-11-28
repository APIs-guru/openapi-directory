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
import { GooglePrivacyDlpV2AuxiliaryTable } from "./googleprivacydlpv2auxiliarytable";
import { GooglePrivacyDlpV2TaggedField } from "./googleprivacydlpv2taggedfield";
// GooglePrivacyDlpV2KMapEstimationConfig
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
**/
var GooglePrivacyDlpV2KMapEstimationConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2KMapEstimationConfig, _super);
    function GooglePrivacyDlpV2KMapEstimationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auxiliaryTables", elemType: GooglePrivacyDlpV2AuxiliaryTable }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2KMapEstimationConfig.prototype, "auxiliaryTables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2TaggedField }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2KMapEstimationConfig.prototype, "quasiIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionCode" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KMapEstimationConfig.prototype, "regionCode", void 0);
    return GooglePrivacyDlpV2KMapEstimationConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2KMapEstimationConfig };
