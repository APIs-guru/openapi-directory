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
import { JobPlacement } from "./jobplacement";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { JobReference } from "./jobreference";
import { JobScheduling } from "./jobscheduling";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { JobStatus } from "./jobstatus";
import { TrinoJob } from "./trinojob";
import { YarnApplication } from "./yarnapplication";
import { JobPlacementInput } from "./jobplacement";
// Job
/**
 * A Dataproc job resource.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=done" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "done", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driverControlFilesUri" }),
        __metadata("design:type", String)
    ], Job.prototype, "driverControlFilesUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driverOutputResourceUri" }),
        __metadata("design:type", String)
    ], Job.prototype, "driverOutputResourceUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hadoopJob" }),
        __metadata("design:type", HadoopJob)
    ], Job.prototype, "hadoopJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiveJob" }),
        __metadata("design:type", HiveJob)
    ], Job.prototype, "hiveJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobUuid" }),
        __metadata("design:type", String)
    ], Job.prototype, "jobUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Job.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pigJob" }),
        __metadata("design:type", PigJob)
    ], Job.prototype, "pigJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement" }),
        __metadata("design:type", JobPlacement)
    ], Job.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prestoJob" }),
        __metadata("design:type", PrestoJob)
    ], Job.prototype, "prestoJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pysparkJob" }),
        __metadata("design:type", PySparkJob)
    ], Job.prototype, "pysparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", JobReference)
    ], Job.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduling" }),
        __metadata("design:type", JobScheduling)
    ], Job.prototype, "scheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkJob" }),
        __metadata("design:type", SparkJob)
    ], Job.prototype, "sparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkRJob" }),
        __metadata("design:type", SparkRJob)
    ], Job.prototype, "sparkRJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", SparkSqlJob)
    ], Job.prototype, "sparkSqlJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", JobStatus)
    ], Job.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusHistory", elemType: JobStatus }),
        __metadata("design:type", Array)
    ], Job.prototype, "statusHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trinoJob" }),
        __metadata("design:type", TrinoJob)
    ], Job.prototype, "trinoJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yarnApplications", elemType: YarnApplication }),
        __metadata("design:type", Array)
    ], Job.prototype, "yarnApplications", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
// JobInput
/**
 * A Dataproc job resource.
**/
var JobInput = /** @class */ (function (_super) {
    __extends(JobInput, _super);
    function JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hadoopJob" }),
        __metadata("design:type", HadoopJob)
    ], JobInput.prototype, "hadoopJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hiveJob" }),
        __metadata("design:type", HiveJob)
    ], JobInput.prototype, "hiveJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], JobInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pigJob" }),
        __metadata("design:type", PigJob)
    ], JobInput.prototype, "pigJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement" }),
        __metadata("design:type", JobPlacementInput)
    ], JobInput.prototype, "placement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prestoJob" }),
        __metadata("design:type", PrestoJob)
    ], JobInput.prototype, "prestoJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pysparkJob" }),
        __metadata("design:type", PySparkJob)
    ], JobInput.prototype, "pysparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", JobReference)
    ], JobInput.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduling" }),
        __metadata("design:type", JobScheduling)
    ], JobInput.prototype, "scheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkJob" }),
        __metadata("design:type", SparkJob)
    ], JobInput.prototype, "sparkJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkRJob" }),
        __metadata("design:type", SparkRJob)
    ], JobInput.prototype, "sparkRJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkSqlJob" }),
        __metadata("design:type", SparkSqlJob)
    ], JobInput.prototype, "sparkSqlJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trinoJob" }),
        __metadata("design:type", TrinoJob)
    ], JobInput.prototype, "trinoJob", void 0);
    return JobInput;
}(SpeakeasyBase));
export { JobInput };
