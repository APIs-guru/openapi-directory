var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
export var ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum;
(function (ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum) {
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["Accepted"] = "Accepted";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedCancellationRequest"] = "AcceptedCancellationRequest";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedCreditSettlementCompleted"] = "AcceptedCreditSettlementCompleted";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedCustomerProfile"] = "AcceptedCustomerProfile";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedFundsChecked"] = "AcceptedFundsChecked";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedSettlementCompleted"] = "AcceptedSettlementCompleted";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedSettlementInProcess"] = "AcceptedSettlementInProcess";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedTechnicalValidation"] = "AcceptedTechnicalValidation";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedWithChange"] = "AcceptedWithChange";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["AcceptedWithoutPosting"] = "AcceptedWithoutPosting";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["Cancelled"] = "Cancelled";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["NoCancellationProcess"] = "NoCancellationProcess";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["PartiallyAcceptedCancellationRequest"] = "PartiallyAcceptedCancellationRequest";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["PartiallyAcceptedTechnicalCorrect"] = "PartiallyAcceptedTechnicalCorrect";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["PaymentCancelled"] = "PaymentCancelled";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["Pending"] = "Pending";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["PendingCancellationRequest"] = "PendingCancellationRequest";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["Received"] = "Received";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["Rejected"] = "Rejected";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum["RejectedCancellationRequest"] = "RejectedCancellationRequest";
})(ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum || (ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = {}));
export var ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum;
(function (ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum) {
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["Cancelled"] = "Cancelled";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["PendingFailingSettlement"] = "PendingFailingSettlement";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["PendingSettlement"] = "PendingSettlement";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["Proprietary"] = "Proprietary";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["ProprietaryRejection"] = "ProprietaryRejection";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["Suspended"] = "Suspended";
    ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum["Unmatched"] = "Unmatched";
})(ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum || (ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum = {}));
// ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
/**
 * Payment status details as per underlying Payment Rail.
**/
var ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail = /** @class */ (function (_super) {
    __extends(ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail, _super);
    function ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusReason" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail.prototype, "statusReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusReasonDescription" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail.prototype, "statusReasonDescription", void 0);
    return ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail;
}(SpeakeasyBase));
export { ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail };
// ObWritePaymentDetailsResponse1DataPaymentStatus
/**
 * Payment status details.
**/
var ObWritePaymentDetailsResponse1DataPaymentStatus = /** @class */ (function (_super) {
    __extends(ObWritePaymentDetailsResponse1DataPaymentStatus, _super);
    function ObWritePaymentDetailsResponse1DataPaymentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentTransactionId" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatus.prototype, "paymentTransactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWritePaymentDetailsResponse1DataPaymentStatus.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusDetail" }),
        __metadata("design:type", ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail)
    ], ObWritePaymentDetailsResponse1DataPaymentStatus.prototype, "statusDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWritePaymentDetailsResponse1DataPaymentStatus.prototype, "statusUpdateDateTime", void 0);
    return ObWritePaymentDetailsResponse1DataPaymentStatus;
}(SpeakeasyBase));
export { ObWritePaymentDetailsResponse1DataPaymentStatus };
var ObWritePaymentDetailsResponse1Data = /** @class */ (function (_super) {
    __extends(ObWritePaymentDetailsResponse1Data, _super);
    function ObWritePaymentDetailsResponse1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentStatus", elemType: ObWritePaymentDetailsResponse1DataPaymentStatus }),
        __metadata("design:type", Array)
    ], ObWritePaymentDetailsResponse1Data.prototype, "paymentStatus", void 0);
    return ObWritePaymentDetailsResponse1Data;
}(SpeakeasyBase));
export { ObWritePaymentDetailsResponse1Data };
var ObWritePaymentDetailsResponse1 = /** @class */ (function (_super) {
    __extends(ObWritePaymentDetailsResponse1, _super);
    function ObWritePaymentDetailsResponse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWritePaymentDetailsResponse1Data)
    ], ObWritePaymentDetailsResponse1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWritePaymentDetailsResponse1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWritePaymentDetailsResponse1.prototype, "meta", void 0);
    return ObWritePaymentDetailsResponse1;
}(SpeakeasyBase));
export { ObWritePaymentDetailsResponse1 };
