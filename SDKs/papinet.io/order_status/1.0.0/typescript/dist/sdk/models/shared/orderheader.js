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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var OrderHeaderOrderStatusEnum;
(function (OrderHeaderOrderStatusEnum) {
    OrderHeaderOrderStatusEnum["Active"] = "Active";
    OrderHeaderOrderStatusEnum["Cancelled"] = "Cancelled";
    OrderHeaderOrderStatusEnum["Completed"] = "Completed";
})(OrderHeaderOrderStatusEnum || (OrderHeaderOrderStatusEnum = {}));
var OrderHeader = /** @class */ (function (_super) {
    __extends(OrderHeader, _super);
    function OrderHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderHeader.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=numberOfLineItems" }),
        __metadata("design:type", Number)
    ], OrderHeader.prototype, "numberOfLineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], OrderHeader.prototype, "orderNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=orderStatus" }),
        __metadata("design:type", String)
    ], OrderHeader.prototype, "orderStatus", void 0);
    return OrderHeader;
}(SpeakeasyBase));
export { OrderHeader };
