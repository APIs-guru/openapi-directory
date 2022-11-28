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
export var InventorySourceStatusConfigStatusEnum;
(function (InventorySourceStatusConfigStatusEnum) {
    InventorySourceStatusConfigStatusEnum["InventorySourceConfigStatusUnspecified"] = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED";
    InventorySourceStatusConfigStatusEnum["InventorySourceConfigStatusPending"] = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING";
    InventorySourceStatusConfigStatusEnum["InventorySourceConfigStatusCompleted"] = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED";
})(InventorySourceStatusConfigStatusEnum || (InventorySourceStatusConfigStatusEnum = {}));
export var InventorySourceStatusEntityStatusEnum;
(function (InventorySourceStatusEntityStatusEnum) {
    InventorySourceStatusEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    InventorySourceStatusEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    InventorySourceStatusEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    InventorySourceStatusEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    InventorySourceStatusEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    InventorySourceStatusEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(InventorySourceStatusEntityStatusEnum || (InventorySourceStatusEntityStatusEnum = {}));
export var InventorySourceStatusSellerStatusEnum;
(function (InventorySourceStatusSellerStatusEnum) {
    InventorySourceStatusSellerStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    InventorySourceStatusSellerStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    InventorySourceStatusSellerStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    InventorySourceStatusSellerStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    InventorySourceStatusSellerStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    InventorySourceStatusSellerStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(InventorySourceStatusSellerStatusEnum || (InventorySourceStatusSellerStatusEnum = {}));
// InventorySourceStatus
/**
 * The status related settings of the inventory source.
**/
var InventorySourceStatus = /** @class */ (function (_super) {
    __extends(InventorySourceStatus, _super);
    function InventorySourceStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configStatus" }),
        __metadata("design:type", String)
    ], InventorySourceStatus.prototype, "configStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityPauseReason" }),
        __metadata("design:type", String)
    ], InventorySourceStatus.prototype, "entityPauseReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], InventorySourceStatus.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerPauseReason" }),
        __metadata("design:type", String)
    ], InventorySourceStatus.prototype, "sellerPauseReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerStatus" }),
        __metadata("design:type", String)
    ], InventorySourceStatus.prototype, "sellerStatus", void 0);
    return InventorySourceStatus;
}(SpeakeasyBase));
export { InventorySourceStatus };
// InventorySourceStatusInput
/**
 * The status related settings of the inventory source.
**/
var InventorySourceStatusInput = /** @class */ (function (_super) {
    __extends(InventorySourceStatusInput, _super);
    function InventorySourceStatusInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityPauseReason" }),
        __metadata("design:type", String)
    ], InventorySourceStatusInput.prototype, "entityPauseReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], InventorySourceStatusInput.prototype, "entityStatus", void 0);
    return InventorySourceStatusInput;
}(SpeakeasyBase));
export { InventorySourceStatusInput };
