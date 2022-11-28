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
import { EventFilter } from "./eventfilter";
export var EventTriggerRetryPolicyEnum;
(function (EventTriggerRetryPolicyEnum) {
    EventTriggerRetryPolicyEnum["RetryPolicyUnspecified"] = "RETRY_POLICY_UNSPECIFIED";
    EventTriggerRetryPolicyEnum["RetryPolicyDoNotRetry"] = "RETRY_POLICY_DO_NOT_RETRY";
    EventTriggerRetryPolicyEnum["RetryPolicyRetry"] = "RETRY_POLICY_RETRY";
})(EventTriggerRetryPolicyEnum || (EventTriggerRetryPolicyEnum = {}));
// EventTriggerInput
/**
 * Describes EventTrigger, used to request events to be sent from another service.
**/
var EventTriggerInput = /** @class */ (function (_super) {
    __extends(EventTriggerInput, _super);
    function EventTriggerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter }),
        __metadata("design:type", Array)
    ], EventTriggerInput.prototype, "eventFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "pubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryPolicy" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "retryPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerRegion" }),
        __metadata("design:type", String)
    ], EventTriggerInput.prototype, "triggerRegion", void 0);
    return EventTriggerInput;
}(SpeakeasyBase));
export { EventTriggerInput };
// EventTrigger
/**
 * Describes EventTrigger, used to request events to be sent from another service.
**/
var EventTrigger = /** @class */ (function (_super) {
    __extends(EventTrigger, _super);
    function EventTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter }),
        __metadata("design:type", Array)
    ], EventTrigger.prototype, "eventFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "pubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryPolicy" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "retryPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "trigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerRegion" }),
        __metadata("design:type", String)
    ], EventTrigger.prototype, "triggerRegion", void 0);
    return EventTrigger;
}(SpeakeasyBase));
export { EventTrigger };
