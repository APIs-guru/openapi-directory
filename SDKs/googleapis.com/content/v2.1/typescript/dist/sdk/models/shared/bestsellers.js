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
export var BestSellersPreviousRelativeDemandEnum;
(function (BestSellersPreviousRelativeDemandEnum) {
    BestSellersPreviousRelativeDemandEnum["RelativeDemandUnspecified"] = "RELATIVE_DEMAND_UNSPECIFIED";
    BestSellersPreviousRelativeDemandEnum["VeryLow"] = "VERY_LOW";
    BestSellersPreviousRelativeDemandEnum["Low"] = "LOW";
    BestSellersPreviousRelativeDemandEnum["Medium"] = "MEDIUM";
    BestSellersPreviousRelativeDemandEnum["High"] = "HIGH";
    BestSellersPreviousRelativeDemandEnum["VeryHigh"] = "VERY_HIGH";
})(BestSellersPreviousRelativeDemandEnum || (BestSellersPreviousRelativeDemandEnum = {}));
export var BestSellersRelativeDemandEnum;
(function (BestSellersRelativeDemandEnum) {
    BestSellersRelativeDemandEnum["RelativeDemandUnspecified"] = "RELATIVE_DEMAND_UNSPECIFIED";
    BestSellersRelativeDemandEnum["VeryLow"] = "VERY_LOW";
    BestSellersRelativeDemandEnum["Low"] = "LOW";
    BestSellersRelativeDemandEnum["Medium"] = "MEDIUM";
    BestSellersRelativeDemandEnum["High"] = "HIGH";
    BestSellersRelativeDemandEnum["VeryHigh"] = "VERY_HIGH";
})(BestSellersRelativeDemandEnum || (BestSellersRelativeDemandEnum = {}));
export var BestSellersRelativeDemandChangeEnum;
(function (BestSellersRelativeDemandChangeEnum) {
    BestSellersRelativeDemandChangeEnum["RelativeDemandChangeTypeUnspecified"] = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED";
    BestSellersRelativeDemandChangeEnum["Sinker"] = "SINKER";
    BestSellersRelativeDemandChangeEnum["Flat"] = "FLAT";
    BestSellersRelativeDemandChangeEnum["Riser"] = "RISER";
})(BestSellersRelativeDemandChangeEnum || (BestSellersRelativeDemandChangeEnum = {}));
export var BestSellersReportGranularityEnum;
(function (BestSellersReportGranularityEnum) {
    BestSellersReportGranularityEnum["ReportGranularityUnspecified"] = "REPORT_GRANULARITY_UNSPECIFIED";
    BestSellersReportGranularityEnum["Weekly"] = "WEEKLY";
    BestSellersReportGranularityEnum["Monthly"] = "MONTHLY";
})(BestSellersReportGranularityEnum || (BestSellersReportGranularityEnum = {}));
// BestSellers
/**
 * Fields related to the [Best Sellers reports](https://support.google.com/merchants/answer/9488679).
**/
var BestSellers = /** @class */ (function (_super) {
    __extends(BestSellers, _super);
    function BestSellers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryId" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousRank" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "previousRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousRelativeDemand" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "previousRelativeDemand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeDemand" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "relativeDemand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeDemandChange" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "relativeDemandChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportDate" }),
        __metadata("design:type", Date)
    ], BestSellers.prototype, "reportDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportGranularity" }),
        __metadata("design:type", String)
    ], BestSellers.prototype, "reportGranularity", void 0);
    return BestSellers;
}(SpeakeasyBase));
export { BestSellers };
