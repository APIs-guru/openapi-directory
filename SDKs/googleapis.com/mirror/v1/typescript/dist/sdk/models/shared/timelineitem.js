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
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { Location } from "./location";
import { MenuItem } from "./menuitem";
import { NotificationConfig } from "./notificationconfig";
// TimelineItem
/**
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
**/
var TimelineItem = /** @class */ (function (_super) {
    __extends(TimelineItem, _super);
    function TimelineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment }),
        __metadata("design:type", Array)
    ], TimelineItem.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalUrl" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "canonicalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], TimelineItem.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", Contact)
    ], TimelineItem.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayTime" }),
        __metadata("design:type", Date)
    ], TimelineItem.prototype, "displayTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inReplyTo" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "inReplyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isBundleCover" }),
        __metadata("design:type", Boolean)
    ], TimelineItem.prototype, "isBundleCover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDeleted" }),
        __metadata("design:type", Boolean)
    ], TimelineItem.prototype, "isDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPinned" }),
        __metadata("design:type", Boolean)
    ], TimelineItem.prototype, "isPinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", Location)
    ], TimelineItem.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=menuItems", elemType: MenuItem }),
        __metadata("design:type", Array)
    ], TimelineItem.prototype, "menuItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification" }),
        __metadata("design:type", NotificationConfig)
    ], TimelineItem.prototype, "notification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinScore" }),
        __metadata("design:type", Number)
    ], TimelineItem.prototype, "pinScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients", elemType: Contact }),
        __metadata("design:type", Array)
    ], TimelineItem.prototype, "recipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceItemId" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "sourceItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speakableText" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "speakableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speakableType" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "speakableType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TimelineItem.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], TimelineItem.prototype, "updated", void 0);
    return TimelineItem;
}(SpeakeasyBase));
export { TimelineItem };
