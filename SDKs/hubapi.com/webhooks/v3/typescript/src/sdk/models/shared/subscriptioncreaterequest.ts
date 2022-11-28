import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscriptionCreateRequestEventTypeEnum {
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


// SubscriptionCreateRequest
/** 
 * New webhook settings for an app.
**/
export class SubscriptionCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: SubscriptionCreateRequestEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=propertyName" })
  propertyName?: string;
}
