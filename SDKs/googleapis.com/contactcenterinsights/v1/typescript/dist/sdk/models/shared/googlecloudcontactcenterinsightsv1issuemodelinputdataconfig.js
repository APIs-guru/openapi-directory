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
export var GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum;
(function (GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum) {
    GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum["MediumUnspecified"] = "MEDIUM_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum["PhoneCall"] = "PHONE_CALL";
    GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum["Chat"] = "CHAT";
})(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum || (GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum = {}));
// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
/**
 * Configs for the input data used to create the issue model.
**/
var GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig, _super);
    function GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingConversationsCount" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.prototype, "trainingConversationsCount", void 0);
    return GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig };
// GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput
/**
 * Configs for the input data used to create the issue model.
**/
var GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput, _super);
    function GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput.prototype, "medium", void 0);
    return GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput };
