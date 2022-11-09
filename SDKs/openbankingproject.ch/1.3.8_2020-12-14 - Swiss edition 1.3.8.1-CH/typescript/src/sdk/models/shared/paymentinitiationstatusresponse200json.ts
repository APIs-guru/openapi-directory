import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionStatusEnum } from "./transactionstatusenum";


// PaymentInitiationStatusResponse200Json
/** 
 * Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
**/
export class PaymentInitiationStatusResponse200Json extends SpeakeasyBase {
  @Metadata({ data: "json, name=fundsAvailable" })
  fundsAvailable?: boolean;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusEnum;
}
