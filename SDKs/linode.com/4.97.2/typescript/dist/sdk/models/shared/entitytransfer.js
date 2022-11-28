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
// EntityTransferEntities
/**
 * A collection of the entities to include in this transfer request, separated by type.
 *
**/
var EntityTransferEntities = /** @class */ (function (_super) {
    __extends(EntityTransferEntities, _super);
    function EntityTransferEntities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linodes" }),
        __metadata("design:type", Array)
    ], EntityTransferEntities.prototype, "linodes", void 0);
    return EntityTransferEntities;
}(SpeakeasyBase));
export { EntityTransferEntities };
export var EntityTransferStatusEnum;
(function (EntityTransferStatusEnum) {
    EntityTransferStatusEnum["Accepted"] = "accepted";
    EntityTransferStatusEnum["Cancelled"] = "cancelled";
    EntityTransferStatusEnum["Completed"] = "completed";
    EntityTransferStatusEnum["Failed"] = "failed";
    EntityTransferStatusEnum["Pending"] = "pending";
    EntityTransferStatusEnum["Stale"] = "stale";
})(EntityTransferStatusEnum || (EntityTransferStatusEnum = {}));
// EntityTransfer
/**
 * An object representing an Entity Transfer.
 *
**/
var EntityTransfer = /** @class */ (function (_super) {
    __extends(EntityTransfer, _super);
    function EntityTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], EntityTransfer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities" }),
        __metadata("design:type", EntityTransferEntities)
    ], EntityTransfer.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], EntityTransfer.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sender" }),
        __metadata("design:type", Boolean)
    ], EntityTransfer.prototype, "isSender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], EntityTransfer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], EntityTransfer.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], EntityTransfer.prototype, "updated", void 0);
    return EntityTransfer;
}(SpeakeasyBase));
export { EntityTransfer };
