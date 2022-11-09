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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
(function (GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum) {
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsUnspecified"] = "FLEXRS_UNSPECIFIED";
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsSpeedOptimized"] = "FLEXRS_SPEED_OPTIMIZED";
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsCostOptimized"] = "FLEXRS_COST_OPTIMIZED";
})(GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum || (GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = {}));
export var GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
(function (GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum) {
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpUnspecified"] = "WORKER_IP_UNSPECIFIED";
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpPublic"] = "WORKER_IP_PUBLIC";
    GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpPrivate"] = "WORKER_IP_PRIVATE";
})(GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum || (GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum = {}));
// GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment
/**
 * The environment values to be set at runtime for a Flex Template.
**/
var GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment = /** @class */ (function (_super) {
    __extends(GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment, _super);
    function GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=additionalExperiments" }),
        __metadata("design:type", Array)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "additionalExperiments", void 0);
    __decorate([
        Metadata({ data: "json, name=additionalUserLabels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "additionalUserLabels", void 0);
    __decorate([
        Metadata({ data: "json, name=enableStreamingEngine" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "enableStreamingEngine", void 0);
    __decorate([
        Metadata({ data: "json, name=flexrsGoal" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "flexrsGoal", void 0);
    __decorate([
        Metadata({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "ipConfiguration", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "machineType", void 0);
    __decorate([
        Metadata({ data: "json, name=maxWorkers" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "maxWorkers", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=numWorkers" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "numWorkers", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "serviceAccountEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "subnetwork", void 0);
    __decorate([
        Metadata({ data: "json, name=tempLocation" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "tempLocation", void 0);
    __decorate([
        Metadata({ data: "json, name=workerRegion" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "workerRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=workerZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "workerZone", void 0);
    __decorate([
        Metadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment.prototype, "zone", void 0);
    return GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
}(SpeakeasyBase));
export { GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment };
