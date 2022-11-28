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
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";
// GoogleCloudRetailV2ProductDetailInput
/**
 * Detailed product information associated with a user event.
**/
var GoogleCloudRetailV2ProductDetailInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2ProductDetailInput, _super);
    function GoogleCloudRetailV2ProductDetailInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", GoogleCloudRetailV2ProductInput)
    ], GoogleCloudRetailV2ProductDetailInput.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2ProductDetailInput.prototype, "quantity", void 0);
    return GoogleCloudRetailV2ProductDetailInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2ProductDetailInput };
// GoogleCloudRetailV2ProductDetail
/**
 * Detailed product information associated with a user event.
**/
var GoogleCloudRetailV2ProductDetail = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2ProductDetail, _super);
    function GoogleCloudRetailV2ProductDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", GoogleCloudRetailV2Product)
    ], GoogleCloudRetailV2ProductDetail.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2ProductDetail.prototype, "quantity", void 0);
    return GoogleCloudRetailV2ProductDetail;
}(SpeakeasyBase));
export { GoogleCloudRetailV2ProductDetail };
