import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Promotion } from "./promotion";



// AccountCreditCard
/** 
 * Credit Card information associated with this Account.
**/
export class AccountCreditCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: string;

  @SpeakeasyMetadata({ data: "json, name=last_four" })
  lastFour?: string;
}


// AccountInput
/** 
 * Account object
**/
export class AccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_promotions", elemType: Promotion })
  activePromotions?: Promotion[];

  @SpeakeasyMetadata({ data: "json, name=address_1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// Account
/** 
 * Account object
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_promotions", elemType: Promotion })
  activePromotions?: Promotion[];

  @SpeakeasyMetadata({ data: "json, name=active_since" })
  activeSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=address_1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=balance_uninvoiced" })
  balanceUninvoiced?: number;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=credit_card" })
  creditCard?: AccountCreditCard;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=euuid" })
  euuid?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
