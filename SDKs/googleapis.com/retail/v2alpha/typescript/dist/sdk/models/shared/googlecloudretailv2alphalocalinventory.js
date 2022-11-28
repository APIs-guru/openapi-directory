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
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
// GoogleCloudRetailV2alphaLocalInventory
/**
 * The inventory information at a place (e.g. a store) identified by a place ID.
**/
var GoogleCloudRetailV2alphaLocalInventory = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaLocalInventory, _super);
    function GoogleCloudRetailV2alphaLocalInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaLocalInventory.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaLocalInventory.prototype, "fulfillmentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaLocalInventory.prototype, "placeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaPriceInfo)
    ], GoogleCloudRetailV2alphaLocalInventory.prototype, "priceInfo", void 0);
    return GoogleCloudRetailV2alphaLocalInventory;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaLocalInventory };
