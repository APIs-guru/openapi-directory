import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubscriptionResponseEventTypeEnum {
    ContactPropertyChange = "contact.propertyChange"
,    CompanyPropertyChange = "company.propertyChange"
,    DealPropertyChange = "deal.propertyChange"
,    TicketPropertyChange = "ticket.propertyChange"
,    ProductPropertyChange = "product.propertyChange"
,    LineItemPropertyChange = "line_item.propertyChange"
,    ContactCreation = "contact.creation"
,    ContactDeletion = "contact.deletion"
,    ContactPrivacyDeletion = "contact.privacyDeletion"
,    CompanyCreation = "company.creation"
,    CompanyDeletion = "company.deletion"
,    DealCreation = "deal.creation"
,    DealDeletion = "deal.deletion"
,    TicketCreation = "ticket.creation"
,    TicketDeletion = "ticket.deletion"
,    ProductCreation = "product.creation"
,    ProductDeletion = "product.deletion"
,    LineItemCreation = "line_item.creation"
,    LineItemDeletion = "line_item.deletion"
,    ConversationCreation = "conversation.creation"
,    ConversationDeletion = "conversation.deletion"
,    ConversationNewMessage = "conversation.newMessage"
,    ConversationPrivacyDeletion = "conversation.privacyDeletion"
,    ConversationPropertyChange = "conversation.propertyChange"
}


// SubscriptionResponse
/** 
 * Complete details for an event subscription.
**/
export class SubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=eventType" })
  eventType: SubscriptionResponseEventTypeEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=propertyName" })
  propertyName?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
