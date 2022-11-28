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
import { GooglePrivacyDlpV2KMapEstimationQuasiIdValues } from "./googleprivacydlpv2kmapestimationquasiidvalues";
// GooglePrivacyDlpV2KMapEstimationHistogramBucket
/**
 * A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
**/
var GooglePrivacyDlpV2KMapEstimationHistogramBucket = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2KMapEstimationHistogramBucket, _super);
    function GooglePrivacyDlpV2KMapEstimationHistogramBucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketSize" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KMapEstimationHistogramBucket.prototype, "bucketSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketValueCount" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KMapEstimationHistogramBucket.prototype, "bucketValueCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2KMapEstimationQuasiIdValues }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2KMapEstimationHistogramBucket.prototype, "bucketValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAnonymity" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KMapEstimationHistogramBucket.prototype, "maxAnonymity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minAnonymity" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2KMapEstimationHistogramBucket.prototype, "minAnonymity", void 0);
    return GooglePrivacyDlpV2KMapEstimationHistogramBucket;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2KMapEstimationHistogramBucket };
