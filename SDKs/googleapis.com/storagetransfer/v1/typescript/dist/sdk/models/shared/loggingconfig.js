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
export var LoggingConfigLogActionStatesEnum;
(function (LoggingConfigLogActionStatesEnum) {
    LoggingConfigLogActionStatesEnum["LoggableActionStateUnspecified"] = "LOGGABLE_ACTION_STATE_UNSPECIFIED";
    LoggingConfigLogActionStatesEnum["Succeeded"] = "SUCCEEDED";
    LoggingConfigLogActionStatesEnum["Failed"] = "FAILED";
})(LoggingConfigLogActionStatesEnum || (LoggingConfigLogActionStatesEnum = {}));
export var LoggingConfigLogActionsEnum;
(function (LoggingConfigLogActionsEnum) {
    LoggingConfigLogActionsEnum["LoggableActionUnspecified"] = "LOGGABLE_ACTION_UNSPECIFIED";
    LoggingConfigLogActionsEnum["Find"] = "FIND";
    LoggingConfigLogActionsEnum["Delete"] = "DELETE";
    LoggingConfigLogActionsEnum["Copy"] = "COPY";
})(LoggingConfigLogActionsEnum || (LoggingConfigLogActionsEnum = {}));
// LoggingConfig
/**
 * Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
**/
var LoggingConfig = /** @class */ (function (_super) {
    __extends(LoggingConfig, _super);
    function LoggingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableOnpremGcsTransferLogs" }),
        __metadata("design:type", Boolean)
    ], LoggingConfig.prototype, "enableOnpremGcsTransferLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logActionStates" }),
        __metadata("design:type", Array)
    ], LoggingConfig.prototype, "logActionStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logActions" }),
        __metadata("design:type", Array)
    ], LoggingConfig.prototype, "logActions", void 0);
    return LoggingConfig;
}(SpeakeasyBase));
export { LoggingConfig };
