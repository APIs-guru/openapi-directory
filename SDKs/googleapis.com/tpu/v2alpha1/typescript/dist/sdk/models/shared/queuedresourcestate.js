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
import { FailedData } from "./faileddata";
export var QueuedResourceStateStateEnum;
(function (QueuedResourceStateStateEnum) {
    QueuedResourceStateStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    QueuedResourceStateStateEnum["Creating"] = "CREATING";
    QueuedResourceStateStateEnum["Accepted"] = "ACCEPTED";
    QueuedResourceStateStateEnum["Provisioning"] = "PROVISIONING";
    QueuedResourceStateStateEnum["Failed"] = "FAILED";
    QueuedResourceStateStateEnum["Deleting"] = "DELETING";
    QueuedResourceStateStateEnum["Active"] = "ACTIVE";
    QueuedResourceStateStateEnum["Suspending"] = "SUSPENDING";
    QueuedResourceStateStateEnum["Suspended"] = "SUSPENDED";
})(QueuedResourceStateStateEnum || (QueuedResourceStateStateEnum = {}));
// QueuedResourceState
/**
 * QueuedResourceState defines the details of the QueuedResource request.
**/
var QueuedResourceState = /** @class */ (function (_super) {
    __extends(QueuedResourceState, _super);
    function QueuedResourceState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptedData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "acceptedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "activeData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatingData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "creatingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletingData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "deletingData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failedData" }),
        __metadata("design:type", FailedData)
    ], QueuedResourceState.prototype, "failedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisioningData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "provisioningData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], QueuedResourceState.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspendedData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "suspendedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspendingData" }),
        __metadata("design:type", Map)
    ], QueuedResourceState.prototype, "suspendingData", void 0);
    return QueuedResourceState;
}(SpeakeasyBase));
export { QueuedResourceState };
