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
import { AutoscalingSettings } from "./autoscalingsettings";
import { Disk } from "./disk";
import { Package } from "./package";
import { SDKHarnessContainerImage } from "./sdkharnesscontainerimage";
import { TaskRunnerSettings } from "./taskrunnersettings";
export var WorkerPoolDefaultPackageSetEnum;
(function (WorkerPoolDefaultPackageSetEnum) {
    WorkerPoolDefaultPackageSetEnum["DefaultPackageSetUnknown"] = "DEFAULT_PACKAGE_SET_UNKNOWN";
    WorkerPoolDefaultPackageSetEnum["DefaultPackageSetNone"] = "DEFAULT_PACKAGE_SET_NONE";
    WorkerPoolDefaultPackageSetEnum["DefaultPackageSetJava"] = "DEFAULT_PACKAGE_SET_JAVA";
    WorkerPoolDefaultPackageSetEnum["DefaultPackageSetPython"] = "DEFAULT_PACKAGE_SET_PYTHON";
})(WorkerPoolDefaultPackageSetEnum || (WorkerPoolDefaultPackageSetEnum = {}));
export var WorkerPoolIpConfigurationEnum;
(function (WorkerPoolIpConfigurationEnum) {
    WorkerPoolIpConfigurationEnum["WorkerIpUnspecified"] = "WORKER_IP_UNSPECIFIED";
    WorkerPoolIpConfigurationEnum["WorkerIpPublic"] = "WORKER_IP_PUBLIC";
    WorkerPoolIpConfigurationEnum["WorkerIpPrivate"] = "WORKER_IP_PRIVATE";
})(WorkerPoolIpConfigurationEnum || (WorkerPoolIpConfigurationEnum = {}));
export var WorkerPoolTeardownPolicyEnum;
(function (WorkerPoolTeardownPolicyEnum) {
    WorkerPoolTeardownPolicyEnum["TeardownPolicyUnknown"] = "TEARDOWN_POLICY_UNKNOWN";
    WorkerPoolTeardownPolicyEnum["TeardownAlways"] = "TEARDOWN_ALWAYS";
    WorkerPoolTeardownPolicyEnum["TeardownOnSuccess"] = "TEARDOWN_ON_SUCCESS";
    WorkerPoolTeardownPolicyEnum["TeardownNever"] = "TEARDOWN_NEVER";
})(WorkerPoolTeardownPolicyEnum || (WorkerPoolTeardownPolicyEnum = {}));
// WorkerPool
/**
 * Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
**/
var WorkerPool = /** @class */ (function (_super) {
    __extends(WorkerPool, _super);
    function WorkerPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscalingSettings" }),
        __metadata("design:type", AutoscalingSettings)
    ], WorkerPool.prototype, "autoscalingSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: Disk }),
        __metadata("design:type", Array)
    ], WorkerPool.prototype, "dataDisks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPackageSet" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "defaultPackageSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", Number)
    ], WorkerPool.prototype, "diskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSourceImage" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "diskSourceImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "ipConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], WorkerPool.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numThreadsPerWorker" }),
        __metadata("design:type", Number)
    ], WorkerPool.prototype, "numThreadsPerWorker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numWorkers" }),
        __metadata("design:type", Number)
    ], WorkerPool.prototype, "numWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onHostMaintenance" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "onHostMaintenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packages", elemType: Package }),
        __metadata("design:type", Array)
    ], WorkerPool.prototype, "packages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=poolArgs" }),
        __metadata("design:type", Map)
    ], WorkerPool.prototype, "poolArgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdkHarnessContainerImages", elemType: SDKHarnessContainerImage }),
        __metadata("design:type", Array)
    ], WorkerPool.prototype, "sdkHarnessContainerImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskrunnerSettings" }),
        __metadata("design:type", TaskRunnerSettings)
    ], WorkerPool.prototype, "taskrunnerSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teardownPolicy" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "teardownPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerHarnessContainerImage" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "workerHarnessContainerImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "zone", void 0);
    return WorkerPool;
}(SpeakeasyBase));
export { WorkerPool };
