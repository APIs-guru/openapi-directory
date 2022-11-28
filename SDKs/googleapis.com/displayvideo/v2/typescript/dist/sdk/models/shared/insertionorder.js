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
import { BiddingStrategy } from "./biddingstrategy";
import { InsertionOrderBudget } from "./insertionorderbudget";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PerformanceGoal } from "./performancegoal";
export var InsertionOrderBillableOutcomeEnum;
(function (InsertionOrderBillableOutcomeEnum) {
    InsertionOrderBillableOutcomeEnum["BillableOutcomeUnspecified"] = "BILLABLE_OUTCOME_UNSPECIFIED";
    InsertionOrderBillableOutcomeEnum["BillableOutcomePayPerImpression"] = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION";
    InsertionOrderBillableOutcomeEnum["BillableOutcomePayPerClick"] = "BILLABLE_OUTCOME_PAY_PER_CLICK";
    InsertionOrderBillableOutcomeEnum["BillableOutcomePayPerViewableImpression"] = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION";
})(InsertionOrderBillableOutcomeEnum || (InsertionOrderBillableOutcomeEnum = {}));
export var InsertionOrderEntityStatusEnum;
(function (InsertionOrderEntityStatusEnum) {
    InsertionOrderEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    InsertionOrderEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    InsertionOrderEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    InsertionOrderEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    InsertionOrderEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    InsertionOrderEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(InsertionOrderEntityStatusEnum || (InsertionOrderEntityStatusEnum = {}));
export var InsertionOrderInsertionOrderTypeEnum;
(function (InsertionOrderInsertionOrderTypeEnum) {
    InsertionOrderInsertionOrderTypeEnum["InsertionOrderTypeUnspecified"] = "INSERTION_ORDER_TYPE_UNSPECIFIED";
    InsertionOrderInsertionOrderTypeEnum["Rtb"] = "RTB";
    InsertionOrderInsertionOrderTypeEnum["OverTheTop"] = "OVER_THE_TOP";
})(InsertionOrderInsertionOrderTypeEnum || (InsertionOrderInsertionOrderTypeEnum = {}));
export var InsertionOrderReservationTypeEnum;
(function (InsertionOrderReservationTypeEnum) {
    InsertionOrderReservationTypeEnum["ReservationTypeUnspecified"] = "RESERVATION_TYPE_UNSPECIFIED";
    InsertionOrderReservationTypeEnum["ReservationTypeNotGuaranteed"] = "RESERVATION_TYPE_NOT_GUARANTEED";
    InsertionOrderReservationTypeEnum["ReservationTypeProgrammaticGuaranteed"] = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED";
    InsertionOrderReservationTypeEnum["ReservationTypeTagGuaranteed"] = "RESERVATION_TYPE_TAG_GUARANTEED";
    InsertionOrderReservationTypeEnum["ReservationTypePetraViral"] = "RESERVATION_TYPE_PETRA_VIRAL";
    InsertionOrderReservationTypeEnum["ReservationTypeInstantReserve"] = "RESERVATION_TYPE_INSTANT_RESERVE";
})(InsertionOrderReservationTypeEnum || (InsertionOrderReservationTypeEnum = {}));
// InsertionOrderInput
/**
 * A single insertion order.
**/
var InsertionOrderInput = /** @class */ (function (_super) {
    __extends(InsertionOrderInput, _super);
    function InsertionOrderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidStrategy" }),
        __metadata("design:type", BiddingStrategy)
    ], InsertionOrderInput.prototype, "bidStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billableOutcome" }),
        __metadata("design:type", String)
    ], InsertionOrderInput.prototype, "billableOutcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", InsertionOrderBudget)
    ], InsertionOrderInput.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], InsertionOrderInput.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InsertionOrderInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], InsertionOrderInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], InsertionOrderInput.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderType" }),
        __metadata("design:type", String)
    ], InsertionOrderInput.prototype, "insertionOrderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], InsertionOrderInput.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacing" }),
        __metadata("design:type", Pacing)
    ], InsertionOrderInput.prototype, "pacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost }),
        __metadata("design:type", Array)
    ], InsertionOrderInput.prototype, "partnerCosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoal" }),
        __metadata("design:type", PerformanceGoal)
    ], InsertionOrderInput.prototype, "performanceGoal", void 0);
    return InsertionOrderInput;
}(SpeakeasyBase));
export { InsertionOrderInput };
// InsertionOrder
/**
 * A single insertion order.
**/
var InsertionOrder = /** @class */ (function (_super) {
    __extends(InsertionOrder, _super);
    function InsertionOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidStrategy" }),
        __metadata("design:type", BiddingStrategy)
    ], InsertionOrder.prototype, "bidStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billableOutcome" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "billableOutcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=budget" }),
        __metadata("design:type", InsertionOrderBudget)
    ], InsertionOrder.prototype, "budget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignId" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], InsertionOrder.prototype, "frequencyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderId" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "insertionOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertionOrderType" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "insertionOrderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationDetails" }),
        __metadata("design:type", IntegrationDetails)
    ], InsertionOrder.prototype, "integrationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pacing" }),
        __metadata("design:type", Pacing)
    ], InsertionOrder.prototype, "pacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerCosts", elemType: PartnerCost }),
        __metadata("design:type", Array)
    ], InsertionOrder.prototype, "partnerCosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceGoal" }),
        __metadata("design:type", PerformanceGoal)
    ], InsertionOrder.prototype, "performanceGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservationType" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "reservationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], InsertionOrder.prototype, "updateTime", void 0);
    return InsertionOrder;
}(SpeakeasyBase));
export { InsertionOrder };
