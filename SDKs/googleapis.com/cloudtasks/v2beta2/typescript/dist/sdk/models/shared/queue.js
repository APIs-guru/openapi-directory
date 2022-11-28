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
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
export var QueueStateEnum;
(function (QueueStateEnum) {
    QueueStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    QueueStateEnum["Running"] = "RUNNING";
    QueueStateEnum["Paused"] = "PAUSED";
    QueueStateEnum["Disabled"] = "DISABLED";
})(QueueStateEnum || (QueueStateEnum = {}));
// Queue
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
**/
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineHttpTarget" }),
        __metadata("design:type", AppEngineHttpTarget)
    ], Queue.prototype, "appEngineHttpTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpTarget" }),
        __metadata("design:type", HttpTarget)
    ], Queue.prototype, "httpTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Queue.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullTarget" }),
        __metadata("design:type", Map)
    ], Queue.prototype, "pullTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purgeTime" }),
        __metadata("design:type", String)
    ], Queue.prototype, "purgeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateLimits" }),
        __metadata("design:type", RateLimits)
    ], Queue.prototype, "rateLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryConfig" }),
        __metadata("design:type", RetryConfig)
    ], Queue.prototype, "retryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Queue.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskTtl" }),
        __metadata("design:type", String)
    ], Queue.prototype, "taskTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tombstoneTtl" }),
        __metadata("design:type", String)
    ], Queue.prototype, "tombstoneTtl", void 0);
    return Queue;
}(SpeakeasyBase));
export { Queue };
