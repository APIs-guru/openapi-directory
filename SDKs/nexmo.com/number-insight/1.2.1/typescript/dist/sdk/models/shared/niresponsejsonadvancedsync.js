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
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRealtimeData } from "./nirealtimedata";
import { NiRoaming } from "./niroaming";
export var NiResponseJsonAdvancedSyncPortedEnum;
(function (NiResponseJsonAdvancedSyncPortedEnum) {
    NiResponseJsonAdvancedSyncPortedEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedSyncPortedEnum["Ported"] = "ported";
    NiResponseJsonAdvancedSyncPortedEnum["NotPorted"] = "not_ported";
    NiResponseJsonAdvancedSyncPortedEnum["AssumedNotPorted"] = "assumed_not_ported";
    NiResponseJsonAdvancedSyncPortedEnum["AssumedPorted"] = "assumed_ported";
    NiResponseJsonAdvancedSyncPortedEnum["Null"] = "null";
})(NiResponseJsonAdvancedSyncPortedEnum || (NiResponseJsonAdvancedSyncPortedEnum = {}));
export var NiResponseJsonAdvancedSyncReachableEnum;
(function (NiResponseJsonAdvancedSyncReachableEnum) {
    NiResponseJsonAdvancedSyncReachableEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedSyncReachableEnum["Reachable"] = "reachable";
    NiResponseJsonAdvancedSyncReachableEnum["Undeliverable"] = "undeliverable";
    NiResponseJsonAdvancedSyncReachableEnum["Absent"] = "absent";
    NiResponseJsonAdvancedSyncReachableEnum["BadNumber"] = "bad_number";
    NiResponseJsonAdvancedSyncReachableEnum["Blacklisted"] = "blacklisted";
    NiResponseJsonAdvancedSyncReachableEnum["Null"] = "null";
})(NiResponseJsonAdvancedSyncReachableEnum || (NiResponseJsonAdvancedSyncReachableEnum = {}));
export var NiResponseJsonAdvancedSyncValidNumberEnum;
(function (NiResponseJsonAdvancedSyncValidNumberEnum) {
    NiResponseJsonAdvancedSyncValidNumberEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedSyncValidNumberEnum["Valid"] = "valid";
    NiResponseJsonAdvancedSyncValidNumberEnum["NotValid"] = "not_valid";
    NiResponseJsonAdvancedSyncValidNumberEnum["Inferred"] = "inferred";
    NiResponseJsonAdvancedSyncValidNumberEnum["InferredNotValid"] = "inferred_not_valid";
})(NiResponseJsonAdvancedSyncValidNumberEnum || (NiResponseJsonAdvancedSyncValidNumberEnum = {}));
// NiResponseJsonAdvancedSync
/**
 * Advanced Response (sync)
**/
var NiResponseJsonAdvancedSync = /** @class */ (function (_super) {
    __extends(NiResponseJsonAdvancedSync, _super);
    function NiResponseJsonAdvancedSync() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caller_identity" }),
        __metadata("design:type", NiCallerIdentity)
    ], NiResponseJsonAdvancedSync.prototype, "callerIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_code_iso3" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "countryCodeIso3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country_prefix" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "countryPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_carrier" }),
        __metadata("design:type", NiCurrentCarrierProperties)
    ], NiResponseJsonAdvancedSync.prototype, "currentCarrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=international_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "internationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookup_outcome" }),
        __metadata("design:type", Number)
    ], NiResponseJsonAdvancedSync.prototype, "lookupOutcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lookup_outcome_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "lookupOutcomeMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=national_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "nationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_carrier" }),
        __metadata("design:type", NiInitialCarrierProperties)
    ], NiResponseJsonAdvancedSync.prototype, "originalCarrier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ported" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "ported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachable" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "reachable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=real_time_data" }),
        __metadata("design:type", NiRealtimeData)
    ], NiResponseJsonAdvancedSync.prototype, "realTimeData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refund_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "refundPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remaining_balance" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "remainingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "requestPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roaming" }),
        __metadata("design:type", NiRoaming)
    ], NiResponseJsonAdvancedSync.prototype, "roaming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], NiResponseJsonAdvancedSync.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valid_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedSync.prototype, "validNumber", void 0);
    return NiResponseJsonAdvancedSync;
}(SpeakeasyBase));
export { NiResponseJsonAdvancedSync };
