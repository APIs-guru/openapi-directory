import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PrimaryAdmin } from "./primaryadmin";


export enum CustomerCustomerTypeEnum {
    CustomerTypeUnspecified = "customerTypeUnspecified",
    Domain = "domain",
    Team = "team"
}


// Customer
/** 
 * When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
**/
export class Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=customerDomainVerified" })
  customerDomainVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerType" })
  customerType?: CustomerCustomerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postalAddress" })
  postalAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=primaryAdmin" })
  primaryAdmin?: PrimaryAdmin;

  @SpeakeasyMetadata({ data: "json, name=resourceUiUrl" })
  resourceUiUrl?: string;
}
