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
// ObRisk1DeliveryAddress
/**
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
**/
var ObRisk1DeliveryAddress = /** @class */ (function (_super) {
    __extends(ObRisk1DeliveryAddress, _super);
    function ObRisk1DeliveryAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressLine" }),
        __metadata("design:type", Array)
    ], ObRisk1DeliveryAddress.prototype, "addressLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildingNumber" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "buildingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountrySubDivision" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "countrySubDivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostCode" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "postCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TownName" }),
        __metadata("design:type", String)
    ], ObRisk1DeliveryAddress.prototype, "townName", void 0);
    return ObRisk1DeliveryAddress;
}(SpeakeasyBase));
export { ObRisk1DeliveryAddress };
export var ObRisk1PaymentContextCodeEnum;
(function (ObRisk1PaymentContextCodeEnum) {
    ObRisk1PaymentContextCodeEnum["BillPayment"] = "BillPayment";
    ObRisk1PaymentContextCodeEnum["EcommerceGoods"] = "EcommerceGoods";
    ObRisk1PaymentContextCodeEnum["EcommerceServices"] = "EcommerceServices";
    ObRisk1PaymentContextCodeEnum["Other"] = "Other";
    ObRisk1PaymentContextCodeEnum["PartyToParty"] = "PartyToParty";
})(ObRisk1PaymentContextCodeEnum || (ObRisk1PaymentContextCodeEnum = {}));
// ObRisk1
/**
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
**/
var ObRisk1 = /** @class */ (function (_super) {
    __extends(ObRisk1, _super);
    function ObRisk1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeliveryAddress" }),
        __metadata("design:type", ObRisk1DeliveryAddress)
    ], ObRisk1.prototype, "deliveryAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MerchantCategoryCode" }),
        __metadata("design:type", String)
    ], ObRisk1.prototype, "merchantCategoryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MerchantCustomerIdentification" }),
        __metadata("design:type", String)
    ], ObRisk1.prototype, "merchantCustomerIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentContextCode" }),
        __metadata("design:type", String)
    ], ObRisk1.prototype, "paymentContextCode", void 0);
    return ObRisk1;
}(SpeakeasyBase));
export { ObRisk1 };
