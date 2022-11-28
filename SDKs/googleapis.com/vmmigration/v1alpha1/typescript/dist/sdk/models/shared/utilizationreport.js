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
import { Status } from "./status";
import { VmUtilizationInfo } from "./vmutilizationinfo";
import { VmUtilizationInfoInput } from "./vmutilizationinfo";
export var UtilizationReportStateEnum;
(function (UtilizationReportStateEnum) {
    UtilizationReportStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    UtilizationReportStateEnum["Creating"] = "CREATING";
    UtilizationReportStateEnum["Succeeded"] = "SUCCEEDED";
    UtilizationReportStateEnum["Failed"] = "FAILED";
})(UtilizationReportStateEnum || (UtilizationReportStateEnum = {}));
export var UtilizationReportTimeFrameEnum;
(function (UtilizationReportTimeFrameEnum) {
    UtilizationReportTimeFrameEnum["TimeFrameUnspecified"] = "TIME_FRAME_UNSPECIFIED";
    UtilizationReportTimeFrameEnum["Week"] = "WEEK";
    UtilizationReportTimeFrameEnum["Month"] = "MONTH";
    UtilizationReportTimeFrameEnum["Year"] = "YEAR";
})(UtilizationReportTimeFrameEnum || (UtilizationReportTimeFrameEnum = {}));
// UtilizationReport
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
var UtilizationReport = /** @class */ (function (_super) {
    __extends(UtilizationReport, _super);
    function UtilizationReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], UtilizationReport.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameEndTime" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "frameEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "stateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeFrame" }),
        __metadata("design:type", String)
    ], UtilizationReport.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmCount" }),
        __metadata("design:type", Number)
    ], UtilizationReport.prototype, "vmCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vms", elemType: VmUtilizationInfo }),
        __metadata("design:type", Array)
    ], UtilizationReport.prototype, "vms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmsCount" }),
        __metadata("design:type", Number)
    ], UtilizationReport.prototype, "vmsCount", void 0);
    return UtilizationReport;
}(SpeakeasyBase));
export { UtilizationReport };
// UtilizationReportInput
/**
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
var UtilizationReportInput = /** @class */ (function (_super) {
    __extends(UtilizationReportInput, _super);
    function UtilizationReportInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UtilizationReportInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], UtilizationReportInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeFrame" }),
        __metadata("design:type", String)
    ], UtilizationReportInput.prototype, "timeFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vms", elemType: VmUtilizationInfoInput }),
        __metadata("design:type", Array)
    ], UtilizationReportInput.prototype, "vms", void 0);
    return UtilizationReportInput;
}(SpeakeasyBase));
export { UtilizationReportInput };
