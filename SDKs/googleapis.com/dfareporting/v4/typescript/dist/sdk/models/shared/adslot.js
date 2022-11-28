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
export var AdSlotCompatibilityEnum;
(function (AdSlotCompatibilityEnum) {
    AdSlotCompatibilityEnum["Display"] = "DISPLAY";
    AdSlotCompatibilityEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    AdSlotCompatibilityEnum["App"] = "APP";
    AdSlotCompatibilityEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    AdSlotCompatibilityEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    AdSlotCompatibilityEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(AdSlotCompatibilityEnum || (AdSlotCompatibilityEnum = {}));
export var AdSlotPaymentSourceTypeEnum;
(function (AdSlotPaymentSourceTypeEnum) {
    AdSlotPaymentSourceTypeEnum["PlanningPaymentSourceTypeAgencyPaid"] = "PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID";
    AdSlotPaymentSourceTypeEnum["PlanningPaymentSourceTypePublisherPaid"] = "PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID";
})(AdSlotPaymentSourceTypeEnum || (AdSlotPaymentSourceTypeEnum = {}));
// AdSlot
/**
 * Ad Slot
**/
var AdSlot = /** @class */ (function (_super) {
    __extends(AdSlot, _super);
    function AdSlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedPlacementId" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "linkedPlacementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentSourceType" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "paymentSourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], AdSlot.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", String)
    ], AdSlot.prototype, "width", void 0);
    return AdSlot;
}(SpeakeasyBase));
export { AdSlot };
