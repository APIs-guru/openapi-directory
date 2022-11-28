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
import { EnvironmentConfig } from "./environmentconfig";
import { PySparkBatch } from "./pysparkbatch";
import { RuntimeConfig } from "./runtimeconfig";
import { RuntimeInfo } from "./runtimeinfo";
import { SparkBatch } from "./sparkbatch";
import { SparkRBatch } from "./sparkrbatch";
import { SparkSqlBatch } from "./sparksqlbatch";
import { StateHistory } from "./statehistory";
import { RuntimeInfoInput } from "./runtimeinfo";
export var BatchStateEnum;
(function (BatchStateEnum) {
    BatchStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BatchStateEnum["Pending"] = "PENDING";
    BatchStateEnum["Running"] = "RUNNING";
    BatchStateEnum["Cancelling"] = "CANCELLING";
    BatchStateEnum["Cancelled"] = "CANCELLED";
    BatchStateEnum["Succeeded"] = "SUCCEEDED";
    BatchStateEnum["Failed"] = "FAILED";
})(BatchStateEnum || (BatchStateEnum = {}));
// Batch
/**
 * A representation of a batch workload in the service.
**/
var Batch = /** @class */ (function (_super) {
    __extends(Batch, _super);
    function Batch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Batch.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], Batch.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentConfig" }),
        __metadata("design:type", EnvironmentConfig)
    ], Batch.prototype, "environmentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Batch.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Batch.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], Batch.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pysparkBatch" }),
        __metadata("design:type", PySparkBatch)
    ], Batch.prototype, "pysparkBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeConfig" }),
        __metadata("design:type", RuntimeConfig)
    ], Batch.prototype, "runtimeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeInfo" }),
        __metadata("design:type", RuntimeInfo)
    ], Batch.prototype, "runtimeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkBatch" }),
        __metadata("design:type", SparkBatch)
    ], Batch.prototype, "sparkBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkRBatch" }),
        __metadata("design:type", SparkRBatch)
    ], Batch.prototype, "sparkRBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSqlBatch" }),
        __metadata("design:type", SparkSqlBatch)
    ], Batch.prototype, "sparkSqlBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Batch.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateHistory", elemType: StateHistory }),
        __metadata("design:type", Array)
    ], Batch.prototype, "stateHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Batch.prototype, "stateMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], Batch.prototype, "stateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], Batch.prototype, "uuid", void 0);
    return Batch;
}(SpeakeasyBase));
export { Batch };
// BatchInput
/**
 * A representation of a batch workload in the service.
**/
var BatchInput = /** @class */ (function (_super) {
    __extends(BatchInput, _super);
    function BatchInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentConfig" }),
        __metadata("design:type", EnvironmentConfig)
    ], BatchInput.prototype, "environmentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], BatchInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pysparkBatch" }),
        __metadata("design:type", PySparkBatch)
    ], BatchInput.prototype, "pysparkBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeConfig" }),
        __metadata("design:type", RuntimeConfig)
    ], BatchInput.prototype, "runtimeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeInfo" }),
        __metadata("design:type", RuntimeInfoInput)
    ], BatchInput.prototype, "runtimeInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkBatch" }),
        __metadata("design:type", SparkBatch)
    ], BatchInput.prototype, "sparkBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkRBatch" }),
        __metadata("design:type", SparkRBatch)
    ], BatchInput.prototype, "sparkRBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSqlBatch" }),
        __metadata("design:type", SparkSqlBatch)
    ], BatchInput.prototype, "sparkSqlBatch", void 0);
    return BatchInput;
}(SpeakeasyBase));
export { BatchInput };
