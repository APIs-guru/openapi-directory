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
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale } from "./googledevtoolsremotebuildexecutionadminv1alphaautoscale";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig } from "./googledevtoolsremotebuildexecutionadminv1alphaworkerconfig";
export var GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum;
(function (GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum) {
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["Creating"] = "CREATING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["Running"] = "RUNNING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["Updating"] = "UPDATING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["Deleting"] = "DELETING";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum["Inactive"] = "INACTIVE";
})(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum || (GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum = {}));
// GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
/**
 * A worker pool resource in the Remote Build Execution API.
**/
var GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool = /** @class */ (function (_super) {
    __extends(GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool, _super);
    function GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscale" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "autoscale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostOs" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "hostOs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "workerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerCount" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool.prototype, "workerCount", void 0);
    return GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
}(SpeakeasyBase));
export { GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool };
