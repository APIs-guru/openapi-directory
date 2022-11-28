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
export var ParentEntityFilterFileTypeEnum;
(function (ParentEntityFilterFileTypeEnum) {
    ParentEntityFilterFileTypeEnum["FileTypeUnspecified"] = "FILE_TYPE_UNSPECIFIED";
    ParentEntityFilterFileTypeEnum["FileTypeCampaign"] = "FILE_TYPE_CAMPAIGN";
    ParentEntityFilterFileTypeEnum["FileTypeMediaProduct"] = "FILE_TYPE_MEDIA_PRODUCT";
    ParentEntityFilterFileTypeEnum["FileTypeInsertionOrder"] = "FILE_TYPE_INSERTION_ORDER";
    ParentEntityFilterFileTypeEnum["FileTypeLineItem"] = "FILE_TYPE_LINE_ITEM";
    ParentEntityFilterFileTypeEnum["FileTypeAdGroup"] = "FILE_TYPE_AD_GROUP";
    ParentEntityFilterFileTypeEnum["FileTypeAd"] = "FILE_TYPE_AD";
})(ParentEntityFilterFileTypeEnum || (ParentEntityFilterFileTypeEnum = {}));
export var ParentEntityFilterFilterTypeEnum;
(function (ParentEntityFilterFilterTypeEnum) {
    ParentEntityFilterFilterTypeEnum["FilterTypeUnspecified"] = "FILTER_TYPE_UNSPECIFIED";
    ParentEntityFilterFilterTypeEnum["FilterTypeNone"] = "FILTER_TYPE_NONE";
    ParentEntityFilterFilterTypeEnum["FilterTypeAdvertiserId"] = "FILTER_TYPE_ADVERTISER_ID";
    ParentEntityFilterFilterTypeEnum["FilterTypeCampaignId"] = "FILTER_TYPE_CAMPAIGN_ID";
    ParentEntityFilterFilterTypeEnum["FilterTypeMediaProductId"] = "FILTER_TYPE_MEDIA_PRODUCT_ID";
    ParentEntityFilterFilterTypeEnum["FilterTypeInsertionOrderId"] = "FILTER_TYPE_INSERTION_ORDER_ID";
    ParentEntityFilterFilterTypeEnum["FilterTypeLineItemId"] = "FILTER_TYPE_LINE_ITEM_ID";
})(ParentEntityFilterFilterTypeEnum || (ParentEntityFilterFilterTypeEnum = {}));
// ParentEntityFilter
/**
 * A filtering option that filters on selected file types belonging to a chosen set of filter entities.
**/
var ParentEntityFilter = /** @class */ (function (_super) {
    __extends(ParentEntityFilter, _super);
    function ParentEntityFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", Array)
    ], ParentEntityFilter.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterIds" }),
        __metadata("design:type", Array)
    ], ParentEntityFilter.prototype, "filterIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterType" }),
        __metadata("design:type", String)
    ], ParentEntityFilter.prototype, "filterType", void 0);
    return ParentEntityFilter;
}(SpeakeasyBase));
export { ParentEntityFilter };
