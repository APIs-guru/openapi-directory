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
import { LastModifiedInfo } from "./lastmodifiedinfo";
export var OrderDocumentTypeEnum;
(function (OrderDocumentTypeEnum) {
    OrderDocumentTypeEnum["PlanningOrderTypeInsertionOrder"] = "PLANNING_ORDER_TYPE_INSERTION_ORDER";
    OrderDocumentTypeEnum["PlanningOrderTypeChangeOrder"] = "PLANNING_ORDER_TYPE_CHANGE_ORDER";
})(OrderDocumentTypeEnum || (OrderDocumentTypeEnum = {}));
// OrderDocument
/**
 * Contains properties of a Planning order document.
**/
var OrderDocument = /** @class */ (function (_super) {
    __extends(OrderDocument, _super);
    function OrderDocument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amendedOrderDocumentId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "amendedOrderDocumentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvedByUserProfileIds" }),
        __metadata("design:type", Array)
    ], OrderDocument.prototype, "approvedByUserProfileIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelled" }),
        __metadata("design:type", Boolean)
    ], OrderDocument.prototype, "cancelled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], OrderDocument.prototype, "createdInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], OrderDocument.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSentRecipients" }),
        __metadata("design:type", Array)
    ], OrderDocument.prototype, "lastSentRecipients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSentTime" }),
        __metadata("design:type", Date)
    ], OrderDocument.prototype, "lastSentTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signed" }),
        __metadata("design:type", Boolean)
    ], OrderDocument.prototype, "signed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderDocument.prototype, "type", void 0);
    return OrderDocument;
}(SpeakeasyBase));
export { OrderDocument };
