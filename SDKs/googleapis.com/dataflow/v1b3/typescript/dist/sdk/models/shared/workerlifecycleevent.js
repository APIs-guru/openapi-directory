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
export var WorkerLifecycleEventEventEnum;
(function (WorkerLifecycleEventEventEnum) {
    WorkerLifecycleEventEventEnum["UnknownEvent"] = "UNKNOWN_EVENT";
    WorkerLifecycleEventEventEnum["OsStart"] = "OS_START";
    WorkerLifecycleEventEventEnum["ContainerStart"] = "CONTAINER_START";
    WorkerLifecycleEventEventEnum["NetworkUp"] = "NETWORK_UP";
    WorkerLifecycleEventEventEnum["StagingFilesDownloadStart"] = "STAGING_FILES_DOWNLOAD_START";
    WorkerLifecycleEventEventEnum["StagingFilesDownloadFinish"] = "STAGING_FILES_DOWNLOAD_FINISH";
    WorkerLifecycleEventEventEnum["SdkInstallStart"] = "SDK_INSTALL_START";
    WorkerLifecycleEventEventEnum["SdkInstallFinish"] = "SDK_INSTALL_FINISH";
})(WorkerLifecycleEventEventEnum || (WorkerLifecycleEventEventEnum = {}));
// WorkerLifecycleEvent
/**
 * A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.
**/
var WorkerLifecycleEvent = /** @class */ (function (_super) {
    __extends(WorkerLifecycleEvent, _super);
    function WorkerLifecycleEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerStartTime" }),
        __metadata("design:type", String)
    ], WorkerLifecycleEvent.prototype, "containerStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], WorkerLifecycleEvent.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], WorkerLifecycleEvent.prototype, "metadata", void 0);
    return WorkerLifecycleEvent;
}(SpeakeasyBase));
export { WorkerLifecycleEvent };
