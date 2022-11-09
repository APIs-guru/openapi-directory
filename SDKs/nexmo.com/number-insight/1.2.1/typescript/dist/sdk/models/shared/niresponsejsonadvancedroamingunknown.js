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
import { NiCallerIdentity } from "./nicalleridentity";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export var NiResponseJsonAdvancedRoamingUnknownPortedEnum;
(function (NiResponseJsonAdvancedRoamingUnknownPortedEnum) {
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["Ported"] = "ported";
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["NotPorted"] = "not_ported";
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["AssumedNotPorted"] = "assumed_not_ported";
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["AssumedPorted"] = "assumed_ported";
    NiResponseJsonAdvancedRoamingUnknownPortedEnum["Null"] = "null";
})(NiResponseJsonAdvancedRoamingUnknownPortedEnum || (NiResponseJsonAdvancedRoamingUnknownPortedEnum = {}));
export var NiResponseJsonAdvancedRoamingUnknownReachableEnum;
(function (NiResponseJsonAdvancedRoamingUnknownReachableEnum) {
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Reachable"] = "reachable";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Undeliverable"] = "undeliverable";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Absent"] = "absent";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["BadNumber"] = "bad_number";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Blacklisted"] = "blacklisted";
    NiResponseJsonAdvancedRoamingUnknownReachableEnum["Null"] = "null";
})(NiResponseJsonAdvancedRoamingUnknownReachableEnum || (NiResponseJsonAdvancedRoamingUnknownReachableEnum = {}));
export var NiResponseJsonAdvancedRoamingUnknownRoamingEnum;
(function (NiResponseJsonAdvancedRoamingUnknownRoamingEnum) {
    NiResponseJsonAdvancedRoamingUnknownRoamingEnum["Unknown"] = "unknown";
})(NiResponseJsonAdvancedRoamingUnknownRoamingEnum || (NiResponseJsonAdvancedRoamingUnknownRoamingEnum = {}));
export var NiResponseJsonAdvancedRoamingUnknownValidNumberEnum;
(function (NiResponseJsonAdvancedRoamingUnknownValidNumberEnum) {
    NiResponseJsonAdvancedRoamingUnknownValidNumberEnum["Unknown"] = "unknown";
    NiResponseJsonAdvancedRoamingUnknownValidNumberEnum["Valid"] = "valid";
    NiResponseJsonAdvancedRoamingUnknownValidNumberEnum["NotValid"] = "not_valid";
    NiResponseJsonAdvancedRoamingUnknownValidNumberEnum["Inferred"] = "inferred";
    NiResponseJsonAdvancedRoamingUnknownValidNumberEnum["InferredNotValid"] = "inferred_not_valid";
})(NiResponseJsonAdvancedRoamingUnknownValidNumberEnum || (NiResponseJsonAdvancedRoamingUnknownValidNumberEnum = {}));
// NiResponseJsonAdvancedRoamingUnknown
/**
 * Unknown Roaming
**/
var NiResponseJsonAdvancedRoamingUnknown = /** @class */ (function (_super) {
    __extends(NiResponseJsonAdvancedRoamingUnknown, _super);
    function NiResponseJsonAdvancedRoamingUnknown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=caller_identity" }),
        __metadata("design:type", NiCallerIdentity)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "callerIdentity", void 0);
    __decorate([
        Metadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=country_code_iso3" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "countryCodeIso3", void 0);
    __decorate([
        Metadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "countryName", void 0);
    __decorate([
        Metadata({ data: "json, name=country_prefix" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "countryPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=current_carrier" }),
        __metadata("design:type", NiCurrentCarrierProperties)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "currentCarrier", void 0);
    __decorate([
        Metadata({ data: "json, name=international_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "internationalFormatNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=lookup_outcome" }),
        __metadata("design:type", Number)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "lookupOutcome", void 0);
    __decorate([
        Metadata({ data: "json, name=lookup_outcome_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "lookupOutcomeMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=national_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "nationalFormatNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=original_carrier" }),
        __metadata("design:type", NiInitialCarrierProperties)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "originalCarrier", void 0);
    __decorate([
        Metadata({ data: "json, name=ported" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "ported", void 0);
    __decorate([
        Metadata({ data: "json, name=reachable" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "reachable", void 0);
    __decorate([
        Metadata({ data: "json, name=refund_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "refundPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=remaining_balance" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "remainingBalance", void 0);
    __decorate([
        Metadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "json, name=request_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "requestPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=roaming" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "roaming", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "statusMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=valid_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonAdvancedRoamingUnknown.prototype, "validNumber", void 0);
    return NiResponseJsonAdvancedRoamingUnknown;
}(SpeakeasyBase));
export { NiResponseJsonAdvancedRoamingUnknown };
