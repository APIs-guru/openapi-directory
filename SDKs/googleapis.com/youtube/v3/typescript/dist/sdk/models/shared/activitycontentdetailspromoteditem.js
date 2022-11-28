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
export var ActivityContentDetailsPromotedItemCtaTypeEnum;
(function (ActivityContentDetailsPromotedItemCtaTypeEnum) {
    ActivityContentDetailsPromotedItemCtaTypeEnum["CtaTypeUnspecified"] = "ctaTypeUnspecified";
    ActivityContentDetailsPromotedItemCtaTypeEnum["VisitAdvertiserSite"] = "visitAdvertiserSite";
})(ActivityContentDetailsPromotedItemCtaTypeEnum || (ActivityContentDetailsPromotedItemCtaTypeEnum = {}));
// ActivityContentDetailsPromotedItem
/**
 * Details about a resource which is being promoted.
**/
var ActivityContentDetailsPromotedItem = /** @class */ (function (_super) {
    __extends(ActivityContentDetailsPromotedItem, _super);
    function ActivityContentDetailsPromotedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adTag" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "adTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "clickTrackingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeViewUrl" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "creativeViewUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ctaType" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "ctaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customCtaButtonText" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "customCtaButtonText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descriptionText" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "descriptionText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationUrl" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "destinationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forecastingUrl" }),
        __metadata("design:type", Array)
    ], ActivityContentDetailsPromotedItem.prototype, "forecastingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionUrl" }),
        __metadata("design:type", Array)
    ], ActivityContentDetailsPromotedItem.prototype, "impressionUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoId" }),
        __metadata("design:type", String)
    ], ActivityContentDetailsPromotedItem.prototype, "videoId", void 0);
    return ActivityContentDetailsPromotedItem;
}(SpeakeasyBase));
export { ActivityContentDetailsPromotedItem };
