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
// AuditAdvertiserResponse
/**
 * Response message for AdvertiserService.AuditAdvertiser.
**/
var AuditAdvertiserResponse = /** @class */ (function (_super) {
    __extends(AuditAdvertiserResponse, _super);
    function AuditAdvertiserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adGroupCriteriaCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "adGroupCriteriaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignCriteriaCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "campaignCriteriaCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelsCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "channelsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativeKeywordListsCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "negativeKeywordListsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negativelyTargetedChannelsCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "negativelyTargetedChannelsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedCampaignsCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "usedCampaignsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedInsertionOrdersCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "usedInsertionOrdersCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedLineItemsCount" }),
        __metadata("design:type", String)
    ], AuditAdvertiserResponse.prototype, "usedLineItemsCount", void 0);
    return AuditAdvertiserResponse;
}(SpeakeasyBase));
export { AuditAdvertiserResponse };
