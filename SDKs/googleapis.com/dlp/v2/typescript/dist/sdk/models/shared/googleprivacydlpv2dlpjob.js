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
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectDataSourceDetails } from "./googleprivacydlpv2inspectdatasourcedetails";
import { GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails } from "./googleprivacydlpv2analyzedatasourceriskdetails";
export var GooglePrivacyDlpV2DlpJobStateEnum;
(function (GooglePrivacyDlpV2DlpJobStateEnum) {
    GooglePrivacyDlpV2DlpJobStateEnum["JobStateUnspecified"] = "JOB_STATE_UNSPECIFIED";
    GooglePrivacyDlpV2DlpJobStateEnum["Pending"] = "PENDING";
    GooglePrivacyDlpV2DlpJobStateEnum["Running"] = "RUNNING";
    GooglePrivacyDlpV2DlpJobStateEnum["Done"] = "DONE";
    GooglePrivacyDlpV2DlpJobStateEnum["Canceled"] = "CANCELED";
    GooglePrivacyDlpV2DlpJobStateEnum["Failed"] = "FAILED";
    GooglePrivacyDlpV2DlpJobStateEnum["Active"] = "ACTIVE";
})(GooglePrivacyDlpV2DlpJobStateEnum || (GooglePrivacyDlpV2DlpJobStateEnum = {}));
export var GooglePrivacyDlpV2DlpJobTypeEnum;
(function (GooglePrivacyDlpV2DlpJobTypeEnum) {
    GooglePrivacyDlpV2DlpJobTypeEnum["DlpJobTypeUnspecified"] = "DLP_JOB_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2DlpJobTypeEnum["InspectJob"] = "INSPECT_JOB";
    GooglePrivacyDlpV2DlpJobTypeEnum["RiskAnalysisJob"] = "RISK_ANALYSIS_JOB";
})(GooglePrivacyDlpV2DlpJobTypeEnum || (GooglePrivacyDlpV2DlpJobTypeEnum = {}));
// GooglePrivacyDlpV2DlpJob
/**
 * Combines all of the information about a DLP job.
**/
var GooglePrivacyDlpV2DlpJob = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2DlpJob, _super);
    function GooglePrivacyDlpV2DlpJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GooglePrivacyDlpV2Error }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2DlpJob.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectDetails" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectDataSourceDetails)
    ], GooglePrivacyDlpV2DlpJob.prototype, "inspectDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobTriggerName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "jobTriggerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=riskDetails" }),
        __metadata("design:type", GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails)
    ], GooglePrivacyDlpV2DlpJob.prototype, "riskDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2DlpJob.prototype, "type", void 0);
    return GooglePrivacyDlpV2DlpJob;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2DlpJob };
