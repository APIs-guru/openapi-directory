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
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2RevisionTemplate } from "./googlecloudrunv2revisiontemplate";
import { GoogleCloudRunV2TrafficTarget } from "./googlecloudrunv2traffictarget";
import { GoogleCloudRunV2TrafficTargetStatus } from "./googlecloudrunv2traffictargetstatus";
export var GoogleCloudRunV2ServiceIngressEnum;
(function (GoogleCloudRunV2ServiceIngressEnum) {
    GoogleCloudRunV2ServiceIngressEnum["IngressTrafficUnspecified"] = "INGRESS_TRAFFIC_UNSPECIFIED";
    GoogleCloudRunV2ServiceIngressEnum["IngressTrafficAll"] = "INGRESS_TRAFFIC_ALL";
    GoogleCloudRunV2ServiceIngressEnum["IngressTrafficInternalOnly"] = "INGRESS_TRAFFIC_INTERNAL_ONLY";
    GoogleCloudRunV2ServiceIngressEnum["IngressTrafficInternalLoadBalancer"] = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER";
})(GoogleCloudRunV2ServiceIngressEnum || (GoogleCloudRunV2ServiceIngressEnum = {}));
export var GoogleCloudRunV2ServiceLaunchStageEnum;
(function (GoogleCloudRunV2ServiceLaunchStageEnum) {
    GoogleCloudRunV2ServiceLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    GoogleCloudRunV2ServiceLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudRunV2ServiceLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    GoogleCloudRunV2ServiceLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    GoogleCloudRunV2ServiceLaunchStageEnum["Alpha"] = "ALPHA";
    GoogleCloudRunV2ServiceLaunchStageEnum["Beta"] = "BETA";
    GoogleCloudRunV2ServiceLaunchStageEnum["Ga"] = "GA";
    GoogleCloudRunV2ServiceLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(GoogleCloudRunV2ServiceLaunchStageEnum || (GoogleCloudRunV2ServiceLaunchStageEnum = {}));
// GoogleCloudRunV2Service
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
var GoogleCloudRunV2Service = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Service, _super);
    function GoogleCloudRunV2Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Service.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", GoogleCloudRunV2BinaryAuthorization)
    ], GoogleCloudRunV2Service.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Service.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingress" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "ingress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Service.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifier" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "lastModifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCreatedRevision" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "latestCreatedRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReadyRevision" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "latestReadyRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRunV2Service.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2RevisionTemplate)
    ], GoogleCloudRunV2Service.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminalCondition" }),
        __metadata("design:type", GoogleCloudRunV2Condition)
    ], GoogleCloudRunV2Service.prototype, "terminalCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic", elemType: GoogleCloudRunV2TrafficTarget }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Service.prototype, "traffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficStatuses", elemType: GoogleCloudRunV2TrafficTargetStatus }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Service.prototype, "trafficStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Service.prototype, "uri", void 0);
    return GoogleCloudRunV2Service;
}(SpeakeasyBase));
export { GoogleCloudRunV2Service };
// GoogleCloudRunV2ServiceInput
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
var GoogleCloudRunV2ServiceInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2ServiceInput, _super);
    function GoogleCloudRunV2ServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2ServiceInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", GoogleCloudRunV2BinaryAuthorization)
    ], GoogleCloudRunV2ServiceInput.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingress" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "ingress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2ServiceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2ServiceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2RevisionTemplate)
    ], GoogleCloudRunV2ServiceInput.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminalCondition" }),
        __metadata("design:type", GoogleCloudRunV2Condition)
    ], GoogleCloudRunV2ServiceInput.prototype, "terminalCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic", elemType: GoogleCloudRunV2TrafficTarget }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2ServiceInput.prototype, "traffic", void 0);
    return GoogleCloudRunV2ServiceInput;
}(SpeakeasyBase));
export { GoogleCloudRunV2ServiceInput };
