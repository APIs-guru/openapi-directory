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
// ServiceTransferEntities
/**
 * A collection of the services to include in this transfer request, separated by type.
 *
**/
var ServiceTransferEntities = /** @class */ (function (_super) {
    __extends(ServiceTransferEntities, _super);
    function ServiceTransferEntities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linodes" }),
        __metadata("design:type", Array)
    ], ServiceTransferEntities.prototype, "linodes", void 0);
    return ServiceTransferEntities;
}(SpeakeasyBase));
export { ServiceTransferEntities };
export var ServiceTransferStatusEnum;
(function (ServiceTransferStatusEnum) {
    ServiceTransferStatusEnum["Accepted"] = "accepted";
    ServiceTransferStatusEnum["Cancelled"] = "cancelled";
    ServiceTransferStatusEnum["Completed"] = "completed";
    ServiceTransferStatusEnum["Failed"] = "failed";
    ServiceTransferStatusEnum["Pending"] = "pending";
    ServiceTransferStatusEnum["Stale"] = "stale";
})(ServiceTransferStatusEnum || (ServiceTransferStatusEnum = {}));
// ServiceTransfer
/**
 * An object representing a Service Transfer.
 *
**/
var ServiceTransfer = /** @class */ (function (_super) {
    __extends(ServiceTransfer, _super);
    function ServiceTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ServiceTransfer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities" }),
        __metadata("design:type", ServiceTransferEntities)
    ], ServiceTransfer.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], ServiceTransfer.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_sender" }),
        __metadata("design:type", Boolean)
    ], ServiceTransfer.prototype, "isSender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ServiceTransfer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], ServiceTransfer.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], ServiceTransfer.prototype, "updated", void 0);
    return ServiceTransfer;
}(SpeakeasyBase));
export { ServiceTransfer };
