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
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
export var NiResponseXmlStandardCallerIdentityCallerTypeEnum;
(function (NiResponseXmlStandardCallerIdentityCallerTypeEnum) {
    NiResponseXmlStandardCallerIdentityCallerTypeEnum["Business"] = "business";
    NiResponseXmlStandardCallerIdentityCallerTypeEnum["Consumer"] = "consumer";
    NiResponseXmlStandardCallerIdentityCallerTypeEnum["Unknown"] = "unknown";
})(NiResponseXmlStandardCallerIdentityCallerTypeEnum || (NiResponseXmlStandardCallerIdentityCallerTypeEnum = {}));
// NiResponseXmlStandardCallerIdentity
/**
 * Contains details of the number owner, if `cnam` was set to `true` in the request.
**/
var NiResponseXmlStandardCallerIdentity = /** @class */ (function (_super) {
    __extends(NiResponseXmlStandardCallerIdentity, _super);
    function NiResponseXmlStandardCallerIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "callerName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "callerType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "callerName1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "callerType1", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "firsName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCallerIdentity.prototype, "lastName1", void 0);
    return NiResponseXmlStandardCallerIdentity;
}(SpeakeasyBase));
export { NiResponseXmlStandardCallerIdentity };
export var NiResponseXmlStandardCurrentCarrierNetworkTypeEnum;
(function (NiResponseXmlStandardCurrentCarrierNetworkTypeEnum) {
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Mobile"] = "mobile";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Landline"] = "landline";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["LandlinePremium"] = "landline_premium";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["LandlineTollfree"] = "landline_tollfree";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Virtual"] = "virtual";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Unknown"] = "unknown";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Pager"] = "pager";
    NiResponseXmlStandardCurrentCarrierNetworkTypeEnum["Null"] = "null";
})(NiResponseXmlStandardCurrentCarrierNetworkTypeEnum || (NiResponseXmlStandardCurrentCarrierNetworkTypeEnum = {}));
var NiResponseXmlStandardCurrentCarrier = /** @class */ (function (_super) {
    __extends(NiResponseXmlStandardCurrentCarrier, _super);
    function NiResponseXmlStandardCurrentCarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCurrentCarrier.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCurrentCarrier.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCurrentCarrier.prototype, "networkCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardCurrentCarrier.prototype, "networkType", void 0);
    return NiResponseXmlStandardCurrentCarrier;
}(SpeakeasyBase));
export { NiResponseXmlStandardCurrentCarrier };
// NiResponseXmlStandardError
/**
 * The error code and status of your request
**/
var NiResponseXmlStandardError = /** @class */ (function (_super) {
    __extends(NiResponseXmlStandardError, _super);
    function NiResponseXmlStandardError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardError.prototype, "statusText", void 0);
    return NiResponseXmlStandardError;
}(SpeakeasyBase));
export { NiResponseXmlStandardError };
// NiResponseXmlStandardLocalNumber
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
var NiResponseXmlStandardLocalNumber = /** @class */ (function (_super) {
    __extends(NiResponseXmlStandardLocalNumber, _super);
    function NiResponseXmlStandardLocalNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardLocalNumber.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardLocalNumber.prototype, "countryCodeIso3", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardLocalNumber.prototype, "countryName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardLocalNumber.prototype, "countryPrefix", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandardLocalNumber.prototype, "number", void 0);
    return NiResponseXmlStandardLocalNumber;
}(SpeakeasyBase));
export { NiResponseXmlStandardLocalNumber };
// NiResponseXmlStandard
/**
 * Standard
**/
var NiResponseXmlStandard = /** @class */ (function (_super) {
    __extends(NiResponseXmlStandard, _super);
    function NiResponseXmlStandard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlStandardCallerIdentity)
    ], NiResponseXmlStandard.prototype, "callerIdentity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlStandardCurrentCarrier)
    ], NiResponseXmlStandard.prototype, "currentCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlStandardError)
    ], NiResponseXmlStandard.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandard.prototype, "internationalFormatNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiResponseXmlStandardLocalNumber)
    ], NiResponseXmlStandard.prototype, "localNumber", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NiInitialCarrierProperties)
    ], NiResponseXmlStandard.prototype, "originalCarrier", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], NiResponseXmlStandard.prototype, "ported", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandard.prototype, "remainingBalance", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandard.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NiResponseXmlStandard.prototype, "requestPrice", void 0);
    return NiResponseXmlStandard;
}(SpeakeasyBase));
export { NiResponseXmlStandard };
