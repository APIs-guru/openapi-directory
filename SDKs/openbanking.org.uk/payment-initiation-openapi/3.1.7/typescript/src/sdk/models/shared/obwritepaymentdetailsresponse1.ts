import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";


export enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum {
    Accepted = "Accepted",
    AcceptedCancellationRequest = "AcceptedCancellationRequest",
    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted",
    AcceptedCustomerProfile = "AcceptedCustomerProfile",
    AcceptedFundsChecked = "AcceptedFundsChecked",
    AcceptedSettlementCompleted = "AcceptedSettlementCompleted",
    AcceptedSettlementInProcess = "AcceptedSettlementInProcess",
    AcceptedTechnicalValidation = "AcceptedTechnicalValidation",
    AcceptedWithChange = "AcceptedWithChange",
    AcceptedWithoutPosting = "AcceptedWithoutPosting",
    Cancelled = "Cancelled",
    NoCancellationProcess = "NoCancellationProcess",
    PartiallyAcceptedCancellationRequest = "PartiallyAcceptedCancellationRequest",
    PartiallyAcceptedTechnicalCorrect = "PartiallyAcceptedTechnicalCorrect",
    PaymentCancelled = "PaymentCancelled",
    Pending = "Pending",
    PendingCancellationRequest = "PendingCancellationRequest",
    Received = "Received",
    Rejected = "Rejected",
    RejectedCancellationRequest = "RejectedCancellationRequest"
}

export enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum {
    Cancelled = "Cancelled",
    PendingFailingSettlement = "PendingFailingSettlement",
    PendingSettlement = "PendingSettlement",
    Proprietary = "Proprietary",
    ProprietaryRejection = "ProprietaryRejection",
    Suspended = "Suspended",
    Unmatched = "Unmatched"
}


// ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
/** 
 * Payment status details as per underlying Payment Rail.
**/
export class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReasonDescription" })
  statusReasonDescription?: string;
}


// ObWritePaymentDetailsResponse1DataPaymentStatus
/** 
 * Payment status details.
**/
export class ObWritePaymentDetailsResponse1DataPaymentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaymentTransactionId" })
  paymentTransactionId: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWritePaymentDetailsResponse1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaymentStatus", elemType: ObWritePaymentDetailsResponse1DataPaymentStatus })
  paymentStatus?: ObWritePaymentDetailsResponse1DataPaymentStatus[];
}


export class ObWritePaymentDetailsResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWritePaymentDetailsResponse1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
