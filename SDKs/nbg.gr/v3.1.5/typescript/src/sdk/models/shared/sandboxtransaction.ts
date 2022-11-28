import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxTransaction
/** 
 * Transaction information
**/
export class SandboxTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingBalance" })
  accountingBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingDateTime" })
  bookingDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditDebit" })
  creditDebit?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedAccount" })
  relatedAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedName" })
  relatedName?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionCode" })
  transactionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=valueDateTime" })
  valueDateTime?: Date;
}
