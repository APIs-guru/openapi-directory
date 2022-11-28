import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
**/
export declare class ObRisk1DeliveryAddress extends SpeakeasyBase {
    addressLine?: string[];
    buildingNumber?: string;
    country: string;
    countrySubDivision?: string;
    postCode?: string;
    streetName?: string;
    townName: string;
}
export declare enum ObRisk1PaymentContextCodeEnum {
    BillPayment = "BillPayment",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Other = "Other",
    PartyToParty = "PartyToParty"
}
/**
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
**/
export declare class ObRisk1 extends SpeakeasyBase {
    deliveryAddress?: ObRisk1DeliveryAddress;
    merchantCategoryCode?: string;
    merchantCustomerIdentification?: string;
    paymentContextCode?: ObRisk1PaymentContextCodeEnum;
}
