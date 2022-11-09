import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SubscriptionResponseEventTypeEnum {
    ContactPropertyChange = "contact.propertyChange",
    CompanyPropertyChange = "company.propertyChange",
    DealPropertyChange = "deal.propertyChange",
    TicketPropertyChange = "ticket.propertyChange",
    ProductPropertyChange = "product.propertyChange",
    LineItemPropertyChange = "line_item.propertyChange",
    ContactCreation = "contact.creation",
    ContactDeletion = "contact.deletion",
    ContactPrivacyDeletion = "contact.privacyDeletion",
    CompanyCreation = "company.creation",
    CompanyDeletion = "company.deletion",
    DealCreation = "deal.creation",
    DealDeletion = "deal.deletion",
    TicketCreation = "ticket.creation",
    TicketDeletion = "ticket.deletion",
    ProductCreation = "product.creation",
    ProductDeletion = "product.deletion",
    LineItemCreation = "line_item.creation",
    LineItemDeletion = "line_item.deletion",
    ConversationCreation = "conversation.creation",
    ConversationDeletion = "conversation.deletion",
    ConversationNewMessage = "conversation.newMessage",
    ConversationPrivacyDeletion = "conversation.privacyDeletion",
    ConversationPropertyChange = "conversation.propertyChange"
}
/**
 * Complete details for an event subscription.
**/
export declare class SubscriptionResponse extends SpeakeasyBase {
    active: boolean;
    createdAt: Date;
    eventType: SubscriptionResponseEventTypeEnum;
    id: string;
    propertyName?: string;
    updatedAt?: Date;
}
