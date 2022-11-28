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
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
import { Operation } from "./operation";
export var DiscoveredAnalysisStatusEnum;
(function (DiscoveredAnalysisStatusEnum) {
    DiscoveredAnalysisStatusEnum["AnalysisStatusUnspecified"] = "ANALYSIS_STATUS_UNSPECIFIED";
    DiscoveredAnalysisStatusEnum["Pending"] = "PENDING";
    DiscoveredAnalysisStatusEnum["Scanning"] = "SCANNING";
    DiscoveredAnalysisStatusEnum["Complete"] = "COMPLETE";
    DiscoveredAnalysisStatusEnum["FinishedSuccess"] = "FINISHED_SUCCESS";
    DiscoveredAnalysisStatusEnum["FinishedFailed"] = "FINISHED_FAILED";
    DiscoveredAnalysisStatusEnum["FinishedUnsupported"] = "FINISHED_UNSUPPORTED";
})(DiscoveredAnalysisStatusEnum || (DiscoveredAnalysisStatusEnum = {}));
export var DiscoveredContinuousAnalysisEnum;
(function (DiscoveredContinuousAnalysisEnum) {
    DiscoveredContinuousAnalysisEnum["ContinuousAnalysisUnspecified"] = "CONTINUOUS_ANALYSIS_UNSPECIFIED";
    DiscoveredContinuousAnalysisEnum["Active"] = "ACTIVE";
    DiscoveredContinuousAnalysisEnum["Inactive"] = "INACTIVE";
})(DiscoveredContinuousAnalysisEnum || (DiscoveredContinuousAnalysisEnum = {}));
// Discovered
/**
 * Provides information about the scan status of a discovered resource.
**/
var Discovered = /** @class */ (function (_super) {
    __extends(Discovered, _super);
    function Discovered() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysisCompleted" }),
        __metadata("design:type", AnalysisCompleted)
    ], Discovered.prototype, "analysisCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysisError", elemType: Status }),
        __metadata("design:type", Array)
    ], Discovered.prototype, "analysisError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysisStatus" }),
        __metadata("design:type", String)
    ], Discovered.prototype, "analysisStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysisStatusError" }),
        __metadata("design:type", Status)
    ], Discovered.prototype, "analysisStatusError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archiveTime" }),
        __metadata("design:type", String)
    ], Discovered.prototype, "archiveTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continuousAnalysis" }),
        __metadata("design:type", String)
    ], Discovered.prototype, "continuousAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpe" }),
        __metadata("design:type", String)
    ], Discovered.prototype, "cpe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastScanTime" }),
        __metadata("design:type", String)
    ], Discovered.prototype, "lastScanTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", Operation)
    ], Discovered.prototype, "operation", void 0);
    return Discovered;
}(SpeakeasyBase));
export { Discovered };
