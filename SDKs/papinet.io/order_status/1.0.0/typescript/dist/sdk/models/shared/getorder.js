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
import * as shared from "../shared";
import { PaginationLinks } from "./paginationlinks";
export var GetOrderOrderStatusEnum;
(function (GetOrderOrderStatusEnum) {
    GetOrderOrderStatusEnum["Active"] = "Active";
    GetOrderOrderStatusEnum["Cancelled"] = "Cancelled";
    GetOrderOrderStatusEnum["Completed"] = "Completed";
})(GetOrderOrderStatusEnum || (GetOrderOrderStatusEnum = {}));
var GetOrder = /** @class */ (function (_super) {
    __extends(GetOrder, _super);
    function GetOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetOrder.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", PaginationLinks)
    ], GetOrder.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=numberOfLineItems" }),
        __metadata("design:type", Number)
    ], GetOrder.prototype, "numberOfLineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=orderLineItems", elemType: shared.OrderLineItem }),
        __metadata("design:type", Array)
    ], GetOrder.prototype, "orderLineItems", void 0);
    __decorate([
        Metadata({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], GetOrder.prototype, "orderNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=orderStatus" }),
        __metadata("design:type", String)
    ], GetOrder.prototype, "orderStatus", void 0);
    return GetOrder;
}(SpeakeasyBase));
export { GetOrder };
