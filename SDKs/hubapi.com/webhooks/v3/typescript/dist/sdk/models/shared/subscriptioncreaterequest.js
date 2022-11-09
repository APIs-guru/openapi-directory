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
export var SubscriptionCreateRequestEventTypeEnum;
(function (SubscriptionCreateRequestEventTypeEnum) {
    SubscriptionCreateRequestEventTypeEnum["ContactPropertyChange"] = "contact.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["CompanyPropertyChange"] = "company.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["DealPropertyChange"] = "deal.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["TicketPropertyChange"] = "ticket.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["ProductPropertyChange"] = "product.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["LineItemPropertyChange"] = "line_item.propertyChange";
    SubscriptionCreateRequestEventTypeEnum["ContactCreation"] = "contact.creation";
    SubscriptionCreateRequestEventTypeEnum["ContactDeletion"] = "contact.deletion";
    SubscriptionCreateRequestEventTypeEnum["ContactPrivacyDeletion"] = "contact.privacyDeletion";
    SubscriptionCreateRequestEventTypeEnum["CompanyCreation"] = "company.creation";
    SubscriptionCreateRequestEventTypeEnum["CompanyDeletion"] = "company.deletion";
    SubscriptionCreateRequestEventTypeEnum["DealCreation"] = "deal.creation";
    SubscriptionCreateRequestEventTypeEnum["DealDeletion"] = "deal.deletion";
    SubscriptionCreateRequestEventTypeEnum["TicketCreation"] = "ticket.creation";
    SubscriptionCreateRequestEventTypeEnum["TicketDeletion"] = "ticket.deletion";
    SubscriptionCreateRequestEventTypeEnum["ProductCreation"] = "product.creation";
    SubscriptionCreateRequestEventTypeEnum["ProductDeletion"] = "product.deletion";
    SubscriptionCreateRequestEventTypeEnum["LineItemCreation"] = "line_item.creation";
    SubscriptionCreateRequestEventTypeEnum["LineItemDeletion"] = "line_item.deletion";
    SubscriptionCreateRequestEventTypeEnum["ConversationCreation"] = "conversation.creation";
    SubscriptionCreateRequestEventTypeEnum["ConversationDeletion"] = "conversation.deletion";
    SubscriptionCreateRequestEventTypeEnum["ConversationNewMessage"] = "conversation.newMessage";
    SubscriptionCreateRequestEventTypeEnum["ConversationPrivacyDeletion"] = "conversation.privacyDeletion";
    SubscriptionCreateRequestEventTypeEnum["ConversationPropertyChange"] = "conversation.propertyChange";
})(SubscriptionCreateRequestEventTypeEnum || (SubscriptionCreateRequestEventTypeEnum = {}));
// SubscriptionCreateRequest
/**
 * New webhook settings for an app.
**/
var SubscriptionCreateRequest = /** @class */ (function (_super) {
    __extends(SubscriptionCreateRequest, _super);
    function SubscriptionCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], SubscriptionCreateRequest.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], SubscriptionCreateRequest.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=propertyName" }),
        __metadata("design:type", String)
    ], SubscriptionCreateRequest.prototype, "propertyName", void 0);
    return SubscriptionCreateRequest;
}(SpeakeasyBase));
export { SubscriptionCreateRequest };
