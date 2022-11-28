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
import { HadoopJob } from "./hadoopjob";
import { HiveJob } from "./hivejob";
import { PigJob } from "./pigjob";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { JobScheduling } from "./jobscheduling";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { TrinoJob } from "./trinojob";
// OrderedJob
/**
 * A job executed by the workflow.
**/
var OrderedJob = /** @class */ (function (_super) {
    __extends(OrderedJob, _super);
    function OrderedJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hadoopJob" }),
        __metadata("design:type", HadoopJob)
    ], OrderedJob.prototype, "hadoopJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiveJob" }),
        __metadata("design:type", HiveJob)
    ], OrderedJob.prototype, "hiveJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], OrderedJob.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pigJob" }),
        __metadata("design:type", PigJob)
    ], OrderedJob.prototype, "pigJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prerequisiteStepIds" }),
        __metadata("design:type", Array)
    ], OrderedJob.prototype, "prerequisiteStepIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prestoJob" }),
        __metadata("design:type", PrestoJob)
    ], OrderedJob.prototype, "prestoJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pysparkJob" }),
        __metadata("design:type", PySparkJob)
    ], OrderedJob.prototype, "pysparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduling" }),
        __metadata("design:type", JobScheduling)
    ], OrderedJob.prototype, "scheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkJob" }),
        __metadata("design:type", SparkJob)
    ], OrderedJob.prototype, "sparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkRJob" }),
        __metadata("design:type", SparkRJob)
    ], OrderedJob.prototype, "sparkRJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", SparkSqlJob)
    ], OrderedJob.prototype, "sparkSqlJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepId" }),
        __metadata("design:type", String)
    ], OrderedJob.prototype, "stepId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trinoJob" }),
        __metadata("design:type", TrinoJob)
    ], OrderedJob.prototype, "trinoJob", void 0);
    return OrderedJob;
}(SpeakeasyBase));
export { OrderedJob };
