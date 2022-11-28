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
var PatientIdentificationRequestQueryPatient = /** @class */ (function (_super) {
    __extends(PatientIdentificationRequestQueryPatient, _super);
    function PatientIdentificationRequestQueryPatient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatientIdentificationRequestQueryPatient.prototype, "id", void 0);
    return PatientIdentificationRequestQueryPatient;
}(SpeakeasyBase));
export { PatientIdentificationRequestQueryPatient };
export var PatientIdentificationRequestQueryRequesterTypeEnum;
(function (PatientIdentificationRequestQueryRequesterTypeEnum) {
    PatientIdentificationRequestQueryRequesterTypeEnum["Hiu"] = "HIU";
    PatientIdentificationRequestQueryRequesterTypeEnum["Hip"] = "HIP";
})(PatientIdentificationRequestQueryRequesterTypeEnum || (PatientIdentificationRequestQueryRequesterTypeEnum = {}));
var PatientIdentificationRequestQueryRequester = /** @class */ (function (_super) {
    __extends(PatientIdentificationRequestQueryRequester, _super);
    function PatientIdentificationRequestQueryRequester() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PatientIdentificationRequestQueryRequester.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PatientIdentificationRequestQueryRequester.prototype, "type", void 0);
    return PatientIdentificationRequestQueryRequester;
}(SpeakeasyBase));
export { PatientIdentificationRequestQueryRequester };
var PatientIdentificationRequestQuery = /** @class */ (function (_super) {
    __extends(PatientIdentificationRequestQuery, _super);
    function PatientIdentificationRequestQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patient" }),
        __metadata("design:type", PatientIdentificationRequestQueryPatient)
    ], PatientIdentificationRequestQuery.prototype, "patient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requester" }),
        __metadata("design:type", PatientIdentificationRequestQueryRequester)
    ], PatientIdentificationRequestQuery.prototype, "requester", void 0);
    return PatientIdentificationRequestQuery;
}(SpeakeasyBase));
export { PatientIdentificationRequestQuery };
var PatientIdentificationRequest = /** @class */ (function (_super) {
    __extends(PatientIdentificationRequest, _super);
    function PatientIdentificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", PatientIdentificationRequestQuery)
    ], PatientIdentificationRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], PatientIdentificationRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], PatientIdentificationRequest.prototype, "timestamp", void 0);
    return PatientIdentificationRequest;
}(SpeakeasyBase));
export { PatientIdentificationRequest };
