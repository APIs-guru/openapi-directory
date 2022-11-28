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
import { CounterUpdate } from "./counterupdate";
import { DynamicSourceSplit } from "./dynamicsourcesplit";
import { Status } from "./status";
import { MetricUpdate } from "./metricupdate";
import { ApproximateProgress } from "./approximateprogress";
import { ApproximateReportedProgress } from "./approximatereportedprogress";
import { SourceFork } from "./sourcefork";
import { SourceOperationResponse } from "./sourceoperationresponse";
import { Position } from "./position";
// WorkItemStatus
/**
 * Conveys a worker's progress through the work described by a WorkItem.
**/
var WorkItemStatus = /** @class */ (function (_super) {
    __extends(WorkItemStatus, _super);
    function WorkItemStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed" }),
        __metadata("design:type", Boolean)
    ], WorkItemStatus.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counterUpdates", elemType: CounterUpdate }),
        __metadata("design:type", Array)
    ], WorkItemStatus.prototype, "counterUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicSourceSplit" }),
        __metadata("design:type", DynamicSourceSplit)
    ], WorkItemStatus.prototype, "dynamicSourceSplit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: Status }),
        __metadata("design:type", Array)
    ], WorkItemStatus.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricUpdates", elemType: MetricUpdate }),
        __metadata("design:type", Array)
    ], WorkItemStatus.prototype, "metricUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", ApproximateProgress)
    ], WorkItemStatus.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportIndex" }),
        __metadata("design:type", String)
    ], WorkItemStatus.prototype, "reportIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportedProgress" }),
        __metadata("design:type", ApproximateReportedProgress)
    ], WorkItemStatus.prototype, "reportedProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedLeaseDuration" }),
        __metadata("design:type", String)
    ], WorkItemStatus.prototype, "requestedLeaseDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceFork" }),
        __metadata("design:type", SourceFork)
    ], WorkItemStatus.prototype, "sourceFork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceOperationResponse" }),
        __metadata("design:type", SourceOperationResponse)
    ], WorkItemStatus.prototype, "sourceOperationResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stopPosition" }),
        __metadata("design:type", Position)
    ], WorkItemStatus.prototype, "stopPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalThrottlerWaitTimeSeconds" }),
        __metadata("design:type", Number)
    ], WorkItemStatus.prototype, "totalThrottlerWaitTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workItemId" }),
        __metadata("design:type", String)
    ], WorkItemStatus.prototype, "workItemId", void 0);
    return WorkItemStatus;
}(SpeakeasyBase));
export { WorkItemStatus };
