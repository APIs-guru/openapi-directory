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
import { CallToAction } from "./calltoaction";
import { LocalPostEvent } from "./localpostevent";
import { MediaItem } from "./mediaitem";
import { LocalPostOffer } from "./localpostoffer";
export var LocalPostAlertTypeEnum;
(function (LocalPostAlertTypeEnum) {
    LocalPostAlertTypeEnum["AlertTypeUnspecified"] = "ALERT_TYPE_UNSPECIFIED";
    LocalPostAlertTypeEnum["Covid19"] = "COVID_19";
})(LocalPostAlertTypeEnum || (LocalPostAlertTypeEnum = {}));
export var LocalPostStateEnum;
(function (LocalPostStateEnum) {
    LocalPostStateEnum["LocalPostStateUnspecified"] = "LOCAL_POST_STATE_UNSPECIFIED";
    LocalPostStateEnum["Rejected"] = "REJECTED";
    LocalPostStateEnum["Live"] = "LIVE";
    LocalPostStateEnum["Processing"] = "PROCESSING";
})(LocalPostStateEnum || (LocalPostStateEnum = {}));
export var LocalPostTopicTypeEnum;
(function (LocalPostTopicTypeEnum) {
    LocalPostTopicTypeEnum["LocalPostTopicTypeUnspecified"] = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED";
    LocalPostTopicTypeEnum["Standard"] = "STANDARD";
    LocalPostTopicTypeEnum["Event"] = "EVENT";
    LocalPostTopicTypeEnum["Offer"] = "OFFER";
    LocalPostTopicTypeEnum["Alert"] = "ALERT";
})(LocalPostTopicTypeEnum || (LocalPostTopicTypeEnum = {}));
// LocalPost
/**
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
**/
var LocalPost = /** @class */ (function (_super) {
    __extends(LocalPost, _super);
    function LocalPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertType" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "alertType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callToAction" }),
        __metadata("design:type", CallToAction)
    ], LocalPost.prototype, "callToAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", LocalPostEvent)
    ], LocalPost.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=media", elemType: MediaItem }),
        __metadata("design:type", Array)
    ], LocalPost.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offer" }),
        __metadata("design:type", LocalPostOffer)
    ], LocalPost.prototype, "offer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchUrl" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "searchUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topicType" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "topicType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LocalPost.prototype, "updateTime", void 0);
    return LocalPost;
}(SpeakeasyBase));
export { LocalPost };
