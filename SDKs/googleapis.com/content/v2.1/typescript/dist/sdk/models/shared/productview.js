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
import { Date } from "./date";
import { ProductViewItemIssue } from "./productviewitemissue";
export var ProductViewAggregatedDestinationStatusEnum;
(function (ProductViewAggregatedDestinationStatusEnum) {
    ProductViewAggregatedDestinationStatusEnum["AggregatedStatusUnspecified"] = "AGGREGATED_STATUS_UNSPECIFIED";
    ProductViewAggregatedDestinationStatusEnum["NotEligibleOrDisapproved"] = "NOT_ELIGIBLE_OR_DISAPPROVED";
    ProductViewAggregatedDestinationStatusEnum["Pending"] = "PENDING";
    ProductViewAggregatedDestinationStatusEnum["EligibleLimited"] = "ELIGIBLE_LIMITED";
    ProductViewAggregatedDestinationStatusEnum["Eligible"] = "ELIGIBLE";
})(ProductViewAggregatedDestinationStatusEnum || (ProductViewAggregatedDestinationStatusEnum = {}));
export var ProductViewChannelEnum;
(function (ProductViewChannelEnum) {
    ProductViewChannelEnum["ChannelUnspecified"] = "CHANNEL_UNSPECIFIED";
    ProductViewChannelEnum["Local"] = "LOCAL";
    ProductViewChannelEnum["Online"] = "ONLINE";
})(ProductViewChannelEnum || (ProductViewChannelEnum = {}));
// ProductView
/**
 * Product fields. Values are only set for fields requested explicitly in the request's search query. Available only to selected merchants. Submit the [interest form](https://forms.gle/7Uy8htzAN8oNokz9A) to request access.
**/
var ProductView = /** @class */ (function (_super) {
    __extends(ProductView, _super);
    function ProductView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregatedDestinationStatus" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "aggregatedDestinationStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], ProductView.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", Array)
    ], ProductView.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemIssues", elemType: ProductViewItemIssue }),
        __metadata("design:type", Array)
    ], ProductView.prototype, "itemIssues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceMicros" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "priceMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingLabel" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "shippingLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProductView.prototype, "title", void 0);
    return ProductView;
}(SpeakeasyBase));
export { ProductView };
