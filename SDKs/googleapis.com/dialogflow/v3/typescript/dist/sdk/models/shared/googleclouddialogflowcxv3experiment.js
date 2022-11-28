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
import { GoogleCloudDialogflowCxV3ExperimentDefinition } from "./googleclouddialogflowcxv3experimentdefinition";
import { GoogleCloudDialogflowCxV3ExperimentResult } from "./googleclouddialogflowcxv3experimentresult";
import { GoogleCloudDialogflowCxV3RolloutConfig } from "./googleclouddialogflowcxv3rolloutconfig";
import { GoogleCloudDialogflowCxV3RolloutState } from "./googleclouddialogflowcxv3rolloutstate";
import { GoogleCloudDialogflowCxV3VariantsHistory } from "./googleclouddialogflowcxv3variantshistory";
export var GoogleCloudDialogflowCxV3ExperimentStateEnum;
(function (GoogleCloudDialogflowCxV3ExperimentStateEnum) {
    GoogleCloudDialogflowCxV3ExperimentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ExperimentStateEnum["Draft"] = "DRAFT";
    GoogleCloudDialogflowCxV3ExperimentStateEnum["Running"] = "RUNNING";
    GoogleCloudDialogflowCxV3ExperimentStateEnum["Done"] = "DONE";
    GoogleCloudDialogflowCxV3ExperimentStateEnum["RolloutFailed"] = "ROLLOUT_FAILED";
})(GoogleCloudDialogflowCxV3ExperimentStateEnum || (GoogleCloudDialogflowCxV3ExperimentStateEnum = {}));
// GoogleCloudDialogflowCxV3Experiment
/**
 * Represents an experiment in an environment.
**/
var GoogleCloudDialogflowCxV3Experiment = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Experiment, _super);
    function GoogleCloudDialogflowCxV3Experiment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ExperimentDefinition)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentLength" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "experimentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ExperimentResult)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutConfig" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3RolloutConfig)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "rolloutConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutFailureReason" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "rolloutFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rolloutState" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3RolloutState)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "rolloutState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantsHistory", elemType: GoogleCloudDialogflowCxV3VariantsHistory }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Experiment.prototype, "variantsHistory", void 0);
    return GoogleCloudDialogflowCxV3Experiment;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Experiment };
