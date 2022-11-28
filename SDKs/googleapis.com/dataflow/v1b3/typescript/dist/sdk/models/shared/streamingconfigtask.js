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
import { StreamingComputationConfig } from "./streamingcomputationconfig";
// StreamingConfigTask
/**
 * A task that carries configuration information for streaming computations.
**/
var StreamingConfigTask = /** @class */ (function (_super) {
    __extends(StreamingConfigTask, _super);
    function StreamingConfigTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitStreamChunkSizeBytes" }),
        __metadata("design:type", String)
    ], StreamingConfigTask.prototype, "commitStreamChunkSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=getDataStreamChunkSizeBytes" }),
        __metadata("design:type", String)
    ], StreamingConfigTask.prototype, "getDataStreamChunkSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxWorkItemCommitBytes" }),
        __metadata("design:type", String)
    ], StreamingConfigTask.prototype, "maxWorkItemCommitBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingComputationConfigs", elemType: StreamingComputationConfig }),
        __metadata("design:type", Array)
    ], StreamingConfigTask.prototype, "streamingComputationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userStepToStateFamilyNameMap" }),
        __metadata("design:type", Map)
    ], StreamingConfigTask.prototype, "userStepToStateFamilyNameMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windmillServiceEndpoint" }),
        __metadata("design:type", String)
    ], StreamingConfigTask.prototype, "windmillServiceEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windmillServicePort" }),
        __metadata("design:type", String)
    ], StreamingConfigTask.prototype, "windmillServicePort", void 0);
    return StreamingConfigTask;
}(SpeakeasyBase));
export { StreamingConfigTask };
