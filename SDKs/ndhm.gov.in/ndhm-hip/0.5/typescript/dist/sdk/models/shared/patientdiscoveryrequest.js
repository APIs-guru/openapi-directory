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
import { Identifier } from "./identifier";
export var PatientDiscoveryRequestPatientGenderEnum;
(function (PatientDiscoveryRequestPatientGenderEnum) {
    PatientDiscoveryRequestPatientGenderEnum["M"] = "M";
    PatientDiscoveryRequestPatientGenderEnum["F"] = "F";
    PatientDiscoveryRequestPatientGenderEnum["O"] = "O";
    PatientDiscoveryRequestPatientGenderEnum["U"] = "U";
})(PatientDiscoveryRequestPatientGenderEnum || (PatientDiscoveryRequestPatientGenderEnum = {}));
var PatientDiscoveryRequestPatient = /** @class */ (function (_super) {
    __extends(PatientDiscoveryRequestPatient, _super);
    function PatientDiscoveryRequestPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], PatientDiscoveryRequestPatient.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatientDiscoveryRequestPatient.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatientDiscoveryRequestPatient.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unverifiedIdentifiers", elemType: Identifier }),
        __metadata("design:type", Array)
    ], PatientDiscoveryRequestPatient.prototype, "unverifiedIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifiedIdentifiers", elemType: Identifier }),
        __metadata("design:type", Array)
    ], PatientDiscoveryRequestPatient.prototype, "verifiedIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yearOfBirth" }),
        __metadata("design:type", Number)
    ], PatientDiscoveryRequestPatient.prototype, "yearOfBirth", void 0);
    return PatientDiscoveryRequestPatient;
}(SpeakeasyBase));
export { PatientDiscoveryRequestPatient };
var PatientDiscoveryRequest = /** @class */ (function (_super) {
    __extends(PatientDiscoveryRequest, _super);
    function PatientDiscoveryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", PatientDiscoveryRequestPatient)
    ], PatientDiscoveryRequest.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], PatientDiscoveryRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], PatientDiscoveryRequest.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], PatientDiscoveryRequest.prototype, "transactionId", void 0);
    return PatientDiscoveryRequest;
}(SpeakeasyBase));
export { PatientDiscoveryRequest };
