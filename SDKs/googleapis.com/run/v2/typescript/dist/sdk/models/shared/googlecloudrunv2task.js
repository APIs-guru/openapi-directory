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
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2TaskAttemptResult } from "./googlecloudrunv2taskattemptresult";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export var GoogleCloudRunV2TaskExecutionEnvironmentEnum;
(function (GoogleCloudRunV2TaskExecutionEnvironmentEnum) {
    GoogleCloudRunV2TaskExecutionEnvironmentEnum["ExecutionEnvironmentUnspecified"] = "EXECUTION_ENVIRONMENT_UNSPECIFIED";
    GoogleCloudRunV2TaskExecutionEnvironmentEnum["ExecutionEnvironmentGen1"] = "EXECUTION_ENVIRONMENT_GEN1";
    GoogleCloudRunV2TaskExecutionEnvironmentEnum["ExecutionEnvironmentGen2"] = "EXECUTION_ENVIRONMENT_GEN2";
})(GoogleCloudRunV2TaskExecutionEnvironmentEnum || (GoogleCloudRunV2TaskExecutionEnvironmentEnum = {}));
// GoogleCloudRunV2Task
/**
 * Task represents a single run of a container to completion.
**/
var GoogleCloudRunV2Task = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Task, _super);
    function GoogleCloudRunV2Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Task.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Task.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Task.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=execution" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "execution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionEnvironment" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "executionEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Task.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Task.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastAttemptResult" }),
        __metadata("design:type", GoogleCloudRunV2TaskAttemptResult)
    ], GoogleCloudRunV2Task.prototype, "lastAttemptResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetries" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Task.prototype, "maxRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRunV2Task.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retried" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Task.prototype, "retried", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Task.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Task.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcAccess" }),
        __metadata("design:type", GoogleCloudRunV2VpcAccess)
    ], GoogleCloudRunV2Task.prototype, "vpcAccess", void 0);
    return GoogleCloudRunV2Task;
}(SpeakeasyBase));
export { GoogleCloudRunV2Task };
