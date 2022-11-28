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
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], Subscription.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_hold_time_h" }),
        __metadata("design:type", Number)
    ], Subscription.prototype, "databaseHoldTimeH", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "eventsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=populate_events" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "populateEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_delivery_last_failure" }),
        __metadata("design:type", Map)
    ], Subscription.prototype, "targetDeliveryLastFailure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_delivery_status" }),
        __metadata("design:type", Map)
    ], Subscription.prototype, "targetDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_retry" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "targetRetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "targetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "timeUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_filter" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "topicFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verify_target_certificate" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "verifyTargetCertificate", void 0);
    return Subscription;
}(SpeakeasyBase));
export { Subscription };
var SubscriptionInput = /** @class */ (function (_super) {
    __extends(SubscriptionInput, _super);
    function SubscriptionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Object)
    ], SubscriptionInput.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_hold_time_h" }),
        __metadata("design:type", Number)
    ], SubscriptionInput.prototype, "databaseHoldTimeH", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SubscriptionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=populate_events" }),
        __metadata("design:type", Boolean)
    ], SubscriptionInput.prototype, "populateEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_retry" }),
        __metadata("design:type", Boolean)
    ], SubscriptionInput.prototype, "targetRetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_url" }),
        __metadata("design:type", String)
    ], SubscriptionInput.prototype, "targetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic_filter" }),
        __metadata("design:type", String)
    ], SubscriptionInput.prototype, "topicFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verify_target_certificate" }),
        __metadata("design:type", Boolean)
    ], SubscriptionInput.prototype, "verifyTargetCertificate", void 0);
    return SubscriptionInput;
}(SpeakeasyBase));
export { SubscriptionInput };
