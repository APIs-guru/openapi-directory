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
import { EventTopicActionEnum } from "./eventtopicactionenum";
import { EventTopicResourceTypeEnum } from "./eventtopicresourcetypeenum";
var EventTopic = /** @class */ (function (_super) {
    __extends(EventTopic, _super);
    function EventTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], EventTopic.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arguments" }),
        __metadata("design:type", Object)
    ], EventTopic.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], EventTopic.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], EventTopic.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_url" }),
        __metadata("design:type", String)
    ], EventTopic.prototype, "resourceUrl", void 0);
    return EventTopic;
}(SpeakeasyBase));
export { EventTopic };
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Object)
    ], Event.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], Event.prototype, "timeCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_event" }),
        __metadata("design:type", String)
    ], Event.prototype, "timeEvent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_expire" }),
        __metadata("design:type", String)
    ], Event.prototype, "timeExpire", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", EventTopic)
    ], Event.prototype, "topic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Event.prototype, "url", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
