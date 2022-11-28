import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Balance } from "./balance";
import { AccountStatusEnum } from "./accountstatusenum";


export enum AccountDetailsUsageEnum {
    Priv = "PRIV",
    Orga = "ORGA"
}


// AccountDetails
/** 
 * The ASPSP shall give at least one of the account reference identifiers:
 *   - iban
 *   - bban
 *   - pan
 *   - maskedPan
 *   - msisdn
 * If the account is a multicurrency account currency code in "currency" is set to "XXX".
 * 
**/
export class AccountDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=balances", elemType: Balance })
  balances?: Balance[];

  @SpeakeasyMetadata({ data: "json, name=bban" })
  bban?: string;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=cashAccountType" })
  cashAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAccounts" })
  linkedAccounts?: string;

  @SpeakeasyMetadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AccountStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: AccountDetailsUsageEnum;
}
