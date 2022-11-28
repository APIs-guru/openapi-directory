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
export var ScanRunExecutionStateEnum;
(function (ScanRunExecutionStateEnum) {
    ScanRunExecutionStateEnum["ExecutionStateUnspecified"] = "EXECUTION_STATE_UNSPECIFIED";
    ScanRunExecutionStateEnum["Queued"] = "QUEUED";
    ScanRunExecutionStateEnum["Scanning"] = "SCANNING";
    ScanRunExecutionStateEnum["Finished"] = "FINISHED";
})(ScanRunExecutionStateEnum || (ScanRunExecutionStateEnum = {}));
export var ScanRunResultStateEnum;
(function (ScanRunResultStateEnum) {
    ScanRunResultStateEnum["ResultStateUnspecified"] = "RESULT_STATE_UNSPECIFIED";
    ScanRunResultStateEnum["Success"] = "SUCCESS";
    ScanRunResultStateEnum["Error"] = "ERROR";
    ScanRunResultStateEnum["Killed"] = "KILLED";
})(ScanRunResultStateEnum || (ScanRunResultStateEnum = {}));
// ScanRun
/**
 * A ScanRun is a output-only resource representing an actual run of the scan.
**/
var ScanRun = /** @class */ (function (_super) {
    __extends(ScanRun, _super);
    function ScanRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionState" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "executionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasVulnerabilities" }),
        __metadata("design:type", Boolean)
    ], ScanRun.prototype, "hasVulnerabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressPercent" }),
        __metadata("design:type", Number)
    ], ScanRun.prototype, "progressPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultState" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "resultState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlsCrawledCount" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "urlsCrawledCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlsTestedCount" }),
        __metadata("design:type", String)
    ], ScanRun.prototype, "urlsTestedCount", void 0);
    return ScanRun;
}(SpeakeasyBase));
export { ScanRun };
