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
import { MapTask } from "./maptask";
import { Package } from "./package";
import { SeqMapTask } from "./seqmaptask";
import { ShellTask } from "./shelltask";
import { SourceOperationRequest } from "./sourceoperationrequest";
import { StreamingComputationTask } from "./streamingcomputationtask";
import { StreamingConfigTask } from "./streamingconfigtask";
import { StreamingSetupTask } from "./streamingsetuptask";
// WorkItem
/**
 * WorkItem represents basic information about a WorkItem to be executed in the cloud.
**/
var WorkItem = /** @class */ (function (_super) {
    __extends(WorkItem, _super);
    function WorkItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialReportIndex" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "initialReportIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaseExpireTime" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "leaseExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapTask" }),
        __metadata("design:type", MapTask)
    ], WorkItem.prototype, "mapTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages", elemType: Package }),
        __metadata("design:type", Array)
    ], WorkItem.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportStatusInterval" }),
        __metadata("design:type", String)
    ], WorkItem.prototype, "reportStatusInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seqMapTask" }),
        __metadata("design:type", SeqMapTask)
    ], WorkItem.prototype, "seqMapTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shellTask" }),
        __metadata("design:type", ShellTask)
    ], WorkItem.prototype, "shellTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceOperationTask" }),
        __metadata("design:type", SourceOperationRequest)
    ], WorkItem.prototype, "sourceOperationTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingComputationTask" }),
        __metadata("design:type", StreamingComputationTask)
    ], WorkItem.prototype, "streamingComputationTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingConfigTask" }),
        __metadata("design:type", StreamingConfigTask)
    ], WorkItem.prototype, "streamingConfigTask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingSetupTask" }),
        __metadata("design:type", StreamingSetupTask)
    ], WorkItem.prototype, "streamingSetupTask", void 0);
    return WorkItem;
}(SpeakeasyBase));
export { WorkItem };
