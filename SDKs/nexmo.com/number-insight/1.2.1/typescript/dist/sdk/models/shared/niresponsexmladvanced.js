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
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRoaming } from "./niroaming";
export var NiResponseXmlAdvancedCallerTypeEnum;
(function (NiResponseXmlAdvancedCallerTypeEnum) {
    NiResponseXmlAdvancedCallerTypeEnum["Business"] = "business";
    NiResponseXmlAdvancedCallerTypeEnum["Consumer"] = "consumer";
    NiResponseXmlAdvancedCallerTypeEnum["Unknown"] = "unknown";
})(NiResponseXmlAdvancedCallerTypeEnum || (NiResponseXmlAdvancedCallerTypeEnum = {}));
// NiResponseXmlAdvancedError
/**
 * The error code and status of your request
**/
var NiResponseXmlAdvancedError = /** @class */ (function (_super) {
    __extends(NiResponseXmlAdvancedError, _super);
    function NiResponseXmlAdvancedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedError.prototype, "statusText", void 0);
    return NiResponseXmlAdvancedError;
}(SpeakeasyBase));
export { NiResponseXmlAdvancedError };
// NiResponseXmlAdvancedLocalNumber
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
var NiResponseXmlAdvancedLocalNumber = /** @class */ (function (_super) {
    __extends(NiResponseXmlAdvancedLocalNumber, _super);
    function NiResponseXmlAdvancedLocalNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLocalNumber.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLocalNumber.prototype, "countryCodeIso3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLocalNumber.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLocalNumber.prototype, "countryPrefix", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLocalNumber.prototype, "number", void 0);
    return NiResponseXmlAdvancedLocalNumber;
}(SpeakeasyBase));
export { NiResponseXmlAdvancedLocalNumber };
// NiResponseXmlAdvancedLookupOutcome
/**
 * An object indicating whether all information about a phone number has been returned.
**/
var NiResponseXmlAdvancedLookupOutcome = /** @class */ (function (_super) {
    __extends(NiResponseXmlAdvancedLookupOutcome, _super);
    function NiResponseXmlAdvancedLookupOutcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NiResponseXmlAdvancedLookupOutcome.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvancedLookupOutcome.prototype, "lookupOutcomeMessage", void 0);
    return NiResponseXmlAdvancedLookupOutcome;
}(SpeakeasyBase));
export { NiResponseXmlAdvancedLookupOutcome };
export var NiResponseXmlAdvancedReachableEnum;
(function (NiResponseXmlAdvancedReachableEnum) {
    NiResponseXmlAdvancedReachableEnum["Unknown"] = "unknown";
    NiResponseXmlAdvancedReachableEnum["Reachable"] = "reachable";
    NiResponseXmlAdvancedReachableEnum["Undeliverable"] = "undeliverable";
    NiResponseXmlAdvancedReachableEnum["Absent"] = "absent";
    NiResponseXmlAdvancedReachableEnum["BadNumber"] = "bad_number";
    NiResponseXmlAdvancedReachableEnum["Blacklisted"] = "blacklisted";
    NiResponseXmlAdvancedReachableEnum["Null"] = "null";
})(NiResponseXmlAdvancedReachableEnum || (NiResponseXmlAdvancedReachableEnum = {}));
export var NiResponseXmlAdvancedValidNumberEnum;
(function (NiResponseXmlAdvancedValidNumberEnum) {
    NiResponseXmlAdvancedValidNumberEnum["Unknown"] = "unknown";
    NiResponseXmlAdvancedValidNumberEnum["Valid"] = "valid";
    NiResponseXmlAdvancedValidNumberEnum["NotValid"] = "not_valid";
    NiResponseXmlAdvancedValidNumberEnum["InferredNotValid"] = "inferred_not_valid";
})(NiResponseXmlAdvancedValidNumberEnum || (NiResponseXmlAdvancedValidNumberEnum = {}));
// NiResponseXmlAdvanced
/**
 * Advanced
**/
var NiResponseXmlAdvanced = /** @class */ (function (_super) {
    __extends(NiResponseXmlAdvanced, _super);
    function NiResponseXmlAdvanced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NiResponseXmlAdvanced.prototype, "callerIdentity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "callerName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "callerType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiCurrentCarrierProperties)
    ], NiResponseXmlAdvanced.prototype, "currentCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlAdvancedError)
    ], NiResponseXmlAdvanced.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "firsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "internationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "ipWarnings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlAdvancedLocalNumber)
    ], NiResponseXmlAdvanced.prototype, "localNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlAdvancedLookupOutcome)
    ], NiResponseXmlAdvanced.prototype, "lookupOutcome", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiInitialCarrierProperties)
    ], NiResponseXmlAdvanced.prototype, "originalCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NiResponseXmlAdvanced.prototype, "ported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "reachable", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "remainingBalance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "requestPrice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiRoaming)
    ], NiResponseXmlAdvanced.prototype, "roaming", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlAdvanced.prototype, "validNumber", void 0);
    return NiResponseXmlAdvanced;
}(SpeakeasyBase));
export { NiResponseXmlAdvanced };
