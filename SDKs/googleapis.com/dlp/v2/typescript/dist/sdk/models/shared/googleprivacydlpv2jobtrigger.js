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
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2Trigger } from "./googleprivacydlpv2trigger";
export var GooglePrivacyDlpV2JobTriggerStatusEnum;
(function (GooglePrivacyDlpV2JobTriggerStatusEnum) {
    GooglePrivacyDlpV2JobTriggerStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Healthy"] = "HEALTHY";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Paused"] = "PAUSED";
    GooglePrivacyDlpV2JobTriggerStatusEnum["Cancelled"] = "CANCELLED";
})(GooglePrivacyDlpV2JobTriggerStatusEnum || (GooglePrivacyDlpV2JobTriggerStatusEnum = {}));
// GooglePrivacyDlpV2JobTrigger
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
var GooglePrivacyDlpV2JobTrigger = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2JobTrigger, _super);
    function GooglePrivacyDlpV2JobTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: GooglePrivacyDlpV2Error }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectJob" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectJobConfig)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "inspectJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "lastRunTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggers", elemType: GooglePrivacyDlpV2Trigger }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "triggers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTrigger.prototype, "updateTime", void 0);
    return GooglePrivacyDlpV2JobTrigger;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2JobTrigger };
// GooglePrivacyDlpV2JobTriggerInput
/**
 * Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
**/
var GooglePrivacyDlpV2JobTriggerInput = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2JobTriggerInput, _super);
    function GooglePrivacyDlpV2JobTriggerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inspectJob" }),
        __metadata("design:type", GooglePrivacyDlpV2InspectJobConfig)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "inspectJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggers", elemType: GooglePrivacyDlpV2Trigger }),
        __metadata("design:type", Array)
    ], GooglePrivacyDlpV2JobTriggerInput.prototype, "triggers", void 0);
    return GooglePrivacyDlpV2JobTriggerInput;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2JobTriggerInput };
