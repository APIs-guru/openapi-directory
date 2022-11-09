import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Promotion } from "./promotion";


// AccountCreditCard
/** 
 * Credit Card information associated with this Account.
**/
export class AccountCreditCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry?: string;

  @Metadata({ data: "json, name=last_four" })
  lastFour?: string;
}


// Account
/** 
 * Account object
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_promotions", elemType: shared.Promotion })
  activePromotions?: Promotion[];

  @Metadata({ data: "json, name=active_since" })
  activeSince?: Date;

  @Metadata({ data: "json, name=address_1" })
  address1?: string;

  @Metadata({ data: "json, name=address_2" })
  address2?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=balance_uninvoiced" })
  balanceUninvoiced?: number;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=credit_card" })
  creditCard?: AccountCreditCard;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=euuid" })
  euuid?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=tax_id" })
  taxId?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
