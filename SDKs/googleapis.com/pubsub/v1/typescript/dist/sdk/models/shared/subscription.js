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
import { BigQueryConfig } from "./bigqueryconfig";
import { DeadLetterPolicy } from "./deadletterpolicy";
import { ExpirationPolicy } from "./expirationpolicy";
import { PushConfig } from "./pushconfig";
import { RetryPolicy } from "./retrypolicy";
export var SubscriptionStateEnum;
(function (SubscriptionStateEnum) {
    SubscriptionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    SubscriptionStateEnum["Active"] = "ACTIVE";
    SubscriptionStateEnum["ResourceError"] = "RESOURCE_ERROR";
})(SubscriptionStateEnum || (SubscriptionStateEnum = {}));
// Subscription
/**
 * A subscription resource. If none of `push_config` or `bigquery_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
**/
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ackDeadlineSeconds" }),
        __metadata("design:type", Number)
    ], Subscription.prototype, "ackDeadlineSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryConfig" }),
        __metadata("design:type", BigQueryConfig)
    ], Subscription.prototype, "bigqueryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deadLetterPolicy" }),
        __metadata("design:type", DeadLetterPolicy)
    ], Subscription.prototype, "deadLetterPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detached" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "detached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableExactlyOnceDelivery" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "enableExactlyOnceDelivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableMessageOrdering" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "enableMessageOrdering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationPolicy" }),
        __metadata("design:type", ExpirationPolicy)
    ], Subscription.prototype, "expirationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Subscription.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageRetentionDuration" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "messageRetentionDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushConfig" }),
        __metadata("design:type", PushConfig)
    ], Subscription.prototype, "pushConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainAckedMessages" }),
        __metadata("design:type", Boolean)
    ], Subscription.prototype, "retainAckedMessages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryPolicy" }),
        __metadata("design:type", RetryPolicy)
    ], Subscription.prototype, "retryPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "topic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicMessageRetentionDuration" }),
        __metadata("design:type", String)
    ], Subscription.prototype, "topicMessageRetentionDuration", void 0);
    return Subscription;
}(SpeakeasyBase));
export { Subscription };
