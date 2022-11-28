import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscriptionResponseEventTypeEnum {
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


// SubscriptionResponse
/** 
 * Complete details for an event subscription.
**/
export class SubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: SubscriptionResponseEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
