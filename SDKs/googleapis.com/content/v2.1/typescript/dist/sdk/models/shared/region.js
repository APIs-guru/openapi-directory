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
import { RegionGeoTargetArea } from "./regiongeotargetarea";
import { RegionPostalCodeArea } from "./regionpostalcodearea";
// RegionInput
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
var RegionInput = /** @class */ (function (_super) {
    __extends(RegionInput, _super);
    function RegionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], RegionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geotargetArea" }),
        __metadata("design:type", RegionGeoTargetArea)
    ], RegionInput.prototype, "geotargetArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCodeArea" }),
        __metadata("design:type", RegionPostalCodeArea)
    ], RegionInput.prototype, "postalCodeArea", void 0);
    return RegionInput;
}(SpeakeasyBase));
export { RegionInput };
// Region
/**
 * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
**/
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Region.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geotargetArea" }),
        __metadata("design:type", RegionGeoTargetArea)
    ], Region.prototype, "geotargetArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], Region.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCodeArea" }),
        __metadata("design:type", RegionPostalCodeArea)
    ], Region.prototype, "postalCodeArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionId" }),
        __metadata("design:type", String)
    ], Region.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionalInventoryEligible" }),
        __metadata("design:type", Boolean)
    ], Region.prototype, "regionalInventoryEligible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingEligible" }),
        __metadata("design:type", Boolean)
    ], Region.prototype, "shippingEligible", void 0);
    return Region;
}(SpeakeasyBase));
export { Region };
