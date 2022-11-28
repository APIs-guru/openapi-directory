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
export var RuntimeEnvironmentIpConfigurationEnum;
(function (RuntimeEnvironmentIpConfigurationEnum) {
    RuntimeEnvironmentIpConfigurationEnum["WorkerIpUnspecified"] = "WORKER_IP_UNSPECIFIED";
    RuntimeEnvironmentIpConfigurationEnum["WorkerIpPublic"] = "WORKER_IP_PUBLIC";
    RuntimeEnvironmentIpConfigurationEnum["WorkerIpPrivate"] = "WORKER_IP_PRIVATE";
})(RuntimeEnvironmentIpConfigurationEnum || (RuntimeEnvironmentIpConfigurationEnum = {}));
// RuntimeEnvironment
/**
 * The environment values to set at runtime.
**/
var RuntimeEnvironment = /** @class */ (function (_super) {
    __extends(RuntimeEnvironment, _super);
    function RuntimeEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalExperiments" }),
        __metadata("design:type", Array)
    ], RuntimeEnvironment.prototype, "additionalExperiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalUserLabels" }),
        __metadata("design:type", Map)
    ], RuntimeEnvironment.prototype, "additionalUserLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bypassTempDirValidation" }),
        __metadata("design:type", Boolean)
    ], RuntimeEnvironment.prototype, "bypassTempDirValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStreamingEngine" }),
        __metadata("design:type", Boolean)
    ], RuntimeEnvironment.prototype, "enableStreamingEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "ipConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "kmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxWorkers" }),
        __metadata("design:type", Number)
    ], RuntimeEnvironment.prototype, "maxWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numWorkers" }),
        __metadata("design:type", Number)
    ], RuntimeEnvironment.prototype, "numWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempLocation" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "tempLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerRegion" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "workerRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerZone" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "workerZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], RuntimeEnvironment.prototype, "zone", void 0);
    return RuntimeEnvironment;
}(SpeakeasyBase));
export { RuntimeEnvironment };
