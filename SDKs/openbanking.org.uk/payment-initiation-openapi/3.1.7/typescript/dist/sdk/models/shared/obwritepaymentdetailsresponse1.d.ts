import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
export declare enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum {
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
export declare enum ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum {
    Cancelled = "Cancelled",
    PendingFailingSettlement = "PendingFailingSettlement",
    PendingSettlement = "PendingSettlement",
    Proprietary = "Proprietary",
    ProprietaryRejection = "ProprietaryRejection",
    Suspended = "Suspended",
    Unmatched = "Unmatched"
}
/**
 * Payment status details as per underlying Payment Rail.
**/
export declare class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail extends SpeakeasyBase {
    localInstrument?: string;
    status: string;
    statusReason?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum;
    statusReasonDescription?: string;
}
/**
 * Payment status details.
**/
export declare class ObWritePaymentDetailsResponse1DataPaymentStatus extends SpeakeasyBase {
    paymentTransactionId: string;
    status: ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum;
    statusDetail?: ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;
    statusUpdateDateTime: Date;
}
export declare class ObWritePaymentDetailsResponse1Data extends SpeakeasyBase {
    paymentStatus?: ObWritePaymentDetailsResponse1DataPaymentStatus[];
}
export declare class ObWritePaymentDetailsResponse1 extends SpeakeasyBase {
    data: ObWritePaymentDetailsResponse1Data;
    links?: Links;
    meta?: Meta;
}
