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
export var NotificationConfigEventTypesEnum;
(function (NotificationConfigEventTypesEnum) {
    NotificationConfigEventTypesEnum["EventTypeUnspecified"] = "EVENT_TYPE_UNSPECIFIED";
    NotificationConfigEventTypesEnum["TransferOperationSuccess"] = "TRANSFER_OPERATION_SUCCESS";
    NotificationConfigEventTypesEnum["TransferOperationFailed"] = "TRANSFER_OPERATION_FAILED";
    NotificationConfigEventTypesEnum["TransferOperationAborted"] = "TRANSFER_OPERATION_ABORTED";
})(NotificationConfigEventTypesEnum || (NotificationConfigEventTypesEnum = {}));
export var NotificationConfigPayloadFormatEnum;
(function (NotificationConfigPayloadFormatEnum) {
    NotificationConfigPayloadFormatEnum["PayloadFormatUnspecified"] = "PAYLOAD_FORMAT_UNSPECIFIED";
    NotificationConfigPayloadFormatEnum["None"] = "NONE";
    NotificationConfigPayloadFormatEnum["Json"] = "JSON";
})(NotificationConfigPayloadFormatEnum || (NotificationConfigPayloadFormatEnum = {}));
// NotificationConfig
/**
 * Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.
**/
var NotificationConfig = /** @class */ (function (_super) {
    __extends(NotificationConfig, _super);
    function NotificationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTypes" }),
        __metadata("design:type", Array)
    ], NotificationConfig.prototype, "eventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payloadFormat" }),
        __metadata("design:type", String)
    ], NotificationConfig.prototype, "payloadFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], NotificationConfig.prototype, "pubsubTopic", void 0);
    return NotificationConfig;
}(SpeakeasyBase));
export { NotificationConfig };
