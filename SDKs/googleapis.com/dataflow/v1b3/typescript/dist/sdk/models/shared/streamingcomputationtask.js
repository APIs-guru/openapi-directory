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
import { StreamingComputationRanges } from "./streamingcomputationranges";
import { MountedDataDisk } from "./mounteddatadisk";
export var StreamingComputationTaskTaskTypeEnum;
(function (StreamingComputationTaskTaskTypeEnum) {
    StreamingComputationTaskTaskTypeEnum["StreamingComputationTaskUnknown"] = "STREAMING_COMPUTATION_TASK_UNKNOWN";
    StreamingComputationTaskTaskTypeEnum["StreamingComputationTaskStop"] = "STREAMING_COMPUTATION_TASK_STOP";
    StreamingComputationTaskTaskTypeEnum["StreamingComputationTaskStart"] = "STREAMING_COMPUTATION_TASK_START";
})(StreamingComputationTaskTaskTypeEnum || (StreamingComputationTaskTaskTypeEnum = {}));
// StreamingComputationTask
/**
 * A task which describes what action should be performed for the specified streaming computation ranges.
**/
var StreamingComputationTask = /** @class */ (function (_super) {
    __extends(StreamingComputationTask, _super);
    function StreamingComputationTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computationRanges", elemType: StreamingComputationRanges }),
        __metadata("design:type", Array)
    ], StreamingComputationTask.prototype, "computationRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: MountedDataDisk }),
        __metadata("design:type", Array)
    ], StreamingComputationTask.prototype, "dataDisks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskType" }),
        __metadata("design:type", String)
    ], StreamingComputationTask.prototype, "taskType", void 0);
    return StreamingComputationTask;
}(SpeakeasyBase));
export { StreamingComputationTask };
