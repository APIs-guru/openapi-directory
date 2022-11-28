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
import { LogEntry } from "./logentry";
import { MetricValueSet } from "./metricvalueset";
import { QuotaProperties } from "./quotaproperties";
import { ResourceInfo } from "./resourceinfo";
import { TraceSpan } from "./tracespan";
export var OperationImportanceEnum;
(function (OperationImportanceEnum) {
    OperationImportanceEnum["Low"] = "LOW";
    OperationImportanceEnum["High"] = "HIGH";
    OperationImportanceEnum["Debug"] = "DEBUG";
})(OperationImportanceEnum || (OperationImportanceEnum = {}));
// Operation
/**
 * Represents information regarding an operation.
**/
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "consumerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importance" }),
        __metadata("design:type", String)
    ], Operation.prototype, "importance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Operation.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logEntries", elemType: LogEntry }),
        __metadata("design:type", Array)
    ], Operation.prototype, "logEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricValueSets", elemType: MetricValueSet }),
        __metadata("design:type", Array)
    ], Operation.prototype, "metricValueSets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationName" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaProperties" }),
        __metadata("design:type", QuotaProperties)
    ], Operation.prototype, "quotaProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceInfo }),
        __metadata("design:type", Array)
    ], Operation.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traceSpans", elemType: TraceSpan }),
        __metadata("design:type", Array)
    ], Operation.prototype, "traceSpans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], Operation.prototype, "userLabels", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
