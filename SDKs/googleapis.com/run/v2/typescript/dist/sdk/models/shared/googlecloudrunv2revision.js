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
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";
export var GoogleCloudRunV2RevisionExecutionEnvironmentEnum;
(function (GoogleCloudRunV2RevisionExecutionEnvironmentEnum) {
    GoogleCloudRunV2RevisionExecutionEnvironmentEnum["ExecutionEnvironmentUnspecified"] = "EXECUTION_ENVIRONMENT_UNSPECIFIED";
    GoogleCloudRunV2RevisionExecutionEnvironmentEnum["ExecutionEnvironmentGen1"] = "EXECUTION_ENVIRONMENT_GEN1";
    GoogleCloudRunV2RevisionExecutionEnvironmentEnum["ExecutionEnvironmentGen2"] = "EXECUTION_ENVIRONMENT_GEN2";
})(GoogleCloudRunV2RevisionExecutionEnvironmentEnum || (GoogleCloudRunV2RevisionExecutionEnvironmentEnum = {}));
export var GoogleCloudRunV2RevisionLaunchStageEnum;
(function (GoogleCloudRunV2RevisionLaunchStageEnum) {
    GoogleCloudRunV2RevisionLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    GoogleCloudRunV2RevisionLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudRunV2RevisionLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    GoogleCloudRunV2RevisionLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    GoogleCloudRunV2RevisionLaunchStageEnum["Alpha"] = "ALPHA";
    GoogleCloudRunV2RevisionLaunchStageEnum["Beta"] = "BETA";
    GoogleCloudRunV2RevisionLaunchStageEnum["Ga"] = "GA";
    GoogleCloudRunV2RevisionLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(GoogleCloudRunV2RevisionLaunchStageEnum || (GoogleCloudRunV2RevisionLaunchStageEnum = {}));
// GoogleCloudRunV2Revision
/**
 * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
**/
var GoogleCloudRunV2Revision = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Revision, _super);
    function GoogleCloudRunV2Revision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Revision.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Revision.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Revision.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionEnvironment" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "executionEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Revision.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "logUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxInstanceRequestConcurrency" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Revision.prototype, "maxInstanceRequestConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRunV2Revision.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaling" }),
        __metadata("design:type", GoogleCloudRunV2RevisionScaling)
    ], GoogleCloudRunV2Revision.prototype, "scaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Revision.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Revision.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcAccess" }),
        __metadata("design:type", GoogleCloudRunV2VpcAccess)
    ], GoogleCloudRunV2Revision.prototype, "vpcAccess", void 0);
    return GoogleCloudRunV2Revision;
}(SpeakeasyBase));
export { GoogleCloudRunV2Revision };
