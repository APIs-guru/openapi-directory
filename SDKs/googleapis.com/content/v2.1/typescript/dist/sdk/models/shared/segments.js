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
export var SegmentsProgramEnum;
(function (SegmentsProgramEnum) {
    SegmentsProgramEnum["ProgramUnspecified"] = "PROGRAM_UNSPECIFIED";
    SegmentsProgramEnum["ShoppingAds"] = "SHOPPING_ADS";
    SegmentsProgramEnum["FreeProductListing"] = "FREE_PRODUCT_LISTING";
    SegmentsProgramEnum["FreeLocalProductListing"] = "FREE_LOCAL_PRODUCT_LISTING";
    SegmentsProgramEnum["BuyOnGoogleListing"] = "BUY_ON_GOOGLE_LISTING";
})(SegmentsProgramEnum || (SegmentsProgramEnum = {}));
// Segments
/**
 * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
**/
var Segments = /** @class */ (function (_super) {
    __extends(Segments, _super);
    function Segments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], Segments.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL1" }),
        __metadata("design:type", String)
    ], Segments.prototype, "categoryL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL2" }),
        __metadata("design:type", String)
    ], Segments.prototype, "categoryL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL3" }),
        __metadata("design:type", String)
    ], Segments.prototype, "categoryL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL4" }),
        __metadata("design:type", String)
    ], Segments.prototype, "categoryL4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL5" }),
        __metadata("design:type", String)
    ], Segments.prototype, "categoryL5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], Segments.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel0" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customLabel0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel1" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customLabel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel2" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customLabel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel3" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customLabel3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customLabel4" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customLabel4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerCountryCode" }),
        __metadata("design:type", String)
    ], Segments.prototype, "customerCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], Segments.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], Segments.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeL1" }),
        __metadata("design:type", String)
    ], Segments.prototype, "productTypeL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeL2" }),
        __metadata("design:type", String)
    ], Segments.prototype, "productTypeL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeL3" }),
        __metadata("design:type", String)
    ], Segments.prototype, "productTypeL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeL4" }),
        __metadata("design:type", String)
    ], Segments.prototype, "productTypeL4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypeL5" }),
        __metadata("design:type", String)
    ], Segments.prototype, "productTypeL5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=program" }),
        __metadata("design:type", String)
    ], Segments.prototype, "program", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Segments.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=week" }),
        __metadata("design:type", Date)
    ], Segments.prototype, "week", void 0);
    return Segments;
}(SpeakeasyBase));
export { Segments };
