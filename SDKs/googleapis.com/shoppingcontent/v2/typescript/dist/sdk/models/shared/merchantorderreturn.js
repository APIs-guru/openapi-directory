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
import { MerchantOrderReturnItem } from "./merchantorderreturnitem";
import { ReturnShipment } from "./returnshipment";
// MerchantOrderReturn
/**
 * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
var MerchantOrderReturn = /** @class */ (function (_super) {
    __extends(MerchantOrderReturn, _super);
    function MerchantOrderReturn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], MerchantOrderReturn.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], MerchantOrderReturn.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], MerchantOrderReturn.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderReturnId" }),
        __metadata("design:type", String)
    ], MerchantOrderReturn.prototype, "orderReturnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnItems", elemType: MerchantOrderReturnItem }),
        __metadata("design:type", Array)
    ], MerchantOrderReturn.prototype, "returnItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnShipments", elemType: ReturnShipment }),
        __metadata("design:type", Array)
    ], MerchantOrderReturn.prototype, "returnShipments", void 0);
    return MerchantOrderReturn;
}(SpeakeasyBase));
export { MerchantOrderReturn };
