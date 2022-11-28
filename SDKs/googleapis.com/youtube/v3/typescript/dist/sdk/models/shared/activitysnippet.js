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
import { ThumbnailDetails } from "./thumbnaildetails";
export var ActivitySnippetTypeEnum;
(function (ActivitySnippetTypeEnum) {
    ActivitySnippetTypeEnum["TypeUnspecified"] = "typeUnspecified";
    ActivitySnippetTypeEnum["Upload"] = "upload";
    ActivitySnippetTypeEnum["Like"] = "like";
    ActivitySnippetTypeEnum["Favorite"] = "favorite";
    ActivitySnippetTypeEnum["Comment"] = "comment";
    ActivitySnippetTypeEnum["Subscription"] = "subscription";
    ActivitySnippetTypeEnum["PlaylistItem"] = "playlistItem";
    ActivitySnippetTypeEnum["Recommendation"] = "recommendation";
    ActivitySnippetTypeEnum["Bulletin"] = "bulletin";
    ActivitySnippetTypeEnum["Social"] = "social";
    ActivitySnippetTypeEnum["ChannelItem"] = "channelItem";
    ActivitySnippetTypeEnum["PromotedItem"] = "promotedItem";
})(ActivitySnippetTypeEnum || (ActivitySnippetTypeEnum = {}));
// ActivitySnippet
/**
 * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
**/
var ActivitySnippet = /** @class */ (function (_super) {
    __extends(ActivitySnippet, _super);
    function ActivitySnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelTitle" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "channelTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupId" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], ActivitySnippet.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnails" }),
        __metadata("design:type", ThumbnailDetails)
    ], ActivitySnippet.prototype, "thumbnails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivitySnippet.prototype, "type", void 0);
    return ActivitySnippet;
}(SpeakeasyBase));
export { ActivitySnippet };
