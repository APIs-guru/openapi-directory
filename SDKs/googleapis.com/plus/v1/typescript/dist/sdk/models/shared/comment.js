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
// CommentActorClientSpecificActorInfoYoutubeActorInfo
/**
 * Actor info specific to YouTube clients.
**/
var CommentActorClientSpecificActorInfoYoutubeActorInfo = /** @class */ (function (_super) {
    __extends(CommentActorClientSpecificActorInfoYoutubeActorInfo, _super);
    function CommentActorClientSpecificActorInfoYoutubeActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], CommentActorClientSpecificActorInfoYoutubeActorInfo.prototype, "channelId", void 0);
    return CommentActorClientSpecificActorInfoYoutubeActorInfo;
}(SpeakeasyBase));
export { CommentActorClientSpecificActorInfoYoutubeActorInfo };
// CommentActorClientSpecificActorInfo
/**
 * Actor info specific to particular clients.
**/
var CommentActorClientSpecificActorInfo = /** @class */ (function (_super) {
    __extends(CommentActorClientSpecificActorInfo, _super);
    function CommentActorClientSpecificActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeActorInfo" }),
        __metadata("design:type", CommentActorClientSpecificActorInfoYoutubeActorInfo)
    ], CommentActorClientSpecificActorInfo.prototype, "youtubeActorInfo", void 0);
    return CommentActorClientSpecificActorInfo;
}(SpeakeasyBase));
export { CommentActorClientSpecificActorInfo };
// CommentActorImage
/**
 * The image representation of this actor.
**/
var CommentActorImage = /** @class */ (function (_super) {
    __extends(CommentActorImage, _super);
    function CommentActorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommentActorImage.prototype, "url", void 0);
    return CommentActorImage;
}(SpeakeasyBase));
export { CommentActorImage };
// CommentActorVerification
/**
 * Verification status of actor.
**/
var CommentActorVerification = /** @class */ (function (_super) {
    __extends(CommentActorVerification, _super);
    function CommentActorVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adHocVerified" }),
        __metadata("design:type", String)
    ], CommentActorVerification.prototype, "adHocVerified", void 0);
    return CommentActorVerification;
}(SpeakeasyBase));
export { CommentActorVerification };
// CommentActor
/**
 * The person who posted this comment.
**/
var CommentActor = /** @class */ (function (_super) {
    __extends(CommentActor, _super);
    function CommentActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSpecificActorInfo" }),
        __metadata("design:type", CommentActorClientSpecificActorInfo)
    ], CommentActor.prototype, "clientSpecificActorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CommentActor.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentActor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", CommentActorImage)
    ], CommentActor.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommentActor.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verification" }),
        __metadata("design:type", CommentActorVerification)
    ], CommentActor.prototype, "verification", void 0);
    return CommentActor;
}(SpeakeasyBase));
export { CommentActor };
var CommentInReplyTo = /** @class */ (function (_super) {
    __extends(CommentInReplyTo, _super);
    function CommentInReplyTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CommentInReplyTo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommentInReplyTo.prototype, "url", void 0);
    return CommentInReplyTo;
}(SpeakeasyBase));
export { CommentInReplyTo };
// CommentObject
/**
 * The object of this comment.
**/
var CommentObject = /** @class */ (function (_super) {
    __extends(CommentObject, _super);
    function CommentObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], CommentObject.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], CommentObject.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalContent" }),
        __metadata("design:type", String)
    ], CommentObject.prototype, "originalContent", void 0);
    return CommentObject;
}(SpeakeasyBase));
export { CommentObject };
// CommentPlusoners
/**
 * People who +1'd this comment.
**/
var CommentPlusoners = /** @class */ (function (_super) {
    __extends(CommentPlusoners, _super);
    function CommentPlusoners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], CommentPlusoners.prototype, "totalItems", void 0);
    return CommentPlusoners;
}(SpeakeasyBase));
export { CommentPlusoners };
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actor" }),
        __metadata("design:type", CommentActor)
    ], Comment.prototype, "actor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Comment.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inReplyTo", elemType: CommentInReplyTo }),
        __metadata("design:type", Array)
    ], Comment.prototype, "inReplyTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Comment.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", CommentObject)
    ], Comment.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plusoners" }),
        __metadata("design:type", CommentPlusoners)
    ], Comment.prototype, "plusoners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published" }),
        __metadata("design:type", Date)
    ], Comment.prototype, "published", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Comment.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Comment.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verb" }),
        __metadata("design:type", String)
    ], Comment.prototype, "verb", void 0);
    return Comment;
}(SpeakeasyBase));
export { Comment };
