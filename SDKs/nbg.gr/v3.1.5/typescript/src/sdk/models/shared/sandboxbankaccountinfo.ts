import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxBankAccountInfo
/** 
 * General account information
**/
export class SandboxBankAccountInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSubType" })
  accountSubType: string;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType: string;

  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=availableBalance" })
  availableBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban: string;

  @SpeakeasyMetadata({ data: "json, name=ledgerBalance" })
  ledgerBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=openingDate" })
  openingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=overdraftLimit" })
  overdraftLimit?: number;
}
