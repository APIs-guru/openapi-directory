import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CardObjectTypeBodyNameEnum {
    Contacts = "contacts",
    Deals = "deals",
    Companies = "companies",
    Tickets = "tickets"
}
export declare class CardObjectTypeBody extends SpeakeasyBase {
    name: CardObjectTypeBodyNameEnum;
    propertiesToSend: string[];
}
