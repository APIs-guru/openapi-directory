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
export var SubscriptionResponseEventTypeEnum;
(function (SubscriptionResponseEventTypeEnum) {
    SubscriptionResponseEventTypeEnum["ContactPropertyChange"] = "contact.propertyChange";
    SubscriptionResponseEventTypeEnum["CompanyPropertyChange"] = "company.propertyChange";
    SubscriptionResponseEventTypeEnum["DealPropertyChange"] = "deal.propertyChange";
    SubscriptionResponseEventTypeEnum["TicketPropertyChange"] = "ticket.propertyChange";
    SubscriptionResponseEventTypeEnum["ProductPropertyChange"] = "product.propertyChange";
    SubscriptionResponseEventTypeEnum["LineItemPropertyChange"] = "line_item.propertyChange";
    SubscriptionResponseEventTypeEnum["ContactCreation"] = "contact.creation";
    SubscriptionResponseEventTypeEnum["ContactDeletion"] = "contact.deletion";
    SubscriptionResponseEventTypeEnum["ContactPrivacyDeletion"] = "contact.privacyDeletion";
    SubscriptionResponseEventTypeEnum["CompanyCreation"] = "company.creation";
    SubscriptionResponseEventTypeEnum["CompanyDeletion"] = "company.deletion";
    SubscriptionResponseEventTypeEnum["DealCreation"] = "deal.creation";
    SubscriptionResponseEventTypeEnum["DealDeletion"] = "deal.deletion";
    SubscriptionResponseEventTypeEnum["TicketCreation"] = "ticket.creation";
    SubscriptionResponseEventTypeEnum["TicketDeletion"] = "ticket.deletion";
    SubscriptionResponseEventTypeEnum["ProductCreation"] = "product.creation";
    SubscriptionResponseEventTypeEnum["ProductDeletion"] = "product.deletion";
    SubscriptionResponseEventTypeEnum["LineItemCreation"] = "line_item.creation";
    SubscriptionResponseEventTypeEnum["LineItemDeletion"] = "line_item.deletion";
    SubscriptionResponseEventTypeEnum["ConversationCreation"] = "conversation.creation";
    SubscriptionResponseEventTypeEnum["ConversationDeletion"] = "conversation.deletion";
    SubscriptionResponseEventTypeEnum["ConversationNewMessage"] = "conversation.newMessage";
    SubscriptionResponseEventTypeEnum["ConversationPrivacyDeletion"] = "conversation.privacyDeletion";
    SubscriptionResponseEventTypeEnum["ConversationPropertyChange"] = "conversation.propertyChange";
})(SubscriptionResponseEventTypeEnum || (SubscriptionResponseEventTypeEnum = {}));
// SubscriptionResponse
/**
 * Complete details for an event subscription.
**/
var SubscriptionResponse = /** @class */ (function (_super) {
    __extends(SubscriptionResponse, _super);
    function SubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], SubscriptionResponse.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], SubscriptionResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], SubscriptionResponse.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SubscriptionResponse.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=propertyName" }),
        __metadata("design:type", String)
    ], SubscriptionResponse.prototype, "propertyName", void 0);
    __decorate([
        Metadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], SubscriptionResponse.prototype, "updatedAt", void 0);
    return SubscriptionResponse;
}(SpeakeasyBase));
export { SubscriptionResponse };
