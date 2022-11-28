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
import { GoogleCloudDialogflowCxV3beta1ExperimentDefinition } from "./googleclouddialogflowcxv3beta1experimentdefinition";
import { GoogleCloudDialogflowCxV3beta1ExperimentResult } from "./googleclouddialogflowcxv3beta1experimentresult";
import { GoogleCloudDialogflowCxV3beta1RolloutConfig } from "./googleclouddialogflowcxv3beta1rolloutconfig";
import { GoogleCloudDialogflowCxV3beta1RolloutState } from "./googleclouddialogflowcxv3beta1rolloutstate";
import { GoogleCloudDialogflowCxV3beta1VariantsHistory } from "./googleclouddialogflowcxv3beta1variantshistory";
export var GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;
(function (GoogleCloudDialogflowCxV3beta1ExperimentStateEnum) {
    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum["Draft"] = "DRAFT";
    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum["Running"] = "RUNNING";
    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum["Done"] = "DONE";
    GoogleCloudDialogflowCxV3beta1ExperimentStateEnum["RolloutFailed"] = "ROLLOUT_FAILED";
})(GoogleCloudDialogflowCxV3beta1ExperimentStateEnum || (GoogleCloudDialogflowCxV3beta1ExperimentStateEnum = {}));
// GoogleCloudDialogflowCxV3beta1Experiment
/**
 * Represents an experiment in an environment.
**/
var GoogleCloudDialogflowCxV3beta1Experiment = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Experiment, _super);
    function GoogleCloudDialogflowCxV3beta1Experiment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ExperimentDefinition)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentLength" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "experimentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ExperimentResult)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1RolloutConfig)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "rolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutFailureReason" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "rolloutFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutState" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1RolloutState)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "rolloutState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantsHistory", elemType: GoogleCloudDialogflowCxV3beta1VariantsHistory }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Experiment.prototype, "variantsHistory", void 0);
    return GoogleCloudDialogflowCxV3beta1Experiment;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Experiment };
