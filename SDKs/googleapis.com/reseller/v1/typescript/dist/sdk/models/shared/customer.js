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
import { Address } from "./address";
import { PrimaryAdmin } from "./primaryadmin";
export var CustomerCustomerTypeEnum;
(function (CustomerCustomerTypeEnum) {
    CustomerCustomerTypeEnum["CustomerTypeUnspecified"] = "customerTypeUnspecified";
    CustomerCustomerTypeEnum["Domain"] = "domain";
    CustomerCustomerTypeEnum["Team"] = "team";
})(CustomerCustomerTypeEnum || (CustomerCustomerTypeEnum = {}));
// Customer
/**
 * When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
**/
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateEmail" }),
        __metadata("design:type", String)
    ], Customer.prototype, "alternateEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerDomain" }),
        __metadata("design:type", String)
    ], Customer.prototype, "customerDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerDomainVerified" }),
        __metadata("design:type", Boolean)
    ], Customer.prototype, "customerDomainVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], Customer.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerType" }),
        __metadata("design:type", String)
    ], Customer.prototype, "customerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Customer.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], Customer.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalAddress" }),
        __metadata("design:type", Address)
    ], Customer.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryAdmin" }),
        __metadata("design:type", PrimaryAdmin)
    ], Customer.prototype, "primaryAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUiUrl" }),
        __metadata("design:type", String)
    ], Customer.prototype, "resourceUiUrl", void 0);
    return Customer;
}(SpeakeasyBase));
export { Customer };
