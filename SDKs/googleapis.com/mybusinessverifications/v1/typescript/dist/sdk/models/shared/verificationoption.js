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
import { AddressVerificationData } from "./addressverificationdata";
import { EmailVerificationData } from "./emailverificationdata";
export var VerificationOptionVerificationMethodEnum;
(function (VerificationOptionVerificationMethodEnum) {
    VerificationOptionVerificationMethodEnum["VerificationMethodUnspecified"] = "VERIFICATION_METHOD_UNSPECIFIED";
    VerificationOptionVerificationMethodEnum["Address"] = "ADDRESS";
    VerificationOptionVerificationMethodEnum["Email"] = "EMAIL";
    VerificationOptionVerificationMethodEnum["PhoneCall"] = "PHONE_CALL";
    VerificationOptionVerificationMethodEnum["Sms"] = "SMS";
    VerificationOptionVerificationMethodEnum["Auto"] = "AUTO";
    VerificationOptionVerificationMethodEnum["VettedPartner"] = "VETTED_PARTNER";
})(VerificationOptionVerificationMethodEnum || (VerificationOptionVerificationMethodEnum = {}));
// VerificationOption
/**
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
**/
var VerificationOption = /** @class */ (function (_super) {
    __extends(VerificationOption, _super);
    function VerificationOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=addressData" }),
        __metadata("design:type", AddressVerificationData)
    ], VerificationOption.prototype, "addressData", void 0);
    __decorate([
        Metadata({ data: "json, name=emailData" }),
        __metadata("design:type", EmailVerificationData)
    ], VerificationOption.prototype, "emailData", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], VerificationOption.prototype, "phoneNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=verificationMethod" }),
        __metadata("design:type", String)
    ], VerificationOption.prototype, "verificationMethod", void 0);
    return VerificationOption;
}(SpeakeasyBase));
export { VerificationOption };
