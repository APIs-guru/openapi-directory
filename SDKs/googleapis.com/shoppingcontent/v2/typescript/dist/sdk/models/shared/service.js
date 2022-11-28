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
import { DeliveryTime } from "./deliverytime";
import { Price } from "./price";
import { MinimumOrderValueTable } from "./minimumordervaluetable";
import { PickupCarrierService } from "./pickupcarrierservice";
import { RateGroup } from "./rategroup";
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Service.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryCountry" }),
        __metadata("design:type", String)
    ], Service.prototype, "deliveryCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryTime" }),
        __metadata("design:type", DeliveryTime)
    ], Service.prototype, "deliveryTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibility" }),
        __metadata("design:type", String)
    ], Service.prototype, "eligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumOrderValue" }),
        __metadata("design:type", Price)
    ], Service.prototype, "minimumOrderValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumOrderValueTable" }),
        __metadata("design:type", MinimumOrderValueTable)
    ], Service.prototype, "minimumOrderValueTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupService" }),
        __metadata("design:type", PickupCarrierService)
    ], Service.prototype, "pickupService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateGroups", elemType: RateGroup }),
        __metadata("design:type", Array)
    ], Service.prototype, "rateGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentType" }),
        __metadata("design:type", String)
    ], Service.prototype, "shipmentType", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
