import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CardObjectTypeBodyNameEnum {
    Contacts = "contacts",
    Deals = "deals",
    Companies = "companies",
    Tickets = "tickets"
}


export class CardObjectTypeBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: CardObjectTypeBodyNameEnum;

  @SpeakeasyMetadata({ data: "json, name=propertiesToSend" })
  propertiesToSend: string[];
}
