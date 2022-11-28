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
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { PopupWindowProperties } from "./popupwindowproperties";
export var CreativeCustomEventAdvertiserCustomEventTypeEnum;
(function (CreativeCustomEventAdvertiserCustomEventTypeEnum) {
    CreativeCustomEventAdvertiserCustomEventTypeEnum["AdvertiserEventTimer"] = "ADVERTISER_EVENT_TIMER";
    CreativeCustomEventAdvertiserCustomEventTypeEnum["AdvertiserEventExit"] = "ADVERTISER_EVENT_EXIT";
    CreativeCustomEventAdvertiserCustomEventTypeEnum["AdvertiserEventCounter"] = "ADVERTISER_EVENT_COUNTER";
})(CreativeCustomEventAdvertiserCustomEventTypeEnum || (CreativeCustomEventAdvertiserCustomEventTypeEnum = {}));
export var CreativeCustomEventArtworkTypeEnum;
(function (CreativeCustomEventArtworkTypeEnum) {
    CreativeCustomEventArtworkTypeEnum["ArtworkTypeFlash"] = "ARTWORK_TYPE_FLASH";
    CreativeCustomEventArtworkTypeEnum["ArtworkTypeHtml5"] = "ARTWORK_TYPE_HTML5";
    CreativeCustomEventArtworkTypeEnum["ArtworkTypeMixed"] = "ARTWORK_TYPE_MIXED";
    CreativeCustomEventArtworkTypeEnum["ArtworkTypeImage"] = "ARTWORK_TYPE_IMAGE";
})(CreativeCustomEventArtworkTypeEnum || (CreativeCustomEventArtworkTypeEnum = {}));
export var CreativeCustomEventTargetTypeEnum;
(function (CreativeCustomEventTargetTypeEnum) {
    CreativeCustomEventTargetTypeEnum["TargetBlank"] = "TARGET_BLANK";
    CreativeCustomEventTargetTypeEnum["TargetTop"] = "TARGET_TOP";
    CreativeCustomEventTargetTypeEnum["TargetSelf"] = "TARGET_SELF";
    CreativeCustomEventTargetTypeEnum["TargetParent"] = "TARGET_PARENT";
    CreativeCustomEventTargetTypeEnum["TargetPopup"] = "TARGET_POPUP";
})(CreativeCustomEventTargetTypeEnum || (CreativeCustomEventTargetTypeEnum = {}));
// CreativeCustomEvent
/**
 * Creative Custom Event.
**/
var CreativeCustomEvent = /** @class */ (function (_super) {
    __extends(CreativeCustomEvent, _super);
    function CreativeCustomEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserCustomEventId" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "advertiserCustomEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserCustomEventName" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "advertiserCustomEventName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserCustomEventType" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "advertiserCustomEventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artworkLabel" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "artworkLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artworkType" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "artworkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitClickThroughUrl" }),
        __metadata("design:type", CreativeClickThroughUrl)
    ], CreativeCustomEvent.prototype, "exitClickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=popupWindowProperties" }),
        __metadata("design:type", PopupWindowProperties)
    ], CreativeCustomEvent.prototype, "popupWindowProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoReportingId" }),
        __metadata("design:type", String)
    ], CreativeCustomEvent.prototype, "videoReportingId", void 0);
    return CreativeCustomEvent;
}(SpeakeasyBase));
export { CreativeCustomEvent };
