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
import { LoggingConfig } from "./loggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { Schedule } from "./schedule";
import { TransferSpec } from "./transferspec";
export var TransferJobStatusEnum;
(function (TransferJobStatusEnum) {
    TransferJobStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    TransferJobStatusEnum["Enabled"] = "ENABLED";
    TransferJobStatusEnum["Disabled"] = "DISABLED";
    TransferJobStatusEnum["Deleted"] = "DELETED";
})(TransferJobStatusEnum || (TransferJobStatusEnum = {}));
// TransferJobInput
/**
 * This resource represents the configuration of a transfer job that runs periodically.
**/
var TransferJobInput = /** @class */ (function (_super) {
    __extends(TransferJobInput, _super);
    function TransferJobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TransferJobInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestOperationName" }),
        __metadata("design:type", String)
    ], TransferJobInput.prototype, "latestOperationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], TransferJobInput.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferJobInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], TransferJobInput.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], TransferJobInput.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", Schedule)
    ], TransferJobInput.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TransferJobInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferSpec" }),
        __metadata("design:type", TransferSpec)
    ], TransferJobInput.prototype, "transferSpec", void 0);
    return TransferJobInput;
}(SpeakeasyBase));
export { TransferJobInput };
// TransferJob
/**
 * This resource represents the configuration of a transfer job that runs periodically.
**/
var TransferJob = /** @class */ (function (_super) {
    __extends(TransferJob, _super);
    function TransferJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionTime" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "deletionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModificationTime" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "lastModificationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestOperationName" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "latestOperationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], TransferJob.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], TransferJob.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", Schedule)
    ], TransferJob.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TransferJob.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferSpec" }),
        __metadata("design:type", TransferSpec)
    ], TransferJob.prototype, "transferSpec", void 0);
    return TransferJob;
}(SpeakeasyBase));
export { TransferJob };
