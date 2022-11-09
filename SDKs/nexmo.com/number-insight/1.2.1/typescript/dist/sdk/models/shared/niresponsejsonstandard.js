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
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export var NiResponseJsonStandardCallerTypeEnum;
(function (NiResponseJsonStandardCallerTypeEnum) {
    NiResponseJsonStandardCallerTypeEnum["Business"] = "business";
    NiResponseJsonStandardCallerTypeEnum["Consumer"] = "consumer";
    NiResponseJsonStandardCallerTypeEnum["Unknown"] = "unknown";
})(NiResponseJsonStandardCallerTypeEnum || (NiResponseJsonStandardCallerTypeEnum = {}));
export var NiResponseJsonStandardCurrentCarrierNetworkTypeEnum;
(function (NiResponseJsonStandardCurrentCarrierNetworkTypeEnum) {
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Mobile"] = "mobile";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Landline"] = "landline";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["LandlinePremium"] = "landline_premium";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["LandlineTollfree"] = "landline_tollfree";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Virtual"] = "virtual";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Unknown"] = "unknown";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Pager"] = "pager";
    NiResponseJsonStandardCurrentCarrierNetworkTypeEnum["Null"] = "null";
})(NiResponseJsonStandardCurrentCarrierNetworkTypeEnum || (NiResponseJsonStandardCurrentCarrierNetworkTypeEnum = {}));
var NiResponseJsonStandardCurrentCarrier = /** @class */ (function (_super) {
    __extends(NiResponseJsonStandardCurrentCarrier, _super);
    function NiResponseJsonStandardCurrentCarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandardCurrentCarrier.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandardCurrentCarrier.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=network_code" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandardCurrentCarrier.prototype, "networkCode", void 0);
    __decorate([
        Metadata({ data: "json, name=network_type" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandardCurrentCarrier.prototype, "networkType", void 0);
    return NiResponseJsonStandardCurrentCarrier;
}(SpeakeasyBase));
export { NiResponseJsonStandardCurrentCarrier };
export var NiResponseJsonStandardPortedEnum;
(function (NiResponseJsonStandardPortedEnum) {
    NiResponseJsonStandardPortedEnum["Unknown"] = "unknown";
    NiResponseJsonStandardPortedEnum["Ported"] = "ported";
    NiResponseJsonStandardPortedEnum["NotPorted"] = "not_ported";
    NiResponseJsonStandardPortedEnum["AssumedNotPorted"] = "assumed_not_ported";
    NiResponseJsonStandardPortedEnum["AssumedPorted"] = "assumed_ported";
    NiResponseJsonStandardPortedEnum["Null"] = "null";
})(NiResponseJsonStandardPortedEnum || (NiResponseJsonStandardPortedEnum = {}));
// NiResponseJsonStandard
/**
 * Standard Response
**/
var NiResponseJsonStandard = /** @class */ (function (_super) {
    __extends(NiResponseJsonStandard, _super);
    function NiResponseJsonStandard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=caller_identity" }),
        __metadata("design:type", NiCallerIdentity)
    ], NiResponseJsonStandard.prototype, "callerIdentity", void 0);
    __decorate([
        Metadata({ data: "json, name=caller_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "callerName", void 0);
    __decorate([
        Metadata({ data: "json, name=caller_type" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "callerType", void 0);
    __decorate([
        Metadata({ data: "json, name=country_code" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "countryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=country_code_iso3" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "countryCodeIso3", void 0);
    __decorate([
        Metadata({ data: "json, name=country_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "countryName", void 0);
    __decorate([
        Metadata({ data: "json, name=country_prefix" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "countryPrefix", void 0);
    __decorate([
        Metadata({ data: "json, name=current_carrier" }),
        __metadata("design:type", NiResponseJsonStandardCurrentCarrier)
    ], NiResponseJsonStandard.prototype, "currentCarrier", void 0);
    __decorate([
        Metadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "json, name=international_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "internationalFormatNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "json, name=national_format_number" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "nationalFormatNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=original_carrier" }),
        __metadata("design:type", NiInitialCarrierProperties)
    ], NiResponseJsonStandard.prototype, "originalCarrier", void 0);
    __decorate([
        Metadata({ data: "json, name=ported" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "ported", void 0);
    __decorate([
        Metadata({ data: "json, name=refund_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "refundPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=remaining_balance" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "remainingBalance", void 0);
    __decorate([
        Metadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "json, name=request_price" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "requestPrice", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], NiResponseJsonStandard.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=status_message" }),
        __metadata("design:type", String)
    ], NiResponseJsonStandard.prototype, "statusMessage", void 0);
    return NiResponseJsonStandard;
}(SpeakeasyBase));
export { NiResponseJsonStandard };
