import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxTransaction
/** 
 * Transaction information
**/
export class SandboxTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountingBalance" })
  accountingBalance?: number;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=bookingDateTime" })
  bookingDateTime?: Date;

  @Metadata({ data: "json, name=creditDebit" })
  creditDebit?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=relatedAccount" })
  relatedAccount?: string;

  @Metadata({ data: "json, name=relatedName" })
  relatedName?: string;

  @Metadata({ data: "json, name=transactionCode" })
  transactionCode?: string;

  @Metadata({ data: "json, name=valueDateTime" })
  valueDateTime?: Date;
}
