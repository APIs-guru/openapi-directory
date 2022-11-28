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
import { DimensionValue } from "./dimensionvalue";
export var EventTagSiteFilterTypeEnum;
(function (EventTagSiteFilterTypeEnum) {
    EventTagSiteFilterTypeEnum["Whitelist"] = "WHITELIST";
    EventTagSiteFilterTypeEnum["Blacklist"] = "BLACKLIST";
})(EventTagSiteFilterTypeEnum || (EventTagSiteFilterTypeEnum = {}));
export var EventTagStatusEnum;
(function (EventTagStatusEnum) {
    EventTagStatusEnum["Enabled"] = "ENABLED";
    EventTagStatusEnum["Disabled"] = "DISABLED";
})(EventTagStatusEnum || (EventTagStatusEnum = {}));
export var EventTagTypeEnum;
(function (EventTagTypeEnum) {
    EventTagTypeEnum["ImpressionImageEventTag"] = "IMPRESSION_IMAGE_EVENT_TAG";
    EventTagTypeEnum["ImpressionJavascriptEventTag"] = "IMPRESSION_JAVASCRIPT_EVENT_TAG";
    EventTagTypeEnum["ClickThroughEventTag"] = "CLICK_THROUGH_EVENT_TAG";
})(EventTagTypeEnum || (EventTagTypeEnum = {}));
// EventTag
/**
 * Contains properties of an event tag.
**/
var EventTag = /** @class */ (function (_super) {
    __extends(EventTag, _super);
    function EventTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], EventTag.prototype, "advertiserIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], EventTag.prototype, "campaignIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledByDefault" }),
        __metadata("design:type", Boolean)
    ], EventTag.prototype, "enabledByDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeFromAdxRequests" }),
        __metadata("design:type", Boolean)
    ], EventTag.prototype, "excludeFromAdxRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteFilterType" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "siteFilterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteIds" }),
        __metadata("design:type", Array)
    ], EventTag.prototype, "siteIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], EventTag.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EventTag.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlEscapeLevels" }),
        __metadata("design:type", Number)
    ], EventTag.prototype, "urlEscapeLevels", void 0);
    return EventTag;
}(SpeakeasyBase));
export { EventTag };
