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
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstats";
import { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig } from "./googlecloudcontactcenterinsightsv1issuemodelinputdataconfig";
export var GoogleCloudContactcenterinsightsV1IssueModelStateEnum;
(function (GoogleCloudContactcenterinsightsV1IssueModelStateEnum) {
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["Undeployed"] = "UNDEPLOYED";
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["Deploying"] = "DEPLOYING";
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["Deployed"] = "DEPLOYED";
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["Undeploying"] = "UNDEPLOYING";
    GoogleCloudContactcenterinsightsV1IssueModelStateEnum["Deleting"] = "DELETING";
})(GoogleCloudContactcenterinsightsV1IssueModelStateEnum || (GoogleCloudContactcenterinsightsV1IssueModelStateEnum = {}));
// GoogleCloudContactcenterinsightsV1IssueModelInput
/**
 * The issue model resource.
**/
var GoogleCloudContactcenterinsightsV1IssueModelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1IssueModelInput, _super);
    function GoogleCloudContactcenterinsightsV1IssueModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputDataConfig" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput)
    ], GoogleCloudContactcenterinsightsV1IssueModelInput.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingStats" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1IssueModelLabelStats)
    ], GoogleCloudContactcenterinsightsV1IssueModelInput.prototype, "trainingStats", void 0);
    return GoogleCloudContactcenterinsightsV1IssueModelInput;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1IssueModelInput };
// GoogleCloudContactcenterinsightsV1IssueModel
/**
 * The issue model resource.
**/
var GoogleCloudContactcenterinsightsV1IssueModel = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1IssueModel, _super);
    function GoogleCloudContactcenterinsightsV1IssueModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputDataConfig" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingStats" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1IssueModelLabelStats)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "trainingStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModel.prototype, "updateTime", void 0);
    return GoogleCloudContactcenterinsightsV1IssueModel;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1IssueModel };
