import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LandlordAccountingEntryModel
/** 
 * Landlord Accounting - Finance Entry
**/
export class LandlordAccountingEntryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=TransactionNumber" })
  transactionNumber?: number;
}
