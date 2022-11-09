import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CardObjectTypeBodyNameEnum {
    Contacts = "contacts"
,    Deals = "deals"
,    Companies = "companies"
,    Tickets = "tickets"
}


export class CardObjectTypeBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: CardObjectTypeBodyNameEnum;

  @Metadata({ data: "json, name=propertiesToSend" })
  propertiesToSend: string[];
}
