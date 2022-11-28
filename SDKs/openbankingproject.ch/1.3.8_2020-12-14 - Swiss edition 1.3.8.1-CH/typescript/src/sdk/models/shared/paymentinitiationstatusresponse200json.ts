import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusEnum } from "./transactionstatusenum";



// PaymentInitiationStatusResponse200Json
/** 
 * Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
**/
export class PaymentInitiationStatusResponse200Json extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fundsAvailable" })
  fundsAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusEnum;
}
