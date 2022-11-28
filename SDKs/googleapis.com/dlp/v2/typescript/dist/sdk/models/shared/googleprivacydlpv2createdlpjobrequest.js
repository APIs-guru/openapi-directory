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
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";
// GooglePrivacyDlpV2CreateDlpJobRequest
/**
 * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
**/
var GooglePrivacyDlpV2CreateDlpJobRequest = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2CreateDlpJobRequest, _super);
    function GooglePrivacyDlpV2CreateDlpJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectJob" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectJobConfig)
    ], GooglePrivacyDlpV2CreateDlpJobRequest.prototype, "inspectJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CreateDlpJobRequest.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2CreateDlpJobRequest.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=riskJob" }),
        __metadata("design:type", GooglePrivacyDlpV2RiskAnalysisJobConfig)
    ], GooglePrivacyDlpV2CreateDlpJobRequest.prototype, "riskJob", void 0);
    return GooglePrivacyDlpV2CreateDlpJobRequest;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2CreateDlpJobRequest };
