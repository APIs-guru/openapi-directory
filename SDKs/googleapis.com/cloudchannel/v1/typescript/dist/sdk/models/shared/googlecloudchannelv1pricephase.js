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
import { GoogleCloudChannelV1Price } from "./googlecloudchannelv1price";
import { GoogleCloudChannelV1PriceTier } from "./googlecloudchannelv1pricetier";
export var GoogleCloudChannelV1PricePhasePeriodTypeEnum;
(function (GoogleCloudChannelV1PricePhasePeriodTypeEnum) {
    GoogleCloudChannelV1PricePhasePeriodTypeEnum["PeriodTypeUnspecified"] = "PERIOD_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1PricePhasePeriodTypeEnum["Day"] = "DAY";
    GoogleCloudChannelV1PricePhasePeriodTypeEnum["Month"] = "MONTH";
    GoogleCloudChannelV1PricePhasePeriodTypeEnum["Year"] = "YEAR";
})(GoogleCloudChannelV1PricePhasePeriodTypeEnum || (GoogleCloudChannelV1PricePhasePeriodTypeEnum = {}));
// GoogleCloudChannelV1PricePhase
/**
 * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
**/
var GoogleCloudChannelV1PricePhase = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1PricePhase, _super);
    function GoogleCloudChannelV1PricePhase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPeriod" }),
        __metadata("design:type", Number)
    ], GoogleCloudChannelV1PricePhase.prototype, "firstPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastPeriod" }),
        __metadata("design:type", Number)
    ], GoogleCloudChannelV1PricePhase.prototype, "lastPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1PricePhase.prototype, "periodType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", GoogleCloudChannelV1Price)
    ], GoogleCloudChannelV1PricePhase.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceTiers", elemType: GoogleCloudChannelV1PriceTier }),
        __metadata("design:type", Array)
    ], GoogleCloudChannelV1PricePhase.prototype, "priceTiers", void 0);
    return GoogleCloudChannelV1PricePhase;
}(SpeakeasyBase));
export { GoogleCloudChannelV1PricePhase };
