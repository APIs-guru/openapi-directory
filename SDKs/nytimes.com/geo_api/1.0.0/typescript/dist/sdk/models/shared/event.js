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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Event.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=critic_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "criticName", void 0);
    __decorate([
        Metadata({ data: "json, name=event_detail_url" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventDetailUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=event_id" }),
        __metadata("design:type", Number)
    ], Event.prototype, "eventId", void 0);
    __decorate([
        Metadata({ data: "json, name=event_name" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventName", void 0);
    __decorate([
        Metadata({ data: "json, name=event_schedule_id" }),
        __metadata("design:type", Number)
    ], Event.prototype, "eventScheduleId", void 0);
    __decorate([
        Metadata({ data: "json, name=festival" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "festival", void 0);
    __decorate([
        Metadata({ data: "json, name=film_rating" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "filmRating", void 0);
    __decorate([
        Metadata({ data: "json, name=free" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "free", void 0);
    __decorate([
        Metadata({ data: "json, name=kid_friendly" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "kidFriendly", void 0);
    __decorate([
        Metadata({ data: "json, name=last_chance" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "lastChance", void 0);
    __decorate([
        Metadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], Event.prototype, "lastModified", void 0);
    __decorate([
        Metadata({ data: "json, name=long_running_show" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "longRunningShow", void 0);
    __decorate([
        Metadata({ data: "json, name=previews_and_openings" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "previewsAndOpenings", void 0);
    __decorate([
        Metadata({ data: "json, name=recur_days" }),
        __metadata("design:type", Array)
    ], Event.prototype, "recurDays", void 0);
    __decorate([
        Metadata({ data: "json, name=recurring_start_date" }),
        __metadata("design:type", String)
    ], Event.prototype, "recurringStartDate", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Event.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=times_pick" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "timesPick", void 0);
    __decorate([
        Metadata({ data: "json, name=web_description" }),
        __metadata("design:type", String)
    ], Event.prototype, "webDescription", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
