import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { PrimaryAdmin } from "./primaryadmin";

export enum CustomerCustomerTypeEnum {
    CustomerTypeUnspecified = "customerTypeUnspecified"
,    Domain = "domain"
,    Team = "team"
}


// Customer
/** 
 * When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
**/
export class Customer extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @Metadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @Metadata({ data: "json, name=customerDomainVerified" })
  customerDomainVerified?: boolean;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=customerType" })
  customerType?: CustomerCustomerTypeEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postalAddress" })
  postalAddress?: Address;

  @Metadata({ data: "json, name=primaryAdmin" })
  primaryAdmin?: PrimaryAdmin;

  @Metadata({ data: "json, name=resourceUiUrl" })
  resourceUiUrl?: string;
}
