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
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";
var ShareProfileRequestPatientUserDemographics = /** @class */ (function (_super) {
    __extends(ShareProfileRequestPatientUserDemographics, _super);
    function ShareProfileRequestPatientUserDemographics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", PatientAddress)
    ], ShareProfileRequestPatientUserDemographics.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dayOfBirth" }),
        __metadata("design:type", Number)
    ], ShareProfileRequestPatientUserDemographics.prototype, "dayOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], ShareProfileRequestPatientUserDemographics.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthId" }),
        __metadata("design:type", String)
    ], ShareProfileRequestPatientUserDemographics.prototype, "healthId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthIdNumber" }),
        __metadata("design:type", String)
    ], ShareProfileRequestPatientUserDemographics.prototype, "healthIdNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifiers", elemType: Identifier }),
        __metadata("design:type", Array)
    ], ShareProfileRequestPatientUserDemographics.prototype, "identifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthOfBirth" }),
        __metadata("design:type", Number)
    ], ShareProfileRequestPatientUserDemographics.prototype, "monthOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ShareProfileRequestPatientUserDemographics.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yearOfBirth" }),
        __metadata("design:type", Number)
    ], ShareProfileRequestPatientUserDemographics.prototype, "yearOfBirth", void 0);
    return ShareProfileRequestPatientUserDemographics;
}(SpeakeasyBase));
export { ShareProfileRequestPatientUserDemographics };
var ShareProfileRequestPatient = /** @class */ (function (_super) {
    __extends(ShareProfileRequestPatient, _super);
    function ShareProfileRequestPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipCode" }),
        __metadata("design:type", String)
    ], ShareProfileRequestPatient.prototype, "hipCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDemographics" }),
        __metadata("design:type", ShareProfileRequestPatientUserDemographics)
    ], ShareProfileRequestPatient.prototype, "userDemographics", void 0);
    return ShareProfileRequestPatient;
}(SpeakeasyBase));
export { ShareProfileRequestPatient };
var ShareProfileRequest = /** @class */ (function (_super) {
    __extends(ShareProfileRequest, _super);
    function ShareProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", ShareProfileRequestPatient)
    ], ShareProfileRequest.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], ShareProfileRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], ShareProfileRequest.prototype, "timestamp", void 0);
    return ShareProfileRequest;
}(SpeakeasyBase));
export { ShareProfileRequest };
