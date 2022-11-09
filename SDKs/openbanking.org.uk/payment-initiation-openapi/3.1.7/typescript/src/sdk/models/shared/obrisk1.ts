import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObRisk1DeliveryAddress
/** 
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
**/
export class ObRisk1DeliveryAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @Metadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @Metadata({ data: "json, name=Country" })
  country: string;

  @Metadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @Metadata({ data: "json, name=PostCode" })
  postCode?: string;

  @Metadata({ data: "json, name=StreetName" })
  streetName?: string;

  @Metadata({ data: "json, name=TownName" })
  townName: string;
}

export enum ObRisk1PaymentContextCodeEnum {
    BillPayment = "BillPayment"
,    EcommerceGoods = "EcommerceGoods"
,    EcommerceServices = "EcommerceServices"
,    Other = "Other"
,    PartyToParty = "PartyToParty"
}


// ObRisk1
/** 
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
**/
export class ObRisk1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress?: ObRisk1DeliveryAddress;

  @Metadata({ data: "json, name=MerchantCategoryCode" })
  merchantCategoryCode?: string;

  @Metadata({ data: "json, name=MerchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @Metadata({ data: "json, name=PaymentContextCode" })
  paymentContextCode?: ObRisk1PaymentContextCodeEnum;
}
