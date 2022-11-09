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
import { NetworkConfig } from "./networkconfig";
import { WorkerConfig } from "./workerconfig";
export var WorkerPoolStateEnum;
(function (WorkerPoolStateEnum) {
    WorkerPoolStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    WorkerPoolStateEnum["Creating"] = "CREATING";
    WorkerPoolStateEnum["Running"] = "RUNNING";
    WorkerPoolStateEnum["Deleting"] = "DELETING";
    WorkerPoolStateEnum["Deleted"] = "DELETED";
})(WorkerPoolStateEnum || (WorkerPoolStateEnum = {}));
// WorkerPool
/**
 * Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
**/
var WorkerPool = /** @class */ (function (_super) {
    __extends(WorkerPool, _super);
    function WorkerPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], WorkerPool.prototype, "annotations", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "deleteTime", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], WorkerPool.prototype, "networkConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", WorkerConfig)
    ], WorkerPool.prototype, "workerConfig", void 0);
    return WorkerPool;
}(SpeakeasyBase));
export { WorkerPool };
