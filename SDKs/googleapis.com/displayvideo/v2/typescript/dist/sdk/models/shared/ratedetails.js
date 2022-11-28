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
import { Money } from "./money";
export var RateDetailsInventorySourceRateTypeEnum;
(function (RateDetailsInventorySourceRateTypeEnum) {
    RateDetailsInventorySourceRateTypeEnum["InventorySourceRateTypeUnspecified"] = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED";
    RateDetailsInventorySourceRateTypeEnum["InventorySourceRateTypeCpmFixed"] = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED";
    RateDetailsInventorySourceRateTypeEnum["InventorySourceRateTypeCpmFloor"] = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR";
    RateDetailsInventorySourceRateTypeEnum["InventorySourceRateTypeCpd"] = "INVENTORY_SOURCE_RATE_TYPE_CPD";
    RateDetailsInventorySourceRateTypeEnum["InventorySourceRateTypeFlat"] = "INVENTORY_SOURCE_RATE_TYPE_FLAT";
})(RateDetailsInventorySourceRateTypeEnum || (RateDetailsInventorySourceRateTypeEnum = {}));
// RateDetails
/**
 * The rate related settings of the inventory source.
**/
var RateDetails = /** @class */ (function (_super) {
    __extends(RateDetails, _super);
    function RateDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceRateType" }),
        __metadata("design:type", String)
    ], RateDetails.prototype, "inventorySourceRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumSpend" }),
        __metadata("design:type", Money)
    ], RateDetails.prototype, "minimumSpend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rate" }),
        __metadata("design:type", Money)
    ], RateDetails.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitsPurchased" }),
        __metadata("design:type", String)
    ], RateDetails.prototype, "unitsPurchased", void 0);
    return RateDetails;
}(SpeakeasyBase));
export { RateDetails };
