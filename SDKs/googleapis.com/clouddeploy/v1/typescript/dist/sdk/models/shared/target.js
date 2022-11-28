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
import { AnthosCluster } from "./anthoscluster";
import { ExecutionConfig } from "./executionconfig";
import { GkeCluster } from "./gkecluster";
import { CloudRunLocation } from "./cloudrunlocation";
// TargetInput
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
var TargetInput = /** @class */ (function (_super) {
    __extends(TargetInput, _super);
    function TargetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], TargetInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anthosCluster" }),
        __metadata("design:type", AnthosCluster)
    ], TargetInput.prototype, "anthosCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionConfigs", elemType: ExecutionConfig }),
        __metadata("design:type", Array)
    ], TargetInput.prototype, "executionConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gke" }),
        __metadata("design:type", GkeCluster)
    ], TargetInput.prototype, "gke", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], TargetInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TargetInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireApproval" }),
        __metadata("design:type", Boolean)
    ], TargetInput.prototype, "requireApproval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run" }),
        __metadata("design:type", CloudRunLocation)
    ], TargetInput.prototype, "run", void 0);
    return TargetInput;
}(SpeakeasyBase));
export { TargetInput };
// Target
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], Target.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anthosCluster" }),
        __metadata("design:type", AnthosCluster)
    ], Target.prototype, "anthosCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Target.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Target.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Target.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionConfigs", elemType: ExecutionConfig }),
        __metadata("design:type", Array)
    ], Target.prototype, "executionConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gke" }),
        __metadata("design:type", GkeCluster)
    ], Target.prototype, "gke", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Target.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Target.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireApproval" }),
        __metadata("design:type", Boolean)
    ], Target.prototype, "requireApproval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run" }),
        __metadata("design:type", CloudRunLocation)
    ], Target.prototype, "run", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], Target.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Target.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Target.prototype, "updateTime", void 0);
    return Target;
}(SpeakeasyBase));
export { Target };
