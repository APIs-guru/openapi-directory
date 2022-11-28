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
import { OrderLineItemProductFee } from "./orderlineitemproductfee";
import { Price } from "./price";
import { OrderLineItemProductVariantAttribute } from "./orderlineitemproductvariantattribute";
var TestOrderLineItemProduct = /** @class */ (function (_super) {
    __extends(TestOrderLineItemProduct, _super);
    function TestOrderLineItemProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "contentLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fees", elemType: OrderLineItemProductFee }),
        __metadata("design:type", Array)
    ], TestOrderLineItemProduct.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLink" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "imageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpn" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "mpn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "offerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Price)
    ], TestOrderLineItemProduct.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetCountry" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "targetCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], TestOrderLineItemProduct.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantAttributes", elemType: OrderLineItemProductVariantAttribute }),
        __metadata("design:type", Array)
    ], TestOrderLineItemProduct.prototype, "variantAttributes", void 0);
    return TestOrderLineItemProduct;
}(SpeakeasyBase));
export { TestOrderLineItemProduct };
