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
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
var WorkerPool = /** @class */ (function (_super) {
    __extends(WorkerPool, _super);
    function WorkerPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], WorkerPool.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], WorkerPool.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", WorkerConfig)
    ], WorkerPool.prototype, "workerConfig", void 0);
    return WorkerPool;
}(SpeakeasyBase));
export { WorkerPool };
// WorkerPoolInput
/**
 * Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
**/
var WorkerPoolInput = /** @class */ (function (_super) {
    __extends(WorkerPoolInput, _super);
    function WorkerPoolInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], WorkerPoolInput.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], WorkerPoolInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", WorkerConfig)
    ], WorkerPoolInput.prototype, "workerConfig", void 0);
    return WorkerPoolInput;
}(SpeakeasyBase));
export { WorkerPoolInput };
