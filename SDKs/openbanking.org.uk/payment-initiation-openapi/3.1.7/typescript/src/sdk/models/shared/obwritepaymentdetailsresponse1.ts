import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Links } from "./links";
import { Meta } from "./meta";

export enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum {
    Accepted = "Accepted"
,    AcceptedCancellationRequest = "AcceptedCancellationRequest"
,    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted"
,    AcceptedCustomerProfile = "AcceptedCustomerProfile"
,    AcceptedFundsChecked = "AcceptedFundsChecked"
,    AcceptedSettlementCompleted = "AcceptedSettlementCompleted"
,    AcceptedSettlementInProcess = "AcceptedSettlementInProcess"
,    AcceptedTechnicalValidation = "AcceptedTechnicalValidation"
,    AcceptedWithChange = "AcceptedWithChange"
,    AcceptedWithoutPosting = "AcceptedWithoutPosting"
,    Cancelled = "Cancelled"
,    NoCancellationProcess = "NoCancellationProcess"
,    PartiallyAcceptedCancellationRequest = "PartiallyAcceptedCancellationRequest"
,    PartiallyAcceptedTechnicalCorrect = "PartiallyAcceptedTechnicalCorrect"
,    PaymentCancelled = "PaymentCancelled"
,    Pending = "Pending"
,    PendingCancellationRequest = "PendingCancellationRequest"
,    Received = "Received"
,    Rejected = "Rejected"
,    RejectedCancellationRequest = "RejectedCancellationRequest"
}

export enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum {
    Cancelled = "Cancelled"
,    PendingFailingSettlement = "PendingFailingSettlement"
,    PendingSettlement = "PendingSettlement"
,    Proprietary = "Proprietary"
,    ProprietaryRejection = "ProprietaryRejection"
,    Suspended = "Suspended"
,    Unmatched = "Unmatched"
}


// ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
/** 
 * Payment status details as per underlying Payment Rail.
**/
export class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=Status" })
  status: string;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum;

  @Metadata({ data: "json, name=StatusReasonDescription" })
  statusReasonDescription?: string;
}


// ObWritePaymentDetailsResponse1DataPaymentStatus
/** 
 * Payment status details.
**/
export class ObWritePaymentDetailsResponse1DataPaymentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaymentTransactionId" })
  paymentTransactionId: string;

  @Metadata({ data: "json, name=Status" })
  status: ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWritePaymentDetailsResponse1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaymentStatus", elemType: shared.ObWritePaymentDetailsResponse1DataPaymentStatus })
  paymentStatus?: ObWritePaymentDetailsResponse1DataPaymentStatus[];
}


export class ObWritePaymentDetailsResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWritePaymentDetailsResponse1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
