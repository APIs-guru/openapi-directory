import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxBankAccountInfo
/** 
 * General account information
**/
export class SandboxBankAccountInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountSubType" })
  accountSubType: string;

  @Metadata({ data: "json, name=accountType" })
  accountType: string;

  @Metadata({ data: "json, name=alias" })
  alias?: string;

  @Metadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=iban" })
  iban: string;

  @Metadata({ data: "json, name=ledgerBalance" })
  ledgerBalance?: number;

  @Metadata({ data: "json, name=openingDate" })
  openingDate?: Date;

  @Metadata({ data: "json, name=overdraftLimit" })
  overdraftLimit?: number;
}
