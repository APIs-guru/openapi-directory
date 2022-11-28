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
import { WatchTarget } from "./watchtarget";
export var WatchErrorTypeEnum;
(function (WatchErrorTypeEnum) {
    WatchErrorTypeEnum["ErrorTypeUnspecified"] = "ERROR_TYPE_UNSPECIFIED";
    WatchErrorTypeEnum["ProjectNotAuthorized"] = "PROJECT_NOT_AUTHORIZED";
    WatchErrorTypeEnum["NoUserAccess"] = "NO_USER_ACCESS";
    WatchErrorTypeEnum["OtherErrors"] = "OTHER_ERRORS";
})(WatchErrorTypeEnum || (WatchErrorTypeEnum = {}));
export var WatchEventTypeEnum;
(function (WatchEventTypeEnum) {
    WatchEventTypeEnum["EventTypeUnspecified"] = "EVENT_TYPE_UNSPECIFIED";
    WatchEventTypeEnum["Schema"] = "SCHEMA";
    WatchEventTypeEnum["Responses"] = "RESPONSES";
})(WatchEventTypeEnum || (WatchEventTypeEnum = {}));
export var WatchStateEnum;
(function (WatchStateEnum) {
    WatchStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    WatchStateEnum["Active"] = "ACTIVE";
    WatchStateEnum["Suspended"] = "SUSPENDED";
})(WatchStateEnum || (WatchStateEnum = {}));
// WatchInput
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
**/
var WatchInput = /** @class */ (function (_super) {
    __extends(WatchInput, _super);
    function WatchInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], WatchInput.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", WatchTarget)
    ], WatchInput.prototype, "target", void 0);
    return WatchInput;
}(SpeakeasyBase));
export { WatchInput };
// Watch
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
**/
var Watch = /** @class */ (function (_super) {
    __extends(Watch, _super);
    function Watch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Watch.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorType" }),
        __metadata("design:type", String)
    ], Watch.prototype, "errorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], Watch.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Watch.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Watch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Watch.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", WatchTarget)
    ], Watch.prototype, "target", void 0);
    return Watch;
}(SpeakeasyBase));
export { Watch };
