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
import { AppEngineHttpQueue } from "./appenginehttpqueue";
import { RateLimits } from "./ratelimits";
import { RetryConfig } from "./retryconfig";
import { StackdriverLoggingConfig } from "./stackdriverloggingconfig";
import { QueueStateEnum } from "./queue";
import { QueueStats } from "./queuestats";
import { QueueTypeEnum } from "./queue";
// Queue1
/**
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
var Queue1 = /** @class */ (function (_super) {
    __extends(Queue1, _super);
    function Queue1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineHttpQueue" }),
        __metadata("design:type", AppEngineHttpQueue)
    ], Queue1.prototype, "appEngineHttpQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purgeTime" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "purgeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateLimits" }),
        __metadata("design:type", RateLimits)
    ], Queue1.prototype, "rateLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retryConfig" }),
        __metadata("design:type", RetryConfig)
    ], Queue1.prototype, "retryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackdriverLoggingConfig" }),
        __metadata("design:type", StackdriverLoggingConfig)
    ], Queue1.prototype, "stackdriverLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", QueueStats)
    ], Queue1.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskTtl" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "taskTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tombstoneTtl" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "tombstoneTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Queue1.prototype, "type", void 0);
    return Queue1;
}(SpeakeasyBase));
export { Queue1 };
