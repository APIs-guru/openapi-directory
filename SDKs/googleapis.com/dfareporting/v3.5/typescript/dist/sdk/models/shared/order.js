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
import { OrderContact } from "./ordercontact";
import { LastModifiedInfo } from "./lastmodifiedinfo";
// Order
/**
 * Describes properties of a Planning order.
**/
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Order.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Order.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approverUserProfileIds" }),
        __metadata("design:type", Array)
    ], Order.prototype, "approverUserProfileIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerInvoiceId" }),
        __metadata("design:type", String)
    ], Order.prototype, "buyerInvoiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerOrganizationName" }),
        __metadata("design:type", String)
    ], Order.prototype, "buyerOrganizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Order.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts", elemType: OrderContact }),
        __metadata("design:type", Array)
    ], Order.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Order.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Order.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Order.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Order.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planningTermId" }),
        __metadata("design:type", String)
    ], Order.prototype, "planningTermId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Order.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerOrderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "sellerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerOrganizationName" }),
        __metadata("design:type", String)
    ], Order.prototype, "sellerOrganizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteId" }),
        __metadata("design:type", Array)
    ], Order.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteNames" }),
        __metadata("design:type", Array)
    ], Order.prototype, "siteNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Order.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], Order.prototype, "termsAndConditions", void 0);
    return Order;
}(SpeakeasyBase));
export { Order };
