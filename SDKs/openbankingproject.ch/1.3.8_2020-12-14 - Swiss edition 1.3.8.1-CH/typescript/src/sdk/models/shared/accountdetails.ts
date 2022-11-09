import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { Balance } from "./balance";
import { AccountStatusEnum } from "./accountstatusenum";

export enum AccountDetailsUsageEnum {
    Priv = "PRIV"
,    Orga = "ORGA"
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
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=balances", elemType: shared.Balance })
  balances?: Balance[];

  @Metadata({ data: "json, name=bban" })
  bban?: string;

  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=cashAccountType" })
  cashAccountType?: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=linkedAccounts" })
  linkedAccounts?: string;

  @Metadata({ data: "json, name=msisdn" })
  msisdn?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=product" })
  product?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=status" })
  status?: AccountStatusEnum;

  @Metadata({ data: "json, name=usage" })
  usage?: AccountDetailsUsageEnum;
}
