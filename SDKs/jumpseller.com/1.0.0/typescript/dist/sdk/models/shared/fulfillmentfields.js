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
var FulfillmentFields = /** @class */ (function (_super) {
    __extends(FulfillmentFields, _super);
    function FulfillmentFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FulfillmentFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_id" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipment_status" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "shipmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracking_company" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "trackingCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracking_number" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "trackingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FulfillmentFields.prototype, "type", void 0);
    return FulfillmentFields;
}(SpeakeasyBase));
export { FulfillmentFields };
