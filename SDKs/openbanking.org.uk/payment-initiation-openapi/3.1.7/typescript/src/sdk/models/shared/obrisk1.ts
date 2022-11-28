import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObRisk1DeliveryAddress
/** 
 * Information that locates and identifies a specific address, as defined by postal services or in free format text.
**/
export class ObRisk1DeliveryAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressLine" })
  addressLine?: string[];

  @SpeakeasyMetadata({ data: "json, name=BuildingNumber" })
  buildingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=CountrySubDivision" })
  countrySubDivision?: string;

  @SpeakeasyMetadata({ data: "json, name=PostCode" })
  postCode?: string;

  @SpeakeasyMetadata({ data: "json, name=StreetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=TownName" })
  townName: string;
}

export enum ObRisk1PaymentContextCodeEnum {
    BillPayment = "BillPayment",
    EcommerceGoods = "EcommerceGoods",
    EcommerceServices = "EcommerceServices",
    Other = "Other",
    PartyToParty = "PartyToParty"
}


// ObRisk1
/** 
 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
**/
export class ObRisk1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryAddress" })
  deliveryAddress?: ObRisk1DeliveryAddress;

  @SpeakeasyMetadata({ data: "json, name=MerchantCategoryCode" })
  merchantCategoryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MerchantCustomerIdentification" })
  merchantCustomerIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=PaymentContextCode" })
  paymentContextCode?: ObRisk1PaymentContextCodeEnum;
}
