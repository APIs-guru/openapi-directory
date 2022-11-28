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
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { AccessTokenValidity } from "./accesstokenvalidity";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
// PatientAuthConfirmResponseAuth
/**
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 *
**/
var PatientAuthConfirmResponseAuth = /** @class */ (function (_super) {
    __extends(PatientAuthConfirmResponseAuth, _super);
    function PatientAuthConfirmResponseAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], PatientAuthConfirmResponseAuth.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", PatientDemographicResponse)
    ], PatientAuthConfirmResponseAuth.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validity" }),
        __metadata("design:type", AccessTokenValidity)
    ], PatientAuthConfirmResponseAuth.prototype, "validity", void 0);
    return PatientAuthConfirmResponseAuth;
}(SpeakeasyBase));
export { PatientAuthConfirmResponseAuth };
var PatientAuthConfirmResponse = /** @class */ (function (_super) {
    __extends(PatientAuthConfirmResponse, _super);
    function PatientAuthConfirmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth" }),
        __metadata("design:type", PatientAuthConfirmResponseAuth)
    ], PatientAuthConfirmResponse.prototype, "auth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], PatientAuthConfirmResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], PatientAuthConfirmResponse.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resp" }),
        __metadata("design:type", RequestReference)
    ], PatientAuthConfirmResponse.prototype, "resp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], PatientAuthConfirmResponse.prototype, "timestamp", void 0);
    return PatientAuthConfirmResponse;
}(SpeakeasyBase));
export { PatientAuthConfirmResponse };
