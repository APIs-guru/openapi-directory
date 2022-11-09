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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails } from "./googlecloudpaymentsresellersubscriptionv1subscriptionlineitemonetimerecurrencedetails";
export var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum["LineItemRecurrenceTypeUnspecified"] = "LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum["LineItemRecurrenceTypePeriodic"] = "LINE_ITEM_RECURRENCE_TYPE_PERIODIC";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum["LineItemRecurrenceTypeOneTime"] = "LINE_ITEM_RECURRENCE_TYPE_ONE_TIME";
})(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum || (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceTypeEnum = {}));
export var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateUnspecified"] = "LINE_ITEM_STATE_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateActive"] = "LINE_ITEM_STATE_ACTIVE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateInactive"] = "LINE_ITEM_STATE_INACTIVE";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateNew"] = "LINE_ITEM_STATE_NEW";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateActivating"] = "LINE_ITEM_STATE_ACTIVATING";
    GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum["LineItemStateDeactivating"] = "LINE_ITEM_STATE_DEACTIVATING";
})(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum || (GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemStateEnum = {}));
// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem
/**
 * Individual line item definition of a subscription. Next id: 8
**/
var GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=lineItemFreeTrialEndTime" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "lineItemFreeTrialEndTime", void 0);
    __decorate([
        Metadata({ data: "json, name=lineItemPromotionSpecs", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "lineItemPromotionSpecs", void 0);
    __decorate([
        Metadata({ data: "json, name=oneTimeRecurrenceDetails" }),
        __metadata("design:type", GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "oneTimeRecurrenceDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "product", void 0);
    __decorate([
        Metadata({ data: "json, name=recurrenceType" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "recurrenceType", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem.prototype, "state", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem;
}(SpeakeasyBase));
export { GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem };
