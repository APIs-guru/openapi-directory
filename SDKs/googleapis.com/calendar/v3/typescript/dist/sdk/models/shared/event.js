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
import { EventAttachment } from "./eventattachment";
import { EventAttendee } from "./eventattendee";
import { ConferenceData } from "./conferencedata";
import { EventDateTime } from "./eventdatetime";
import { EventReminder } from "./eventreminder";
// EventCreator
/**
 * The creator of the event. Read-only.
**/
var EventCreator = /** @class */ (function (_super) {
    __extends(EventCreator, _super);
    function EventCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], EventCreator.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EventCreator.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EventCreator.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Boolean)
    ], EventCreator.prototype, "self", void 0);
    return EventCreator;
}(SpeakeasyBase));
export { EventCreator };
// EventExtendedProperties
/**
 * Extended properties of the event.
**/
var EventExtendedProperties = /** @class */ (function (_super) {
    __extends(EventExtendedProperties, _super);
    function EventExtendedProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Map)
    ], EventExtendedProperties.prototype, "private", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shared" }),
        __metadata("design:type", Map)
    ], EventExtendedProperties.prototype, "shared", void 0);
    return EventExtendedProperties;
}(SpeakeasyBase));
export { EventExtendedProperties };
// EventGadget
/**
 * A gadget that extends this event. Gadgets are deprecated; this structure is instead only used for returning birthday calendar metadata.
**/
var EventGadget = /** @class */ (function (_super) {
    __extends(EventGadget, _super);
    function EventGadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], EventGadget.prototype, "display", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], EventGadget.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconLink" }),
        __metadata("design:type", String)
    ], EventGadget.prototype, "iconLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], EventGadget.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferences" }),
        __metadata("design:type", Map)
    ], EventGadget.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EventGadget.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EventGadget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], EventGadget.prototype, "width", void 0);
    return EventGadget;
}(SpeakeasyBase));
export { EventGadget };
// EventOrganizer
/**
 * The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.
**/
var EventOrganizer = /** @class */ (function (_super) {
    __extends(EventOrganizer, _super);
    function EventOrganizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], EventOrganizer.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EventOrganizer.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EventOrganizer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", Boolean)
    ], EventOrganizer.prototype, "self", void 0);
    return EventOrganizer;
}(SpeakeasyBase));
export { EventOrganizer };
// EventReminders
/**
 * Information about the event's reminders for the authenticated user.
**/
var EventReminders = /** @class */ (function (_super) {
    __extends(EventReminders, _super);
    function EventReminders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrides", elemType: EventReminder }),
        __metadata("design:type", Array)
    ], EventReminders.prototype, "overrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDefault" }),
        __metadata("design:type", Boolean)
    ], EventReminders.prototype, "useDefault", void 0);
    return EventReminders;
}(SpeakeasyBase));
export { EventReminders };
// EventSource
/**
 * Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme. Can only be seen or modified by the creator of the event.
**/
var EventSource = /** @class */ (function (_super) {
    __extends(EventSource, _super);
    function EventSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], EventSource.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EventSource.prototype, "url", void 0);
    return EventSource;
}(SpeakeasyBase));
export { EventSource };
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anyoneCanAddSelf" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "anyoneCanAddSelf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: EventAttachment }),
        __metadata("design:type", Array)
    ], Event.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attendees", elemType: EventAttendee }),
        __metadata("design:type", Array)
    ], Event.prototype, "attendees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attendeesOmitted" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "attendeesOmitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], Event.prototype, "colorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conferenceData" }),
        __metadata("design:type", ConferenceData)
    ], Event.prototype, "conferenceData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Event.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", EventCreator)
    ], Event.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Event.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", EventDateTime)
    ], Event.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTimeUnspecified" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "endTimeUnspecified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Event.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], Event.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extendedProperties" }),
        __metadata("design:type", EventExtendedProperties)
    ], Event.prototype, "extendedProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gadget" }),
        __metadata("design:type", EventGadget)
    ], Event.prototype, "gadget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestsCanInviteOthers" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "guestsCanInviteOthers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestsCanModify" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "guestsCanModify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestsCanSeeOtherGuests" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "guestsCanSeeOtherGuests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hangoutLink" }),
        __metadata("design:type", String)
    ], Event.prototype, "hangoutLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlLink" }),
        __metadata("design:type", String)
    ], Event.prototype, "htmlLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iCalUID" }),
        __metadata("design:type", String)
    ], Event.prototype, "iCalUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Event.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Event.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Event.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizer" }),
        __metadata("design:type", EventOrganizer)
    ], Event.prototype, "organizer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalStartTime" }),
        __metadata("design:type", EventDateTime)
    ], Event.prototype, "originalStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateCopy" }),
        __metadata("design:type", Boolean)
    ], Event.prototype, "privateCopy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurrence" }),
        __metadata("design:type", Array)
    ], Event.prototype, "recurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringEventId" }),
        __metadata("design:type", String)
    ], Event.prototype, "recurringEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reminders" }),
        __metadata("design:type", EventReminders)
    ], Event.prototype, "reminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], Event.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", EventSource)
    ], Event.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", EventDateTime)
    ], Event.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Event.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], Event.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transparency" }),
        __metadata("design:type", String)
    ], Event.prototype, "transparency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Event.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], Event.prototype, "visibility", void 0);
    return Event;
}(SpeakeasyBase));
export { Event };
