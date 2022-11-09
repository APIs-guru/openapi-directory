import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LandlordAccountingEntryModel
/** 
 * Landlord Accounting - Finance Entry
**/
export class LandlordAccountingEntryModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=TransactionNumber" })
  transactionNumber?: number;
}
