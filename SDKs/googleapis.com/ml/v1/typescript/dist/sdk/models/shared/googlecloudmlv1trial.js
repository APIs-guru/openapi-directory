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
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1TrialParameter } from "./googlecloudmlv1trialparameter";
export var GoogleCloudMlV1TrialStateEnum;
(function (GoogleCloudMlV1TrialStateEnum) {
    GoogleCloudMlV1TrialStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudMlV1TrialStateEnum["Requested"] = "REQUESTED";
    GoogleCloudMlV1TrialStateEnum["Active"] = "ACTIVE";
    GoogleCloudMlV1TrialStateEnum["Completed"] = "COMPLETED";
    GoogleCloudMlV1TrialStateEnum["Stopping"] = "STOPPING";
})(GoogleCloudMlV1TrialStateEnum || (GoogleCloudMlV1TrialStateEnum = {}));
// GoogleCloudMlV1TrialInput
/**
 * A message representing a trial.
**/
var GoogleCloudMlV1TrialInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1TrialInput, _super);
    function GoogleCloudMlV1TrialInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalMeasurement" }),
        __metadata("design:type", GoogleCloudMlV1Measurement)
    ], GoogleCloudMlV1TrialInput.prototype, "finalMeasurement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurements", elemType: GoogleCloudMlV1Measurement }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrialInput.prototype, "measurements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1TrialParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrialInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrialInput.prototype, "state", void 0);
    return GoogleCloudMlV1TrialInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1TrialInput };
// GoogleCloudMlV1Trial
/**
 * A message representing a trial.
**/
var GoogleCloudMlV1Trial = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1Trial, _super);
    function GoogleCloudMlV1Trial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalMeasurement" }),
        __metadata("design:type", GoogleCloudMlV1Measurement)
    ], GoogleCloudMlV1Trial.prototype, "finalMeasurement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infeasibleReason" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "infeasibleReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurements", elemType: GoogleCloudMlV1Measurement }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1Trial.prototype, "measurements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1TrialParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1Trial.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Trial.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialInfeasible" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1Trial.prototype, "trialInfeasible", void 0);
    return GoogleCloudMlV1Trial;
}(SpeakeasyBase));
export { GoogleCloudMlV1Trial };
